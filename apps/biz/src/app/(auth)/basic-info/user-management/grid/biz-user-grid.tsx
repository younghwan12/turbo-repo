'use client'

import {
  rowSelectionActions,
  rowSelectionSelector,
} from '@pims-frontend/biz/lib/features/project/rowSelectionSlice'
import { addActions } from '@pims-frontend/biz/lib/features/user-management/addUserSlice'
import { useAppDispatch, useAppSelector } from '@pims-frontend/biz/lib/hooks'
import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import { InputIcon } from '@pims-frontend/ui/components/base/shadcn/input-icon'
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  type MRT_Row,
  type MRT_RowData,
  type MRT_RowSelectionState,
  type MRT_TableState,
  type MRT_Updater,
  useMaterialReactTable,
} from '@pims-frontend/ui/components/base/shadcn/material-react-table'
import { ParameterizedIcon } from '@pims-frontend/ui/components/base/shadcn/parameterized-icon'
import { Separator } from '@pims-frontend/ui/components/base/shadcn/separator'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@pims-frontend/ui/components/base/shadcn/tooltip'
import React, { useCallback, useMemo } from 'react'

import { type BizUserGridAuthSelectProps } from '../biz-user-grid-cell-auth-select'
import type {
  BizUserGridIsPutInOption,
  BizUserGridResideOption,
  BizUserGridSelectOption,
} from '../biz-user-select-option'
import type { BizUserGridFilterDropdownButtonProps } from './biz-user-grid-filter-dropdown-botton'
import BizUserGridFilterDropdownButton from './biz-user-grid-filter-dropdown-botton'
import TopButtonGroup from './top-button-group'

export type BizUserGridProps<RowData extends MRT_RowData> = {
  selectOptions: BizUserGridSelectOption[]
  selectResideOptions: BizUserGridResideOption[]
  selectPutInOptions: BizUserGridIsPutInOption[]
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
  pagination: MRT_TableState<RowData>['pagination']
} & Partial<
  Pick<MRT_TableState<RowData>, 'isLoading' | 'isSaving' | 'showProgressBars'>
>

