import { rowSelectionSelector } from '@pims-frontend/biz/lib/features/project/rowSelectionSlice'
import { assignActions } from '@pims-frontend/biz/lib/features/user-management/assignSubpjtSlice'
import { deleteActions } from '@pims-frontend/biz/lib/features/user-management/deleteUserSlice'
import { userMgtActions } from '@pims-frontend/biz/lib/features/user-management/userMgtSlice'
import { useAppDispatch, useAppSelector } from '@pims-frontend/biz/lib/hooks'
import { Button } from '@pims-frontend/ui/components/base/shadcn/button'

type ButtonGroupProps = {
  table: any
}

const TopButtonGroup = (props: ButtonGroupProps) => {
  const { selectedUserDetails } = useAppSelector(
    rowSelectionSelector.selectSelectedRows,
  )
  const dispatch = useAppDispatch()
  return (
    <div className="flex items-center gap-1">
      <p className="text-xs">
        <span>{props.table.getSelectedRowModel().rows.length}</span> 사용자
        선택됨
      </p>
      <Button
        variant={'outline'}
        disabled={
          props.table.getSelectedRowModel().rows.length > 0 ? false : true
        }
        onClick={() => {
          dispatch(userMgtActions.openMultiResetModal(selectedUserDetails))
        }}
      >
        비밀번호 초기화
      </Button>
      <Button
        variant={'outline'}
        disabled={
          props.table.getSelectedRowModel().rows.length > 0 ? false : true
        }
        onClick={() => {
          dispatch(assignActions.openAssignSubpjtDialog())
        }}
      >
        프로젝트 배정
      </Button>
      <Button
        variant={'outline'}
        disabled={
          props.table.getSelectedRowModel().rows.length > 1 ? false : true
        }
      >
        교체 투입
      </Button>
      <Button
        variant={'outline'}
        disabled={
          props.table.getSelectedRowModel().rows.length > 0 ? false : true
        }
      >
        권한 변경
      </Button>
      <Button
        variant={'outline'}
        className="border-[#E54666] text-[#E54666]"
        disabled={
          props.table.getSelectedRowModel().rows.length > 0 ? false : true
        }
        onClick={() => {
          dispatch(deleteActions.openDeleteModal())
        }}
      >
        사용자 삭제
      </Button>
    </div>
  )
}

export default TopButtonGroup
