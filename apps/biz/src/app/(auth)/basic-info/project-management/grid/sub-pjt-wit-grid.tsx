'use client'

import {
  MaterialReactTable,
  type MRT_ColumnDef,
  type MRT_RowData,
  useMaterialReactTable,
} from '@pims-frontend/ui/components/base/shadcn/material-react-table'
import { ParameterizedIcon } from '@pims-frontend/ui/components/base/shadcn/parameterized-icon'
import { TooltipProvider } from '@pims-frontend/ui/components/base/shadcn/tooltip'
import { cn } from '@pims-frontend/ui/lib/utils'
import React, { useCallback, useMemo, useState } from 'react'

export type SubPjtWitGridProps<RowData extends MRT_RowData> = {
  data: RowData[]
  onDataChange: (newData: RowData[]) => void
}

export const SubPjtWitGrid = <RowData extends MRT_RowData>({
  data,
  onDataChange,
}: SubPjtWitGridProps<RowData>) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClickAndStopPropagation: React.MouseEventHandler<
    HTMLButtonElement | HTMLTableCellElement | HTMLDivElement | Element
  > = useCallback(e => {
    e.stopPropagation()
  }, [])

  const [tableData, setTableData] = useState(data)

  //총합
  const totalWitNum = useMemo(() => {
    return tableData.reduce((acc, row) => acc + (row.witNum || 0), 0)
  }, [tableData])

  const handleWitNumChange = useCallback(
    (rowIndex: number, newValue: number) => {
      const updatedData = tableData.map((row, index) =>
        index === rowIndex ? { ...row, witNum: newValue } : row,
      )
      setTableData(updatedData)
      onDataChange(updatedData)
    },
    [setTableData, tableData, onDataChange],
  )

  //memoized
  const columns = useMemo<MRT_ColumnDef<RowData>[]>(
    () => [
      {
        accessorKey: 'subPjtUid',
        header: '서브프로젝트',
        enableEditing: false,
      },
      {
        accessorKey: 'subPjtNm',
        header: '서브프로젝트명',
        enableEditing: false,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        Footer(props) {
          return <div className="flex items-center w-full">합</div>
        },
      },
      {
        accessorKey: 'witNum',
        header: '가중치',
        enableEditing: true,
        muiTableBodyCellProps: {
          sx: {
            textAlign: 'right',
          },
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        muiEditTextFieldProps: ({ cell, row }) => ({
          type: 'text',
          required: true,
          onBlur: event => {
            const newValue = Number(event.target.value)
            handleWitNumChange(row.index, newValue)
          },
        }),

        Footer: () => (
          <div
            className={cn(
              'flex items-center justify-end',
              totalWitNum === 100 ? '' : 'text-status-destructive',
            )}
          >
            {totalWitNum}
          </div>
        ),
      },
    ],
    [totalWitNum, handleWitNumChange],
  )

  const table = useMaterialReactTable({
    columns,
    data: tableData,
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
    editDisplayMode: 'cell',
    enableEditing: true,

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    muiTableBodyRowProps: ({ row }) => ({
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

    enableBottomToolbar: false,
    localization: {
      sortByColumnAsc: '오름차순 정렬',
      sortByColumnDesc: '내림차순 정렬',
      sortedByColumnAsc: '오름차순 정렬됨',
      sortedByColumnDesc: '내림차순 정렬됨',
    },

    state: {
      columnVisibility: {
        subPjtUid: false,
      },
    },

    initialState: {
      density: 'compact',
    },
  })

  return (
    <TooltipProvider>
      <MaterialReactTable table={table} />
    </TooltipProvider>
  )
}