export const BizUserGrid = <RowData extends MRT_RowData>({
  data,
  onClickRow,
  onClickResetPassword,
  selectOptions,
  selectResideOptions,
  selectPutInOptions,
  onOpenChange,
  onClickDropdownMenuItem,
  onValueChange,
  isLoading,
  isSaving,
  pagination,
}: BizUserGridProps<RowData>) => {
  const { selectedRows } = useAppSelector(
    rowSelectionSelector.selectSelectedRows,
  )

  const dispatch = useAppDispatch()

  const handleClickAndStopPropagation: React.MouseEventHandler<
    HTMLButtonElement | HTMLTableCellElement | HTMLDivElement | Element
  > = useCallback(e => {
    e.stopPropagation()
  }, [])

  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<RowData>[]>(
    () => [
      {
        accessorKey: 'usrId',
        header: '아이디',
      },
      {
        accessorKey: 'usrNm',
        header: '사용자명',
      },
      {
        accessorKey: 'in',
        header: '상주',
        accessorFn: user => (Array.isArray(user.in) ? user.in[0] : '지정 불가'), //default value
        // Cell(props) {
        //   return (
        //     <BizUserGridCellAuthSelect
        //       {...props}
        //       selectOptions={selectResideOptions}
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
      {
        accessorKey: 'companyCode', //normal accessorKey
        header: '회사',
      },
      {
        accessorKey: 'subPjtNm',
        accessorFn: user => {
          if (user.subPjtNm.length > 1) {
            return `${user.subPjtNm[0]} 외 ${user.subPjtNm.length - 1}개`
          }

          if (user.subPjtNm.length === 1) {
            return user.subPjtNm[0]
          }

          return '프로젝트 미투입'
        },
        header: '서브프로젝트',
        Cell(props) {
          return (
            <Tooltip delayDuration={0}>
              <TooltipTrigger>{props.renderedCellValue}</TooltipTrigger>
              {props.row.original.subPjtNm.length > 1 && (
                <TooltipContent>
                  <p>{props.row.original.subPjtNm.join(', ')}</p>
                </TooltipContent>
              )}
            </Tooltip>
          )
        },
      },
      {
        accessorKey: 'authority',
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
      {
        accessorKey: 'workdate',
        header: '투입 기간',
        muiTableBodyCellProps: {
          onClick: handleClickAndStopPropagation,
        },
        // accessorFn: (user) => Array,
        // Cell(props) {
        //   const { workSt, workEnd } = props.row.original
        //
        //   return (
        //     // TODO: 날짜 props 형태 아는 것이 좋을듯
        //     <BizDatePickerWithRange
        //       {...props}
        //       startDate={workSt}
        //       endDate={workEnd}
        //       onOpenChange={onOpenChange?.(props.row)}
        //       onValueChange={onValueChange?.(props.row)}
        //     />
        //   )
        // },
      },
      {
        accessorKey: 'workState',
        header: '투입 상태',
        accessorFn: user =>
          Array.isArray(user.workState) ? user.workState[0] : '지정불가',
        // Cell(props) {
        //   return (
        //     <BizUserGridCellAuthSelect
        //       {...props}
        //       selectOptions={selectPutInOptions}
        //       onOpenChange={onOpenChange?.(props.row)}
        //       onValueChange={onValueChange?.(props.row)}
        //     />
        //   )
        // },
      },
      {
        accessorKey: 'withdraw',
        header: '철수일',
        muiTableBodyCellProps: {
          onClick: handleClickAndStopPropagation,
        },
        // Cell(props) {
        //   const { withDraw } = props.row.original
        //
        //   return (
        //     <BizWidhDrawDatePicker
        //       {...props}
        //       withDraw={withDraw}
        //       onOpenChange={onOpenChange?.(props.row)}
        //       onValueChange={onValueChange?.(props.row)}
        //     />
        //   )
        // },
      },
      {
        header: '사용자 기능',
        accessorKey: 'resetPassword',
        muiTableBodyCellProps: {
          onClick: handleClickAndStopPropagation,
        },
        Cell({ row }) {
          return (
            <Button
              variant={'outline'}
              size={'xs'}
              className="py-2"
              onClick={e => {
                handleClickAndStopPropagation(e)
                onClickResetPassword?.(row)(e)
              }}
            >
              <ParameterizedIcon name="RefreshCw" className="w-4 h-4 mr-2" />
              비밀번호 초기화
            </Button>
          )
        },
      },
    ],
    [
      handleClickAndStopPropagation,
      onClickResetPassword,
      onOpenChange,
      onValueChange,
      selectOptions,
      selectPutInOptions,
      selectResideOptions,
    ],
  )

  const table = useMaterialReactTable({
    columns,
    data,
    getRowId: row => row.pjtUsrUid,
    onRowSelectionChange: (updater: MRT_Updater<MRT_RowSelectionState>) => {
      if (typeof updater !== 'function') {
        return
      }
      const newRows = updater(selectedRows)

      const selectedUserDetails = data
        .filter(row => newRows[row.pjtUsrUid]) // 선택된 행 필터링
        .map(row => ({
          usrId: row.usrId,
          pjtUsrUid: row.pjtUsrUid,
          usrNm: row.usrNm,
        }))

      dispatch(rowSelectionActions.updateSelectedRows(newRows))
      dispatch(
        rowSelectionActions.updateSelectedRowDetails(selectedUserDetails),
      )
    },

    muiTableProps: {
      sx: theme => ({
        borderRadius: theme.shape.borderRadius,
      }),
    },

    enableTopToolbar: true,
    renderTopToolbar: props => (
      <div>
        <div className="flex flex-row justify-between px-4 py-2">
          <InputIcon
            placeholder="사용자명, 사번, 소속, 프로젝트명"
            startIcon="Search"
            className="w-72"
          />

          <Button
            variant={'default'}
            onClick={() => {
              dispatch(addActions.openAddUserModal())
            }}
          >
            + 사용자 추가
          </Button>
        </div>
        <Separator orientation="horizontal" />
        <div className="flex flex-row justify-start w-full px-4 py-2">
          <div className="flex flex-col w-full gap-3">
            <div className="flex flex-wrap justify-between w-full">
              <BizUserGridFilterDropdownButton
                selectOptions={selectOptions}
                buttonText="필터"
                subTriggerText="시스템 권한"
                onClickDropdownMenuItem={onClickDropdownMenuItem}
              />
              <TopButtonGroup table={table} />
            </div>
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    renderBottomToolbar: props => (
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
      rowSelection: selectedRows,
    },

    initialState: {
      density: 'compact',
      columnOrder: [
        'mrt-row-select',
        'usrNm',
        'companyCode',
        'in',
        'authority',
        'subPjtNm',
        'withdraw',
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
