'use client'

import type { MRT_ColumnDef } from 'material-react-table'
import {
  MaterialReactTable as OriginalMRT,
  useMaterialReactTable,
} from 'material-react-table'
import React from 'react'

import { flatNestedColumnKeys } from '../../../lib/grid'

export * from 'material-react-table'

export function createColumnsFromData<T extends Record<string, never>>(
  data: T[] | [T, ...T[]],
  excludedKeys?: string[],
): MRT_ColumnDef<T>[] {
  const aggregatedColumns = data.reduce((acc, row) => {
    const keys = flatNestedColumnKeys(row)
    const colDefs: MRT_ColumnDef<T>[] = keys
      .filter(key => !excludedKeys?.includes(key))
      .map(key => {
        return {
          header: key,
          accessorKey: key,
          muiTableBodyCellProps: {
            sx: {
              width: 'fit-content',
              minWidth: 'fit-content',
            },
          },
        }
      })
    const uniqueColumns = colDefs.filter(
      col =>
        !acc.some(existingCol => existingCol.accessorKey === col.accessorKey),
    )

    return [...acc, ...uniqueColumns]
  }, [] as MRT_ColumnDef<T>[])

  return aggregatedColumns
}

export const SimpleMRT = <T extends Record<string, never>>(props: {
  data: T[]
}) => {
  // eslint-disable-next-line import/no-named-as-default-member
  const columns = React.useMemo(
    () => createColumnsFromData(props.data),
    [props.data],
  )

  const table = useMaterialReactTable({
    columns,
    data: props.data,
  })

  return <OriginalMRT table={table} />
}
