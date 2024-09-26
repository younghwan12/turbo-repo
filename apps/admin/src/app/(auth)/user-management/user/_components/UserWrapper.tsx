'use client'

import { useAppDispatch } from '@pims-frontend/admin/lib/hooks'
import { gridUtil } from '@pims-frontend/admin/utils/gridUtil'
import {
  useGetAllUsersQuery,
  useUpdateUserAuthorityCodeMutation,
} from '@pims-frontend/apis/lib/features/common/user/controller/UserController'
import CommonTable from '@pims-frontend/ui/components/base/shadcn/CommonTable'
import { useToast } from '@pims-frontend/ui/components/base/shadcn/use-toast'
import { useEffect } from 'react'

const UserWrapper = () => {
  const { toast } = useToast()
  const dispatch = useAppDispatch()

  const [updateUser] = useUpdateUserAuthorityCodeMutation()
  const { data, isFetching, isLoading } = useGetAllUsersQuery({
    limit: -1,
    page: -1,
  })

  const colInfo = [
    {
      accessorKey: 'userId',
      header: '사번',
      visible: '1',
      size: '140',
      type: 'Text',
    },
    {
      accessorKey: 'userName',
      header: '사용자명',
      visible: '1',
      size: '140',
      type: 'Text',
    },
    {
      accessorKey: 'companyName',
      header: '소속',
      visible: '1',
      size: '140',
      type: 'Text',
    },
    {
      accessorKey: 'projects',
      header: '프로젝트 투입 정보',
      visible: '1',
      size: '140',
      type: 'Text',
    },
    {
      accessorKey: 'authorityCode',
      header: '시스템 권한',
      visible: '1',
      size: '140',
      type: 'Enum',
    },
    {
      accessorKey: 'resetPassword',
      header: '사용자 기능',
      visible: '1',
      size: '140',
      type: 'Button',
    },
  ]

  useEffect(() => {
    if (data) {
      gridUtil({ colInfo: colInfo, data: data, gridId: 'userGrid' })
    }
  }, [data])

  return (
    <>
      <CommonTable uuid="userGrid" ysize={500} />
    </>
  )
}

export default UserWrapper
