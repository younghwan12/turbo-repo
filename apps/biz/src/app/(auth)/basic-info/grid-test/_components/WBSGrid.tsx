import { DynamicIcon } from '@pims-frontend/ui/components/base/shadcn/dynamic-icon'
import {
  MaterialReactTable,
  MRT_ActionMenuItem,
  MRT_ColumnDef,
  type MRT_Row,
  type MRT_RowData,
  MRT_TableState,
  useMaterialReactTable,
} from '@pims-frontend/ui/components/base/shadcn/material-react-table'
import { ParameterizedIcon } from '@pims-frontend/ui/components/base/shadcn/parameterized-icon'
import { Separator } from '@pims-frontend/ui/components/base/shadcn/separator'
import { TooltipProvider } from '@pims-frontend/ui/components/base/shadcn/tooltip'
import { useCallback, useMemo } from 'react'
import BottomToolbar from './BottomToolBar'
import ExpandButton from './ExpandButton'
import TopToolbar from './TopToolBar'
import { useAppSelector } from '@pims-frontend/biz/lib/hooks'
import { testSelectors } from '@pims-frontend/biz/lib/features/test/testSlice'

export type WBSGridProps<RowData extends MRT_RowData> = {
  data: RowData[]
  onClickRow?: (
    row: MRT_Row<RowData>,
  ) => React.MouseEventHandler<HTMLTableRowElement>
  onClickSetWitNum?: (
    row: MRT_Row<RowData>,
  ) => React.MouseEventHandler<HTMLDivElement>
} & Partial<
  Pick<MRT_TableState<RowData>, 'isLoading' | 'isSaving' | 'showProgressBars'>
>
const WBSGrid = <RowData extends MRT_RowData>({
  data,
  isLoading,
}: WBSGridProps<RowData>) => {
  const handleClickAndStopPropagation: React.MouseEventHandler<
    HTMLButtonElement | HTMLTableCellElement | HTMLDivElement | Element
  > = useCallback(e => {
    e.stopPropagation()
  }, [])

  const { mode } = useAppSelector(testSelectors.state)

  const columns = useMemo<MRT_ColumnDef<RowData>[]>(() => {
    return [
      {
        accessorKey: 'wbsNo',
        header: 'WBS',
      },
      {
        accessorKey: 'tskNm',
        header: '작업명',
      },
      {
        accessorKey: 'srtNo',
        header: '작업순서',
        Cell: () => {
          return <div>Y/N</div>
        },
      },
      {
        header: '산출물',
      },
      {
        header: '상태',
      },
      {
        header: '계획 기간',
        accessorFn: data => {
          return `${data.plnStaYmd} ~ ${data.plnEndYmd}`
        },
      },
      {
        header: '작업기간(일)',
        accessorKey: 'plnDurNum',
      },
      {
        header: '실제 시작일',
        accessorKey: 'ralStaYmd',
      },
      {
        header: '가중치(%)',
        accessorKey: 'plnWgtNum',
      },
      {
        header: '계획 진척률(%)',
      },
      {
        header: '실적 진척률(%)',
        accessorKey: 'recHwyRat',
      },
      {
        header: '담당자',
        // NOTE: undefined 에러 막으려고 잠시 주석처리
        // accessorKey: 'assignUsers.usrUid',
      },
      {
        header: '실제 종료일',
        accessorKey: 'ralEndYmd',
      },
    ] satisfies MRT_ColumnDef<RowData>[]
  }, [])

  const table = useMaterialReactTable({
    columns: columns,
    data: data,
    getSubRows: row => row.children,
    manualPagination: true,
    enablePagination: false,

    enableExpanding: true,
    enableExpandAll: false,
    paginateExpandedRows: true,
    // muiExpandButtonProps: ExpandButton,
    enableColumnActions: false,
    enableColumnFilters: false,
    enableColumnFilterModes: false,
    enableColumnDragging: false,
    enableColumnOrdering: true,
    enableColumnPinning: true,
    displayColumnDefOptions: {
      'mrt-row-expand': {
        header: '작업명',
        minSize: 300,
        Cell(props) {
          return <div>{props.row.original['tskNm']}</div>
        },
      },
    },

    enableRowSelection: mode === 'edit',
    enableSelectAll: mode === 'edit',
    getRowId: row => row.tskUid,

    enableEditing: mode === 'edit',
    enableCellActions: mode === 'edit',

    enableRowOrdering: false,

    enableClickToCopy: 'context-menu',
    editDisplayMode: 'cell',
    enableRowVirtualization: true,
    muiTableContainerProps: { sx: { maxHeight: '600px' } },
    renderCellActionMenuItems: ({ closeMenu, table, row }) => [
      <MRT_ActionMenuItem
        key={`${row.id}_copy_row_above`}
        icon={<DynamicIcon name="copy-plus" />}
        label={'위에 새 행 복사'}
        onClick={() => {
          closeMenu()
        }}
        table={table}
      />,
      <MRT_ActionMenuItem
        key={`${row.id}_copy_row_below`}
        icon={<DynamicIcon name="copy-plus" />}
        label={'아래에 새 행 복사'}
        onClick={() => {
          closeMenu()
        }}
        table={table}
      />,
      <Separator key={`${row.id}_action_separator`} />,
      <MRT_ActionMenuItem
        key={`${row.id}_indent_right`}
        icon={<DynamicIcon name="arrow-left-to-line" />}
        label={'상위 행으로 변경'}
        onClick={() => {
          closeMenu()
        }}
        table={table}
      />,
      <MRT_ActionMenuItem
        key={`${row.id}_indent_left`}
        icon={<DynamicIcon name="arrow-right-to-line" />}
        label={'하위 행으로 변경'}
        onClick={() => {
          closeMenu()
        }}
        table={table}
      />,
    ],
    enableTopToolbar: true,
    renderTopToolbar: TopToolbar,
    enableBottomToolbar: true,
    renderBottomToolbar: BottomToolbar,

    mrtTheme: {
      // NOTE: 이거 안하면, hsl(NaN NaN undefined) 이런식으로 나와서 transparent처리됨 (pinned column이 가리질 않음)
      baseBackgroundColor: 'hsl(var(--background))',
    },

    localization: {
      expandAll: '모두 펼치기',
      expand: '펼치기',
      collapseAll: '모두 닫기',
      collapse: '닫기',
    },

    icons: {
      SyncAltIcon: () => <ParameterizedIcon name="ChevronsUpDown" />,
      ArrowDownwardIcon: () => <ParameterizedIcon name="ChevronDown" />,
    },

    // onRowSelectionChange: (selectedRows) => {
    //   if (typeof selectedRows === 'function') {
    //     const next = selectedRows(selectedTask);
    //     dispatch(scheduleActions.setSelectedTasks(next));
    //     return;
    //   }
    //   dispatch(scheduleActions.setSelectedTasks(selectedRows));
    // },

    state: {
      isLoading,
      //   rowSelection: selectedTask,
    },

    initialState: {
      density: 'compact',
      columnPinning: {
        left: ['mrt-row-select', 'wbsNo', 'mrt-row-expand', 'tskNm', 'srtNo'],
      },
      showGlobalFilter: false,
      columnOrder: ['mrt-row-select'],
    },
  })
  return (
    <TooltipProvider>
      <MaterialReactTable table={table} />
    </TooltipProvider>
  )
}

export default WBSGrid
