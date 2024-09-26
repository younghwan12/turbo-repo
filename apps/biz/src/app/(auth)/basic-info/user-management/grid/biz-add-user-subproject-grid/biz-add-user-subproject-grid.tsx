'use client'

import {
  MaterialReactTable,
  type MRT_ColumnDef,
  type MRT_Row,
  type MRT_RowData,
  type MRT_TableState,
  useMaterialReactTable,
} from '@pims-frontend/ui/components/base/shadcn/material-react-table'
import { TooltipProvider } from '@pims-frontend/ui/components/base/shadcn/tooltip'
import React, { useCallback, useMemo } from 'react'

import type { BizUserGridAuthSelectProps } from '../../biz-user-grid-cell-auth-select'
import type { BizUserGridFilterDropdownButtonProps } from '../biz-user-grid-filter-dropdown-botton'

export type BizUserGridProps<RowData extends MRT_RowData> = {
  data: RowData[]
  onClickRow?: (
    row: MRT_Row<RowData>,
  ) => React.MouseEventHandler<HTMLTableRowElement>
  onClickResetPassword?: (
    row: MRT_Row<RowData>,
  ) => React.MouseEventHandler<HTMLButtonElement>
  onClickDropdownMenuItem?: BizUserGridFilterDropdownButtonProps['onClickDropdownMenuItem']
  onOpenChange?: (
    row: MRT_Row<RowData>,
  ) => BizUserGridAuthSelectProps<RowData>['onOpenChange']
  onValueChange?: (
    row: MRT_Row<RowData>,
  ) => BizUserGridAuthSelectProps<RowData>['onValueChange']
} & Partial<
  Pick<MRT_TableState<RowData>, 'isLoading' | 'isSaving' | 'showProgressBars'>
>

export const BizAddUserSubprojectGrid = <RowData extends MRT_RowData>({
  data,
  onClickRow,
  isLoading,
  isSaving,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  showProgressBars,
}: BizUserGridProps<RowData>) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClickAndStopPropagation: React.MouseEventHandler<
    HTMLButtonElement | HTMLTableCellElement | HTMLDivElement | Element
  > = useCallback(e => {
    e.stopPropagation()
  }, [])

  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<RowData>[]>(
    () => [
      {
        accessorKey: 'usrNm',
        header: '사용자명',
      },
      {
        accessorKey: 'subPjtUid',
        header: '서브 프로젝트',
      },
      {
        accessorKey: 'rolCd',
        header: '사용자 권한',
        accessorFn: user =>
          Array.isArray(user.authority) ? user.authority[0] : '지정 불가', //default value
        // Cell(props) {
        //   return (
        //     <BizUserGridCellAuthSelect
        //       {...props}
        //       selectOptions={selectOptions}
        //       onOpenChange={onOpenChange?.(props.row)}
        //       onValueChange={onValueChange?.(props.row)}
        //     />
        //   )
        // },
        muiTableBodyCellProps: {
          sx: {
            paddingY: 0,
            border: '1px solid hsl(var(--border))',
          },
        },
      },
    ],
    [],
  )

  const table = useMaterialReactTable({
    columns,
    data,
    getRowId: row => row.userId,

    muiTableProps: {
      sx: theme => ({
        borderRadius: theme.shape.borderRadius,
      }),
    },

    enableTopToolbar: false,
    enablePagination: false,
    enableSorting: false,
    enableColumnActions: false,
    muiTableHeadCellProps: {
      sx: {
        '&:first-of-type': {
          borderLeft: 0,
          borderRight: '1px solid hsl(var(--border))',
          borderBottom: '1px solid hsl(var(--border))',
          borderTop: '1px solid hsl(var(--border))',
        },
        '&:last-of-type': {
          borderLeft: '1px solid hsl(var(--border))',
          borderRight: 0,
          borderBottom: '1px solid hsl(var(--border))',
          borderTop: '1px solid hsl(var(--border))',
        },
        border: '1px solid hsl(var(--border))',
        paddingLeft: 2,
        paddingRight: 2,
      },
    },

    enableRowSelection: false,

    muiTableBodyRowProps: ({ row }) => ({
      onClick: onClickRow?.(row),
      sx: { cursor: 'pointer' },
    }),

    muiTableBodyCellProps: {
      sx: {
        '&:first-of-type': {
          borderLeft: 0,
          borderRight: '1px solid hsl(var(--border))',
          borderBottom: '1px solid hsl(var(--border))',
          borderTop: '1px solid hsl(var(--border))',
        },
        '&:last-of-type': {
          borderLeft: '1px solid hsl(var(--border))',
          borderRight: 0,
          borderBottom: '1px solid hsl(var(--border))',
          borderTop: '1px solid hsl(var(--border))',
        },
        border: '1px solid hsl(var(--border))',
        padding: 0.5,
        paddingLeft: 2,
        paddingRight: 2,
      },
    },

    enableBottomToolbar: true,

    state: {
      isLoading: isLoading || false,
      isSaving: isSaving || false,
    },

    initialState: {
      density: 'compact',
      columnOrder: ['usrNm', 'subPjtUid', 'rolCd'],
    },
  })

  return (
    <TooltipProvider>
      <MaterialReactTable table={table} />
    </TooltipProvider>
  )
}
