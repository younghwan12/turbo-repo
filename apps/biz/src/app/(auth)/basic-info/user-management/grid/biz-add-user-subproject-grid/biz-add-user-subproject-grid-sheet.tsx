'use client'

import { addUserModalSelector } from '@pims-frontend/biz/lib/features/user-management/addUserSlice'
import { useAppDispatch, useAppSelector } from '@pims-frontend/biz/lib/hooks'

import type { BizUserGridIsPutInOption } from '../../biz-user-select-option'
import { BizAddUserSubprojectGrid } from './biz-add-user-subproject-grid'

// const initialSheetState: SheetState = {
//   isOpen: false,
//   data: null,
// } satisfies SheetState

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

export const BizAddUserSubprojectGridSheet = () => {
  useAppDispatch()
  const { target } = useAppSelector(addUserModalSelector.selectAddModalState)

  return (
    <BizAddUserSubprojectGrid
      data={target || []}
      // showProgressBars={isFetching}
      // isLoading={isFetching}
      // onOpenChange={row => () => {
      //   // console.log('onOpenChange', row, open);
      // }}
      // onValueChange={row => () => {
      //   // console.log('onValueChange', row, value);
      // }}
      // onClickDropdownMenuItem={value => e => {
      //   // console.log('onClickDropdownMenuItem', value, e);
      // }}
      // onClickResetPassword={row => e => {
      //   // dispatch(userMgtActions.openResetModal(row.original));
      // }}
    />
  )
}
