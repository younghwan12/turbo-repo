'use client'

import { stringToDate } from '@pims-frontend/biz/utils/stringToDate'
import { BadgeStatus } from '@pims-frontend/ui/components/base/shadcn/badge'
import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@pims-frontend/ui/components/base/shadcn/dropdown-menu'
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  type MRT_Row,
  type MRT_RowData,
  type MRT_RowSelectionState,
  type MRT_TableState,
  useMaterialReactTable,
} from '@pims-frontend/ui/components/base/shadcn/material-react-table'
import { ParameterizedIcon } from '@pims-frontend/ui/components/base/shadcn/parameterized-icon'
import { TooltipProvider } from '@pims-frontend/ui/components/base/shadcn/tooltip'
import React, { useCallback, useEffect, useMemo, useState } from 'react'

export type user = {
  rolCd: string
  usrId: string
  usrNikNm: string
}

export type SubPjtGridProps<RowData extends MRT_RowData> = {
  data: RowData[]
  onClickRow?: (
    row: MRT_Row<RowData>,
  ) => React.MouseEventHandler<HTMLTableRowElement>
  onClickSetWitNum?: (
    row: MRT_Row<RowData>,
  ) => React.MouseEventHandler<HTMLDivElement>
  addSubGrpBtnClick?: () => void
  addSubPjtBtnClick?: () => void
  delSubPjtBtnClick?: (selectedData: RowData[]) => void
} & Partial<
  Pick<MRT_TableState<RowData>, 'isLoading' | 'isSaving' | 'showProgressBars'>
>

export const SubPjtGrid = <RowData extends MRT_RowData>({
  data,
  onClickRow,
  onClickSetWitNum,
  addSubGrpBtnClick,
  addSubPjtBtnClick,
  delSubPjtBtnClick,
  isLoading,
  isSaving,
}: SubPjtGridProps<RowData>) => {
  const handleClickAndStopPropagation: React.MouseEventHandler<
    HTMLButtonElement | HTMLTableCellElement | HTMLDivElement | Element
  > = useCallback(e => {
    e.stopPropagation()
  }, [])

  const columns = useMemo<MRT_ColumnDef<RowData>[]>(
    () => [
      {
        accessorKey: 'subPjtNm',
        header: '서브프로젝트',
      },
      {
        accessorKey: 'subPjtMngRId',
        header: '서브프로젝트 관리자',
        Cell(props) {
          const subPjtMngRId = props.row.original.subPjtMngRId
          return (
            <div className="flex gap-2">
              {subPjtMngRId.length > 0 ? (
                subPjtMngRId.map((usr: user, i: number) => {
                  return (
                    <BadgeStatus
                      key={props.row.index + i}
                      size={'md'}
                      background="default"
                    >
                      {usr.usrNikNm}
                    </BadgeStatus>
                  )
                })
              ) : (
                <div className="flex items-center text-status-destructive gap-1">
                  <ParameterizedIcon name="CircleAlert" size={16} />
                  <div>PL권한을 가진 사용자가 배정되지 않았어요</div>
                </div>
              )}
            </div>
          )
        },
      },
      {
        accessorKey: 'range',
        header: '기간',
        Cell({ row }) {
          const staYmd = row.original.staYmd
          const endYmd = row.original.endYmd
          return (
            <div className="flex items-center">
              <ParameterizedIcon name="Calendar" className="h-4 w-4" />
              <div className="ml-2 flex gap-1 items-center">
                <div>{stringToDate(staYmd)}</div>
                <ParameterizedIcon name="Minus" className="w-1.5 h-3" />
                <div>{stringToDate(endYmd)}</div>
              </div>
            </div>
          )
        },
      },
      {
        accessorKey: 'witNum',
        header: '가중치(%)',
        muiTableBodyCellProps: {
          onClick: handleClickAndStopPropagation,
        },
        Cell({ row }) {
          const wit = row.original.witNum
          return (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events
            <div
              className={`${!wit ? 'text-status-destructive' : 'text-right'}`}
              onClick={e => {
                handleClickAndStopPropagation(e)
                onClickSetWitNum?.(row)(e)
              }}
            >
              {!wit ? (
                <div className="flex items-center text-status-destructive gap-1">
                  <ParameterizedIcon name="CircleAlert" size={16} />
                  <div>가중치설정이 필요해요</div>
                </div>
              ) : (
                wit
              )}
            </div>
          )
        },
      },
    ],
    [handleClickAndStopPropagation, onClickSetWitNum],
  )

  const [rowSelection, setRowSelection] = useState<MRT_RowSelectionState>({})

  //삭제 후 체크박스 빼기..
  useEffect(() => {
    setRowSelection({})
  }, [data])

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
      <div>
        <div className="flex justify-between items-end px-4 py-2 rounded-t-sm">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium">
              전체{' '}
              <span className="text-[--violet-10]">
                {props.table.getRowCount()}
              </span>
            </p>
          </div>
          <div className="flex justify-between gap-1">
            <div className="flex gap-3">
              {props.table.getSelectedRowModel().rows.length > 0 && (
                <div className="flex gap-0.5 items-center text-2xs">
                  <div>{props.table.getSelectedRowModel().rows.length}</div>
                  <div>선택됨</div>
                </div>
              )}
              <div className="flex gap-1">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size={'xs'}
                      className="text-primary-normal border-primary-normal"
                    >
                      <ParameterizedIcon name="Plus" size={12} />
                      추가
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[140px]">
                    <DropdownMenuLabel>사용자 검색</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={addSubGrpBtnClick}>
                      <span>서브그룹 추가</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={addSubPjtBtnClick}>
                      <span>서브프로젝트 추가</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button
                  variant={'outline'}
                  className="gap-2 text-destructive border-destructive"
                  size={'xs'}
                  onClick={() => {
                    const selectedData = table
                      .getSelectedRowModel()
                      .rows.map(({ original }) => original)
                    delSubPjtBtnClick?.(selectedData)
                  }}
                  disabled={
                    props.table.getSelectedRowModel().rows.length > 0
                      ? false
                      : true
                  }
                >
                  <ParameterizedIcon name="Trash" size={12} />
                  삭제
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

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
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    enableRowOrdering: true,
    muiRowDragHandleProps: ({ table }) => ({
      onDragEnd: () => {
        const { draggingRow, hoveredRow } = table.getState()
        if (hoveredRow && draggingRow) {
          // console.log('draggingRow', draggingRow.original)
          // console.log('hoveredRow', hoveredRow.original)
        }
      },
    }),
    displayColumnDefOptions: {
      'mrt-row-drag': {
        header: '',
        size: 50,
      },
    },

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
      rowSelection: rowSelection,
    },
    initialState: {
      density: 'compact',
      columnOrder: [
        'mrt-row-drag',
        'mrt-row-select',
        'subPjtNm',
        'subPjtMngRId',
        'range',
        'witNum',
      ],
    },
  })

  return (
    <TooltipProvider>
      <MaterialReactTable table={table} />
    </TooltipProvider>
  )
}
