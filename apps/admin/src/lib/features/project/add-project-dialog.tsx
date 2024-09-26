'use client'

import ProjectBaseAddForm from '@pims-frontend/apis/lib/features/common/project/project-base-add-form'
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
import { projectActions, projectSelectors } from './projectSlice'

const AddProjectDialog = () => {
  //   const { register, handleSubmit, formState: { errors } } = useForm<UserFormData>()
  const ref = useRef<HTMLFormElement>(null)
  const dispatch = useAppDispatch()

  const { isAddProjectModalOpen } = useAppSelector(
    projectSelectors.selectProject,
  )

  return (
    <Dialog
      open={isAddProjectModalOpen}
      onOpenChange={() => {
        dispatch(projectActions.closeAddPjtModal())
      }}
    >
      <DialogContent className=" p-0 gap-0">
        <DialogHeader className="p-6 gap-1.5">
          <DialogTitle>프로젝트 생성</DialogTitle>
          <DialogDescription className="!mt-0">
            새로운 프로젝트를 생성합니다.
          </DialogDescription>
        </DialogHeader>
        <ProjectBaseAddForm defaultValues={{ pgsStatCd: '001' }} ref={ref} />
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
              dispatch(projectActions.closeAddPjtModal())
            }}
          >
            저장
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AddProjectDialog
