'use client'

import { useGetTasksFlatQuery } from '@pims-frontend/apis/lib/features/pms/task/controller/TaskController'
import {
  scheduleActions,
  scheduleSelectors,
} from '@pims-frontend/biz/lib/features/schedule/scheduleSlice'
import { useAppDispatch, useAppSelector } from '@pims-frontend/biz/lib/hooks'
import { DynamicIcon } from '@pims-frontend/ui/components/base/shadcn/dynamic-icon'
import {
  MaterialReactTable,
  MRT_ActionMenuItem,
  useMaterialReactTable,
} from '@pims-frontend/ui/components/base/shadcn/material-react-table'
import { ParameterizedIcon } from '@pims-frontend/ui/components/base/shadcn/parameterized-icon'
import { Separator } from '@pims-frontend/ui/components/base/shadcn/separator'
import { TooltipProvider } from '@pims-frontend/ui/components/base/shadcn/tooltip'

import BottomToolbar from './bottom-toolbar'
import ExpandButtonProps from './expand-button-props'
import TopToolbar from './top-toolbar'
import { useColumns } from './use-columns'

const GridWrapper = () => {
  const dispatch = useAppDispatch()
  const { isLoading } = useGetTasksFlatQuery({
    pjtUid: 6,
  })
  const { mode, selectedTask } = useAppSelector(scheduleSelectors.selectLookUp)
  const data = useAppSelector(scheduleSelectors.selectMemoizedTreeData)

  const columns = useColumns({ mode })

  const table = useMaterialReactTable({
    columns: columns,
    data: data,
    getSubRows: row => row.children,
    manualPagination: true,
    enablePagination: false,

    enableExpanding: true,
    enableExpandAll: false,
    paginateExpandedRows: true,
    muiExpandButtonProps: ExpandButtonProps,

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
      },
    },

    enableRowOrdering: false,
    enableRowSelection: mode === 'plan',
    enableSelectAll: mode === 'plan',
    getRowId: row => row.tskUid,

    enableEditing: mode === 'plan',
    enableCellActions: mode === 'plan',
    enableClickToCopy: 'context-menu',
    editDisplayMode: 'cell',
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

    onRowSelectionChange: selectedRows => {
      if (typeof selectedRows === 'function') {
        const next = selectedRows(selectedTask)
        dispatch(scheduleActions.setSelectedTasks(next))
        return
      }
      dispatch(scheduleActions.setSelectedTasks(selectedRows))
    },

    state: {
      isLoading,
      rowSelection: selectedTask,
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

export default GridWrapper
