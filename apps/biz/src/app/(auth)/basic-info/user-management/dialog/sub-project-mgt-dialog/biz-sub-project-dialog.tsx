'use client'

import {
  assignActions,
  assignSubpjtDialogSelector,
} from '@pims-frontend/biz/lib/features/user-management/assignSubpjtSlice'
import { userMgtActions } from '@pims-frontend/biz/lib/features/user-management/userMgtSlice'
import { useAppDispatch, useAppSelector } from '@pims-frontend/biz/lib/hooks'
import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import { Checkbox } from '@pims-frontend/ui/components/base/shadcn/checkbox'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@pims-frontend/ui/components/base/shadcn/dialog'
import { Label } from '@pims-frontend/ui/components/base/shadcn/label'
import { ScrollArea } from '@pims-frontend/ui/components/base/shadcn/scroll-area'

const BizAssginSubpjtDialog = () => {
  const dispatch = useAppDispatch()
  const { isOpen } = useAppSelector(
    assignSubpjtDialogSelector.selectAssignSubpjt,
  )
  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `서브프로젝트  ${a.length - i}`,
  )
  return (
    <Dialog
      open={isOpen}
      onOpenChange={() => {
        dispatch(assignActions.closeAssignSubpjtDialog())
      }}
    >
      <DialogContent className="sm:max-w-[425px] bg-background-plain">
        <DialogHeader>
          <DialogTitle>서브프로젝트 배정</DialogTitle>
          <DialogDescription>
            서브프로젝트에 선택한 사용자를 추가하고 권한을 할당합니다.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 px-6">
          <Label htmlFor="username">배정할 사용자</Label>
          {/* {resetModal.resetTargets.map((list) => {
            return (
              <Input
                key={list.userId}
                id="username"
                defaultValue={`${list.userName}(${list.userId})`}
                className="col-span-3"
                disabled
              />
            );
          })} */}
          <Label htmlFor="subproject">서브프로젝트 선택</Label>
          <ScrollArea className="h-36 w-full rounded-md border">
            <div className="p-4" key={'subproject'}>
              {tags.map(tag => (
                <div key={tag} className="text-sm py-1 flex items-center">
                  <Checkbox id={tag} name={tag} className="mr-4" />
                  <Label htmlFor={tag}>{tag}</Label>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        <DialogFooter className="sm:justify-between border-t">
          <Button
            variant="outline"
            onClick={() => {
              dispatch(assignActions.closeAssignSubpjtDialog())
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
            배치하기
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default BizAssginSubpjtDialog
