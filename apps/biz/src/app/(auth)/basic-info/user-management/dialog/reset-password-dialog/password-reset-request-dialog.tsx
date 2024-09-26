import {
  userMgtActions,
  userMgtSelectors,
} from '@pims-frontend/biz/lib/features/user-management/userMgtSlice'
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
import { Input } from '@pims-frontend/ui/components/base/shadcn/input'
import { Label } from '@pims-frontend/ui/components/base/shadcn/label'

export const PasswordResetRequestDialog = () => {
  const { resetModal } = useAppSelector(userMgtSelectors.selectUserMgt)
  const dispatch = useAppDispatch()

  return (
    <Dialog
      open={resetModal.isOpen && resetModal.step === 1}
      // onOpenChange={open => {
      //   dispatch(userMgtActions.closeResetModal())
      // }}
    >
      <DialogContent className="sm:max-w-[425px] bg-background-plain">
        <DialogHeader>
          <DialogTitle>비밀번호 초기화</DialogTitle>
          <DialogDescription>
            {`아래 사용자의 비밀번호를 초기화하시겠습니까?`}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 px-6">
          <Label htmlFor="username">대상 사용자</Label>
          {resetModal.resetTargets.map(list => {
            return (
              <Input
                key={list.pjtUsrUid}
                id="username"
                defaultValue={`${list.usrNm}(${list.usrId})`}
                className="col-span-3"
                disabled
              />
            )
          })}
        </div>
        <DialogFooter className="sm:justify-between border-t">
          <Button
            variant="outline"
            onClick={() => {
              dispatch(userMgtActions.closeResetModal())
            }}
          >
            취소
          </Button>
          <Button
            variant={'default'}
            onClick={() => {
              dispatch(userMgtActions.nextStepResetModal())
            }}
          >
            초기화
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
