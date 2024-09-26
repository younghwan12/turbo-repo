import { useDeleteProjectUserMutation } from '@pims-frontend/apis/lib/features/pms/projectUser/controller/ProjectUserController'
import { projectSelectors } from '@pims-frontend/biz/lib/features/project/projectSlice'
import { rowSelectionSelector } from '@pims-frontend/biz/lib/features/project/rowSelectionSlice'
import {
  deleteActions,
  deleteModalSelector,
} from '@pims-frontend/biz/lib/features/user-management/deleteUserSlice'
import { useAppDispatch, useAppSelector } from '@pims-frontend/biz/lib/hooks'
import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@pims-frontend/ui/components/base/shadcn/dialog'
import { ParameterizedIcon } from '@pims-frontend/ui/components/base/shadcn/parameterized-icon'
import { useToast } from '@pims-frontend/ui/components/base/shadcn/use-toast'

export const BizDeleteUserDialog = () => {
  const { isOpen } = useAppSelector(deleteModalSelector.selectDeleteModalState)
  const toast = useToast()
  const { selectedUserDetails } = useAppSelector(
    rowSelectionSelector.selectSelectedRows,
  )
  const { target } = useAppSelector(projectSelectors.selectProjectCombobox)
  const dispatch = useAppDispatch()
  const [deleteProjectUser] = useDeleteProjectUserMutation()

  const handleClickDeleteUser = async () => {
    const userIds = selectedUserDetails.map(user => user.pjtUsrUid)
    const userNm = selectedUserDetails.map(user => user.usrNm)
    if (target) {
      try {
        await deleteProjectUser({
          usrId: userIds,
          pjtUid: target.pjtUid,
        })

        toast.toast({
          title: userNm.join(' '),
          description: '삭제를 완료했습니다.',
          variant: 'default',
        })
        dispatch(deleteActions.closeDeleteModal())
      } catch (error) {
        console.error(error)
        toast.toast({
          title: '삭제실패',
          description: '삭제를 실패했습니다.',
          variant: 'default',
        })
      }
    }
  }
  // consts
  return (
    <Dialog
      open={isOpen}
      onOpenChange={() => {
        dispatch(deleteActions.closeDeleteModal())
      }}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>사용자 삭제</DialogTitle>
          <DialogDescription>
            선택한 {selectedUserDetails.length}명의 사용자를 프로젝트에서
            삭제하시겠습니까?
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 px-5 py-4">
          <div className="p-2 border-2 rounded-lg">
            <p className="flex items-center gap-1 mb-2 text-sm text-assistive-2">
              <ParameterizedIcon name="CircleAlert" width={14} height={14} />
              유의사항
            </p>
            <ul className="px-5 space-y-2 list-disc">
              <li className="text-assistive-2 text-[14px]">
                태스크 등에 담당자로 지정된 사용자를 삭제할 경우, 해당 태스크의
                담당자는 &#91;시스템 관리자&#93;로 자동 변경되며 추후 담당자를
                재지정하는 과정이 필요합니다.
              </li>
              <li className="text-assistive-2 text-[14px]">
                &#91;업무 이관 기능&#93;을 활용해, 삭제할 사용자의 업무를 타
                사용자에게 미리 이관할 수 있습니다.
              </li>
            </ul>
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            variant={'outline'}
            onClick={() => {
              dispatch(deleteActions.closeDeleteModal())
            }}
          >
            취소
          </Button>
          <Button
            type="submit"
            variant={'destructive'}
            onClick={handleClickDeleteUser}
          >
            삭제하기
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
