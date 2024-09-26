'use client'

import { useGetProjectPjQuery } from '@pims-frontend/apis/lib/features/pms/project/controller/ProjectController'
import { projectSelectors } from '@pims-frontend/biz/lib/features/project/projectSlice'
import { useAppSelector } from '@pims-frontend/biz/lib/hooks'
import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import { Separator } from '@pims-frontend/ui/components/base/shadcn/separator'
import { TabsContent } from '@pims-frontend/ui/components/base/shadcn/tabs'
import { useRef } from 'react'

import { ProjectInfoForm } from './project-info-form'

export const ProjectInfoTab = () => {
  const ref = useRef<HTMLFormElement>(null)

  const { target } = useAppSelector(projectSelectors.selectProjectCombobox)

  const { data } = useGetProjectPjQuery({
    pjtUid: target?.pjtUid ?? 6,
  })

  return (
    <TabsContent value="pjt-info">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg">프로젝트 정보</h3>
            <p className="text-sm">
              Update your photo and personal details here.
            </p>
          </div>
          <div className="flex gap-3 justify-end">
            <Button variant={'outline'}>취소하기</Button>
            <Button
              variant={'default'}
              onClick={() => ref.current?.requestSubmit()}
            >
              저장하기
            </Button>
          </div>
        </div>
        <Separator />
        <div>{data && <ProjectInfoForm defaultValues={data} ref={ref} />}</div>
      </div>
    </TabsContent>
  )
}
