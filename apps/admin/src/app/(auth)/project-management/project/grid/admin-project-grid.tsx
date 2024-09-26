'use client'

import SearchProject from '@pims-frontend/admin/lib/features/project/search-project'
import { ProjectProgressStatusCodeCombobox } from '@pims-frontend/apis/lib/features/common/code/project-progress-status-code-combobox'
import { UsernameCellById } from '@pims-frontend/apis/lib/features/common/user/username-cell-by-id'
import { BadgeStatus } from '@pims-frontend/ui/components/base/shadcn/badge'
import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
  type MRT_Row,
  type MRT_RowData,
  type MRT_TableState,
} from '@pims-frontend/ui/components/base/shadcn/material-react-table'
import { ParameterizedIcon } from '@pims-frontend/ui/components/base/shadcn/parameterized-icon'
import { type ComboboxProps } from '@pims-frontend/ui/components/base/shadcn/select'
import { Separator } from '@pims-frontend/ui/components/base/shadcn/separator'
import { TooltipProvider } from '@pims-frontend/ui/components/base/shadcn/tooltip'
import React, { useMemo } from 'react'
import ProjectGridCellRangeDate from './project-grid-cell-range-picker'

export type AdminProjectGridProps<RowData extends MRT_RowData> = {
  data: RowData[]
  onClickRow?: (
    row: MRT_Row<RowData>,
  ) => React.MouseEventHandler<HTMLTableRowElement>
  onOpenChange?: (row: MRT_Row<RowData>) => ComboboxProps['onOpenChange']
  onValueChange?: (row: MRT_Row<RowData>) => ComboboxProps['onValueChange']
  topbarbtnClick?: () => void
  pagination: MRT_TableState<RowData>['pagination']
} & Partial<
  Pick<MRT_TableState<RowData>, 'isLoading' | 'isSaving' | 'showProgressBars'>
>

const AdminProjectGrid = <RowData extends MRT_RowData>({
  data,
  onClickRow,
  topbarbtnClick,
  onOpenChange,
  onValueChange,
  isLoading,
  isSaving,
  pagination,
}: AdminProjectGridProps<RowData>) => {
  const columns = useMemo<MRT_ColumnDef<RowData>[]>(
    () => [
      {
        accessorKey: 'pjtNo',
        header: '프로젝트NO',
      },
      {
        accessorKey: 'pjtNm',
        header: '프로젝트명',
      },
      {
        accessorKey: 'range',
        header: '기간',
        Cell(props) {
          return <ProjectGridCellRangeDate {...props} />
        },
      },
      {
        accessorKey: 'pgsStatCd',
        header: '진행상태',
        Cell(props) {
          return (
            <ProjectProgressStatusCodeCombobox
              {...props}
              className="border-none bg-transparent"
              value={props.cell.getValue<string>()}
              onOpenChange={onOpenChange?.(props.row)}
              onValueChange={onValueChange?.(props.row)}
            />
          )
        },
      },
      {
        accessorKey: 'pjtMngRId',
        header: '프로젝트 PM',
        Cell(props) {
          return <UsernameCellById userId={props.cell.getValue() as string} />
        },
      },
      {
        accessorKey: 'isTplEnabled',
        header: '템플릿 등록',
        Cell(props) {
          const background = props.cell.getValue() == false ? 'default' : 'blue'
          const value = props.cell.getValue() as boolean
          return (
            <BadgeStatus
              size={'lg'}
              background={background}
              className="w-8 h-8"
            >
              {value ? 'Y' : 'N'}
            </BadgeStatus>
          )
        },
      },
    ],
    [onOpenChange, onValueChange],
  )

  const table = useMaterialReactTable({
    columns,
    data,

    muiTableProps: {
      sx: theme => ({
        borderRadius: theme.shape.borderRadius,
      }),
    },

    enableTopToolbar: true,
    renderTopToolbar: props => (
      <div className="">
        <div className="flex justify-between items-center px-4 py-2">
          <SearchProject />
          <Button className="gap-1.5" size={'xs'} onClick={topbarbtnClick}>
            <ParameterizedIcon name="Plus" size={12} />
            프로젝트 생성
          </Button>
        </div>
        <Separator orientation="horizontal" />
        <div className="flex flex-row justify-start px-4 py-2">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium">
              전체{' '}
              <span className="text-[--violet-10]">
                {props.table.getRowCount()}
              </span>
            </p>
          </div>
        </div>
      </div>
    ),

    enableColumnActions: false,
    muiTableHeadCellProps: {
      sx: {
        border: '1px solid hsl(var(--border))',
      },
    },
    icons: {
      SyncAltIcon: () => <ParameterizedIcon name="ChevronsUpDown" />,
      ArrowDownwardIcon: () => <ParameterizedIcon name="ChevronDown" />,
    },
    enableRowSelection: false,

    muiTableBodyRowProps: ({ row }) => ({
      onClick: onClickRow?.(row),
      sx: { cursor: 'pointer' },
    }),

    muiTableBodyCellProps: {
      sx: {
        border: '1px solid hsl(var(--border))',
        padding: 0.5,
      },
    },

    enableBottomToolbar: true,
    renderBottomToolbar: () => (
      <div className="flex flex-row justify-start gap-2.5 px-4 py-2">
        <Button variant="ghost" size="icon" disabled>
          <ParameterizedIcon name="ListVideo" />
        </Button>
        <Button variant="ghost" size="icon" disabled>
          <ParameterizedIcon name="WrapText" />
        </Button>
        <Button variant="ghost" size="icon" disabled>
          <ParameterizedIcon name="WrapText" className="rotate-180" />
        </Button>
        <Button variant="ghost" size="icon">
          <ParameterizedIcon name="PanelTopDashed" />
        </Button>
        <Button variant="ghost" size="icon">
          <ParameterizedIcon name="PanelBottomDashed" />
        </Button>
      </div>
    ),

    localization: {
      sortByColumnAsc: '오름차순 정렬',
      sortByColumnDesc: '내림차순 정렬',
      sortedByColumnAsc: '오름차순 정렬됨',
      sortedByColumnDesc: '내림차순 정렬됨',
    },

    state: {
      isLoading: isLoading || false,
      isSaving: isSaving || false,
      showProgressBars: isLoading || false,
      pagination,
    },

    initialState: {
      density: 'compact',
      showGlobalFilter: true,
    },
  })

  return (
    <TooltipProvider>
      <MaterialReactTable table={table} />
    </TooltipProvider>
  )
}

export default AdminProjectGrid
