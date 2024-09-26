'use client'

import { useGetProjectUserListQuery } from '@pims-frontend/apis/lib/features/pms/projectUser/controller/ProjectUserController'
import type { BizProjectUserListDto } from '@pims-frontend/apis/lib/features/pms/projectUser/request/ProjectUserReqDto'
import { projectSelectors } from '@pims-frontend/biz/lib/features/project/projectSlice'
import { useAppDispatch, useAppSelector } from '@pims-frontend/biz/lib/hooks'
import React, { useState } from 'react'

import type {
  BizUserGridIsPutInOption,
  BizUserGridResideOption,
  BizUserGridSelectOption,
} from './biz-user-select-option'
import type { SheetState } from './biz-user-sheet/biz-user-detail-sheet'
import BizUserDetailSheet from './biz-user-sheet/biz-user-detail-sheet'
import BizAddUserDialog from './dialog/add-user-dialog/partner-contents/biz-add-uesr-dialog'
import { BizDeleteUserDialog } from './dialog/biz-delete-user-dialog/biz-delete-user-dialog'
import { PasswordResetRequestDialog } from './dialog/reset-password-dialog/password-reset-request-dialog'
import { PasswordResetRevealDialog } from './dialog/reset-password-dialog/password-reset-reveal-dialog'
import BizAssginSubpjtDialog from './dialog/sub-project-mgt-dialog/biz-sub-project-dialog'
import { BizUserGrid } from './grid/biz-user-grid'

const initialSheetState: SheetState = {
  isOpen: false,
  data: null,
} satisfies SheetState

export const selectOptions = [
  {
    value: 'system-admin',
    displayString: '시스템 관리자',
    color: 'teal',
  },
  {
    value: 'field-admin',
    displayString: '현장 관리자',
    color: 'lime',
  },
  { value: 'member', displayString: 'Member', color: 'white' },
] satisfies BizUserGridSelectOption[]

export const selectResideOptions = [
  {
    value: 'reside',
    displayString: '상주',
    color: 'teal',
  },
  {
    value: 'no-reside',
    displayString: '비상주',
    color: 'lime',
  },
] satisfies BizUserGridResideOption[]

export const selectPutInOptions = [
  {
    value: 'putIn',
    displayString: '투입',
    color: 'teal',
  },
  {
    value: 'no-putIn',
    displayString: '철수',
    color: 'lime',
  },
  {
    value: 'change-putIn',
    displayString: '교체',
    color: 'white',
  },
] satisfies BizUserGridIsPutInOption[]

export const BizUserGridSheet = () => {
  useAppDispatch()
  const { target } = useAppSelector(projectSelectors.selectProjectCombobox)

  const [pagination] = useState({
    pageIndex: 0,
    pageSize: 20,
  })
  const pjtUid = target?.pjtUid
  const { data, isFetching } = useGetProjectUserListQuery(
    { pjtUid }, // API 요청 파라미터로 pjtUid 사용
    {
      skip: !pjtUid,
    },
  )

  const [sheet, setSheet] = useState<SheetState>(initialSheetState)
  // 로딩 상태 처리

  return (
    <>
      <BizUserGrid
        data={data || []}
        pagination={pagination}
        showProgressBars={isFetching}
        isLoading={isFetching}
        selectOptions={selectOptions}
        selectResideOptions={selectResideOptions}
        selectPutInOptions={selectPutInOptions}
        onClickRow={row => () => {
          setSheet(prev => ({
            ...prev,
            isOpen: !prev.isOpen,
            data: row.original as BizProjectUserListDto,
          }))
        }}
      />

      {/* <CommonPagination
        dataLength={data?.length || 0}
        paginationState={[pagination, setPagination]}
      /> */}

      <BizUserDetailSheet sheetState={[sheet, setSheet]} />
      <BizDeleteUserDialog />
      <BizAddUserDialog />
      <BizAssginSubpjtDialog />
      <PasswordResetRequestDialog />
      <PasswordResetRevealDialog />
    </>
  )
}
export default BizUserGridSheet
