'use client'

import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import { Checkbox } from '@pims-frontend/ui/components/base/shadcn/checkbox'
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  type MRT_RowData,
  useMaterialReactTable,
} from '@pims-frontend/ui/components/base/shadcn/material-react-table'
import { ParameterizedIcon } from '@pims-frontend/ui/components/base/shadcn/parameterized-icon'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@pims-frontend/ui/components/base/shadcn/popover'
import { TooltipProvider } from '@pims-frontend/ui/components/base/shadcn/tooltip'
import { useMemo, useState } from 'react'

export type SubGrpAddGridProps<RowData extends MRT_RowData> = {
  data: RowData[]
  //onDataChange: (newData: RowData[]) => void;
}

const options = [
  { id: '1', label: '옵션1' },
  { id: '2', label: '옵션2' },
  { id: '3', label: '옵션3' },
  { id: '4', label: '옵션4' },
]

export const SubGrpAddGrid = <RowData extends MRT_RowData>({
  data,
  //onDataChange
}: SubGrpAddGridProps<RowData>) => {
  // const handleClickAndStopPropagation: React.MouseEventHandler<
  //   HTMLButtonElement | HTMLTableCellElement | HTMLDivElement | Element
  // > = React.useCallback(e => {
  //   e.stopPropagation()
  // }, [])

  const [tableData, setTableData] = useState(data)

  // const handleNameChange = useCallback(
  //   (rowIndex: number, newValue: string) => {
  //     const updatedData = tableData.map((row, index) =>
  //       index === rowIndex ? { ...row, subGrpNm: newValue } : row,
  //     )
  //     setTableData(updatedData)
  //   },
  //   [tableData],
  // )

  //서브프로젝트 변경
  const [allSelectedOptions, setAllSelectedOptions] = useState<string[]>([])

  const handleSubPjtChange = (rowIndex: number, optionId: string) => {
    const updatedData = tableData.map((row, index) => {
      if (index === rowIndex) {
        const selectedOptions = row.subPjt ? row.subPjt.split(',') : []
        const isSelected = selectedOptions.includes(optionId)
        if (isSelected) {
          return {
            ...row,
            subPjt: selectedOptions
              .filter((id: string) => id !== optionId)
              .join(','),
          }
        } else {
          return { ...row, subPjt: [...selectedOptions, optionId].join(',') }
        }
      }
      return row
    })
    setTableData(updatedData)

    const allOptions = updatedData.flatMap(row =>
      row.subPjt ? row.subPjt.split(',') : [],
    )
    setAllSelectedOptions([...new Set(allOptions)])
  }

  const addRowFunction = () => {
    const newRow = {
      subGrpNm: '',
      subPjt: '',
    }
    const setFunc = (old: any[]) => [...old, newRow]
    setTableData(setFunc)
  }

  const columns = useMemo<MRT_ColumnDef<RowData>[]>(
    () => [
      {
        accessorKey: 'subGrpNm',
        header: '서브그룹',
        enableEditing: true,
        // muiEditTextFieldProps: ({ cell, row }) => ({
        //   type: 'text',
        //   onBlur: event => {
        //     const newValue = event.target.value
        //     handleNameChange(row.index, newValue)
        //   },
        // }),
      },
      {
        accessorKey: 'subPjt',
        header: '서브프로젝트',
        enableEditing: false,
        Cell: props => {
          const rowIndex = props.row.index
          const selectedIds = tableData[rowIndex]?.subPjt.split(',') || []

          return (
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-between truncate"
                >
                  <span className="grow text-left">
                    {selectedIds.length > 0
                      ? options
                          .filter(option => selectedIds.includes(option.id))
                          .map(option => option.label)
                          .join(', ')
                      : '\u00A0'}
                  </span>
                  <ParameterizedIcon
                    name="ChevronDown"
                    className="h-4 w-4 shrink-0 opacity-50"
                  />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] px-1 py-1.5">
                <div className="flex flex-col">
                  {/* <h4 className="font-medium leading-none">옵션 선택</h4> */}
                  {options.map(option => (
                    <div
                      key={option.id}
                      className="flex items-center justify-between px-2 py-1.5"
                    >
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id={option.id}
                          checked={selectedIds.includes(option.id)}
                          onCheckedChange={() =>
                            handleSubPjtChange(rowIndex, option.id)
                          }
                          disabled={
                            allSelectedOptions.includes(option.id) &&
                            !selectedIds.includes(option.id)
                          }
                        />
                        <label
                          htmlFor={option.id}
                          className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
                        >
                          {option.label}
                        </label>
                      </div>
                      {allSelectedOptions.includes(option.id) &&
                        !selectedIds.includes(option.id) && (
                          <div>
                            {/* 추후 BadgeStatus로 변경 */}
                            <div className="inline-flex h-6 justify-center items-center rounded-lg border bg-card text-card-foregroun px-2 py-1 text-xs opacity-70">
                              배정 완료
                            </div>
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          )
        },
      },
    ],
    [tableData, allSelectedOptions, handleSubPjtChange],
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

    // muiTableBodyRowProps: ({ row }) => ({
    //   sx: { cursor: 'pointer' },
    // }),

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
    renderBottomToolbar: () => (
      <div className="flex items-center justify-center mt-6">
        <Button
          variant="ghost"
          size={'xs'}
          className="w-full !text-primary-normal text-sm hover:bg-transparent"
          onClick={addRowFunction}
        >
          <ParameterizedIcon name="CirclePlus" size={12} />
          그룹 추가
        </Button>
        {/* <Button variant="ghost" size={'xs'} className='w-full text-primary-normal text-sm' onClick={() => console.log(props.table.getRowModel().rows)}>
                테스트버튼
            </Button> */}
      </div>
    ),
    localization: {
      sortByColumnAsc: '오름차순 정렬',
      sortByColumnDesc: '내림차순 정렬',
      sortedByColumnAsc: '오름차순 정렬됨',
      sortedByColumnDesc: '내림차순 정렬됨',
    },
    state: {},

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
      <MaterialReactTable table={table} />
    </TooltipProvider>
  )
}
