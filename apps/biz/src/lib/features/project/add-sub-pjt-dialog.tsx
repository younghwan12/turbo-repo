'use client'

import { SubPjtBaseAddForm } from '@pims-frontend/biz/app/(auth)/basic-info/project-management/sub-pjt-base-add-form'
import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@pims-frontend/ui/components/base/shadcn/dialog'
import { useRef } from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks'
import { basicInfoActions, basicInfoSelectors } from './basicInfoSlice'

const AddSubPjtDialog = () => {
  const ref = useRef<HTMLFormElement>(null)
  const dispatch = useAppDispatch()
  const { isSubPjtDialogOpen } = useAppSelector(basicInfoSelectors.selectState)
  return (
    <Dialog
      open={isSubPjtDialogOpen}
      onOpenChange={() => {
        dispatch(basicInfoActions.closeSubPjtDialog())
      }}
    >
      <DialogContent className=" p-0 gap-0">
        <DialogHeader className="p-6 gap-1.5">
          <DialogTitle>서브프로젝트 추가</DialogTitle>
          <DialogDescription className="!mt-0">
            새로운 프로젝트를 등록합니다.
          </DialogDescription>
        </DialogHeader>
        <SubPjtBaseAddForm defaultValues={{}} ref={ref} />
        <DialogFooter className="justify-between pt-3 px-6 pb-6">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              닫기
            </Button>
          </DialogClose>
          <Button
            type="button"
            variant={'default'}
            onClick={() => {
              ref.current?.requestSubmit()
              dispatch(basicInfoActions.closeSubPjtDialog())
            }}
          >
            저장
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AddSubPjtDialog
