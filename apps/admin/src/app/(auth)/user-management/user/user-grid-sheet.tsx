'use client'

import PasswordResetRequestDialog from '@pims-frontend/admin/lib/features/user-management/password-reset-request-dialog'
import PasswordResetRevealDialog from '@pims-frontend/admin/lib/features/user-management/password-reset-reveal-dialog'
import {
  userManagementActions,
  userManagementSelectors,
} from '@pims-frontend/admin/lib/features/user-management/userManagementSlice'
import { useAppDispatch, useAppSelector } from '@pims-frontend/admin/lib/hooks'
import { useGetAllCodeDetailsQuery } from '@pims-frontend/apis/lib/features/common/code/controller/CodeController'
import {
  useGetAllUsersQuery,
  useUpdateUserAuthorityCodeMutation,
} from '@pims-frontend/apis/lib/features/common/user/controller/UserController'
import { useToast } from '@pims-frontend/ui/components/base/shadcn/use-toast'
import { CommonPagination } from '@pims-frontend/ui/components/common/etc/EtcPagination'
import { useEffect, useState } from 'react'
import { AdminUserGrid } from './grid/admin-user-grid'
import UserDetailSheet, {
  type SheetState,
} from './user-sheet/user-detail-sheet'

const initialSheetState: SheetState = {
  isOpen: false,
  data: null,
} satisfies SheetState

const UserGridSheet = () => {
  const { toast } = useToast()
  const dispatch = useAppDispatch()

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 20,
  })

  const [updateUser] = useUpdateUserAuthorityCodeMutation()
  const { data, isFetching } = useGetAllUsersQuery({
    limit: -1,
    page: -1,
  })
  const { data: companyCodes } = useGetAllCodeDetailsQuery({
    codeGroupId: 'COMPANY_CD',
  })
  const { data: authCodes } = useGetAllCodeDetailsQuery({
    codeGroupId: 'SYSTEM_AUTHORITY_CD',
  })
  const { data: deptCodes } = useGetAllCodeDetailsQuery({
    codeGroupId: 'DEPT_CD',
  })

  useEffect(() => {
    dispatch(
      userManagementActions.setUserList(
        (data || []).map(user => ({
          ...user,
          companyName: (companyCodes || []).find(
            code => code.codeId === user.companyCode,
          )?.codeValue,
          authorityName: (authCodes || []).find(
            code => code.codeId === user.authorityCode,
          )?.codeValue,
          // departmentName: (deptCodes || []).find(
          //   (code) => code.codeId === user.departmentCode,
          // )?.codeValue,
        })),
      ),
    )
    dispatch(
      userManagementActions.setAuthorityOptions(
        (authCodes || []).map(code => ({
          label: code.codeValue,
          value: code.codeId,
          isSelected: true,
        })),
      ),
    )
  }, [data, dispatch, authCodes, deptCodes, companyCodes])

  const [sheet, setSheet] = useState<SheetState>(initialSheetState)
  const filteredUsers = useAppSelector(
    userManagementSelectors.selectFilteredUserList,
  )

  return (
    <>
      <AdminUserGrid
        data={filteredUsers}
        pagination={pagination}
        showProgressBars={isFetching}
        isLoading={isFetching}
        onOpenChange={() => () => {
          //console.log('onOpenChange', row, open)
        }}
        onValueChange={row => value => {
          updateUser({
            userId: row.original.userId,
            authorityCode: value,
          })
            .unwrap()
            .then(() => {
              toast({
                title: '권한이 변경되었습니다.',
              })
            })
        }}
        onClickDropdownMenuItem={() => () => {
          //console.log('onClickDropdownMenuItem', value, e)
        }}
        onClickResetPassword={row => () => {
          dispatch(
            userManagementActions.openResetModal({
              authorityCode: row.original.authorityCode,
              userId: row.original.userId,
              userName: row.original.userName,
              nickname: row.original.nickname,
              companyCode: row.original.companyCode,
              projects: row.original.projects,
              departmentCode: 'not set',
              roleCode: 'not set',
            }),
          )
        }}
        onClickRow={row => () => {
          setSheet(prev => ({
            ...prev,
            isOpen: !prev.isOpen,
            data: {
              authorityCode: row.original.authorityCode,
              userId: row.original.userId,
              userName: row.original.userName,
              nickname: row.original.nickname,
              companyCode: row.original.companyCode,
              projects: row.original.projects,
              departmentCode: 'not set',
              roleCode: 'not set',
            },
          }))
        }}
      />

      <CommonPagination
        dataLength={data?.length || 0}
        paginationState={[pagination, setPagination]}
      />

      <UserDetailSheet sheetState={[sheet, setSheet]} />
      <PasswordResetRequestDialog />
      <PasswordResetRevealDialog />
    </>
  )
}

export default UserGridSheet
