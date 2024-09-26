'use client'

import { useDelSubProjectPjMutation } from '@pims-frontend/apis/lib/features/pms/project/controller/ProjectController'
import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import { Checkbox } from '@pims-frontend/ui/components/base/shadcn/checkbox'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@pims-frontend/ui/components/base/shadcn/dialog'
import { ParameterizedIcon } from '@pims-frontend/ui/components/base/shadcn/parameterized-icon'
import { useToast } from '@pims-frontend/ui/components/base/shadcn/use-toast'

import { useAppDispatch, useAppSelector } from '../../hooks'
import { basicInfoActions, basicInfoSelectors } from './basicInfoSlice'
import { projectSelectors } from './projectSlice'

const DelSubPjtDialog = () => {
  const dispatch = useAppDispatch()
  const { delSubPjtDialog } = useAppSelector(basicInfoSelectors.selectState)
  const { target } = useAppSelector(projectSelectors.selectProjectCombobox)

  const { toast } = useToast()

  const [delSubProject] = useDelSubProjectPjMutation()

  return (
    <Dialog
      open={delSubPjtDialog.isDelSubPjtDialogOpen}
      onOpenChange={() => {
        dispatch(basicInfoActions.closeDelSubPjtDialog())
      }}
    >
      <DialogContent className=" p-0 gap-0 w-[300px]">
        <DialogHeader className="p-6 gap-1.5">
          <DialogTitle>삭제</DialogTitle>
          <DialogDescription className="hidden"></DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 mx-6 pb-4">
          <div className="flex flex-col gap-2 text-center text-sm">
            <div>프로젝트에서 서브프로젝트를 삭제할까요?</div>
            <div>
              선택한 {delSubPjtDialog.selSubPjt?.length}개의 서브프로젝트를
              삭제합니다
            </div>
          </div>
          {/* TODO Card 컴퍼넌트로 뺄지 */}
          <div className="flex flex-col gap-2 p-3 rounded-lg border bg-card text-card-foreground text-sm">
            <div className="flex gap-1 items-center">
              <ParameterizedIcon name="CircleAlert" size={16} />
              유의사항
            </div>
            <div>
              전체 삭제하는 경우, 서브프로젝트 설정이 초기화 상태로 돌아가며
              [프로그램 개발]명으로 서브프로젝트가 자동 생성됩니다.
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Checkbox id="noView" />
            <label
              htmlFor="noView"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              다시 보지 않기
            </label>
          </div>
        </div>
        <DialogFooter className="flex gap-4 justify-between pt-3 px-6 pb-6">
          <DialogClose asChild className="w-full">
            <Button type="button" variant="secondary">
              취소
            </Button>
          </DialogClose>
          <Button
            type="button"
            variant={'destructive'}
            className="w-full"
            onClick={() => {
              const subPjtUid =
                delSubPjtDialog.selSubPjt &&
                delSubPjtDialog.selSubPjt.map(item => item.subPjtUid)
              delSubProject({
                pjtUid: target?.pjtUid || 6,
                subPjtUid: subPjtUid ?? [],
              })
                .unwrap()
                .then(() => {
                  toast({
                    title: '서브프로젝트가 삭제되었습니다.',
                  })
                })
              dispatch(basicInfoActions.closeDelSubPjtDialog())
            }}
          >
            삭제
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
export default DelSubPjtDialog
