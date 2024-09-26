'use client'

import { BadgeStatus } from '@pims-frontend/ui/components/base/shadcn/badge'
import type {
  MRT_ColumnDef,
  MRT_RowData,
  MRT_TableState,
} from '@pims-frontend/ui/components/base/shadcn/material-react-table'
import {
  MRT_TableContainer,
  useMaterialReactTable,
} from '@pims-frontend/ui/components/base/shadcn/material-react-table'
import { ParameterizedIcon } from '@pims-frontend/ui/components/base/shadcn/parameterized-icon'
import { TooltipProvider } from '@pims-frontend/ui/components/base/shadcn/tooltip'
import React, { useMemo } from 'react'

export type SubPjtGridProps<RowData extends MRT_RowData> = {
  data: RowData[]
} & Partial<
  Pick<MRT_TableState<RowData>, 'isLoading' | 'isSaving' | 'showProgressBars'>
>

export const SubPjtInUsrGrid = <RowData extends MRT_RowData>({
  data,
  isLoading,
  isSaving,
}: SubPjtGridProps<RowData>) => {
  // const handleClickAndStopPropagation: React.MouseEventHandler<
  //   HTMLButtonElement | HTMLTableCellElement | HTMLDivElement | Element
  // > = React.useCallback(e => {
  //   e.stopPropagation()
  // }, [])

  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<RowData>[]>(
    () => [
      {
        accessorKey: 'usrAuth',
        header: '권한',
      },
      {
        accessorKey: 'usrNikNm',
        header: '투입인원',
      },
      {
        accessorKey: 'adminYN',
        header: '서브프로젝트 관리자',
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
    [],
  )

  const table = useMaterialReactTable({
    columns,
    data,
    muiTableProps: {
      sx: theme => ({
        borderRadius: theme.shape.borderRadius,
      }),
    },

    enableTopToolbar: false,

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
    icons: {
      SyncAltIcon: () => <ParameterizedIcon name="ChevronsUpDown" />,
      ArrowDownwardIcon: () => <ParameterizedIcon name="ChevronDown" />,
    },
    enableRowSelection: false,
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

    enableBottomToolbar: false,
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
    },

    initialState: {
      density: 'compact',
      columnOrder: [
        'companyCode',
        'userName',
        'companyName',
        'subProjects',
        'authority',
        'resetPassword',
      ],
    },
  })

  return (
    <TooltipProvider>
      <MRT_TableContainer table={table} />
    </TooltipProvider>
  )
}
