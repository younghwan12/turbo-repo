'use client'

import {
  useGetSubprojectsPjQuery,
  useUpdateSubProjectWitPjMutation,
} from '@pims-frontend/apis/lib/features/pms/project/controller/ProjectController'
import { SubPjtWitGrid } from '@pims-frontend/biz/app/(auth)/basic-info/project-management/grid/sub-pjt-wit-grid'
import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import {
  Card,
  CardContent,
} from '@pims-frontend/ui/components/base/shadcn/card'
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
import React, { useState } from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks'
import { basicInfoActions, basicInfoSelectors } from './basicInfoSlice'
import { projectSelectors } from './projectSlice'

const SubPjtWitDialog = () => {
  const dispatch = useAppDispatch()
  const { toast } = useToast()

  const { isSubPjtWitDialogOpen } = useAppSelector(
    basicInfoSelectors.selectState,
  )
  const { target } = useAppSelector(projectSelectors.selectProjectCombobox)

  const { data } = useGetSubprojectsPjQuery({
    pjtUid: target?.pjtUid ?? 6,
  })

  //변경 테이블 데이터
  const [changeData, setChangeData] = useState(data || [])
  const [showCard, setShowCard] = useState(
    data?.reduce((sum, item) => sum + (item.witNum || 0), 0) !== 100,
  )

  const [update] = useUpdateSubProjectWitPjMutation()

  const handleDataChange = (newData: typeof changeData) => {
    setChangeData(newData)
    const totalWitNum = newData?.reduce(
      (sum, item) => sum + (item.witNum || 0),
      0,
    )
    // console.log(newData)
    setShowCard(totalWitNum !== 100)
  }

  const handleSave = () => {
    const reqData = changeData?.map(item => ({
      subPjtUid: item.subPjtUid,
      witNum: item.witNum,
    }))
    update({
      pjtUid: target?.pjtUid ?? 6,
      data: reqData,
    })
      .unwrap()
      .then(() => {
        toast({
          title: '가중치가 설정되었습니다.',
        })
      })
    dispatch(basicInfoActions.closeSubPjtWitDialog())
  }
  return (
    <Dialog
      open={isSubPjtWitDialogOpen}
      onOpenChange={() => {
        dispatch(basicInfoActions.closeSubPjtWitDialog())
      }}
    >
      <DialogContent className=" p-0 gap-0">
        <DialogHeader className="p-6 gap-1.5">
          <DialogTitle>가중치 설정</DialogTitle>
          <DialogDescription className="!mt-0">
            서브프로젝트의 가중치(%)를 설정하여 진척률을 관리합니다
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col px-6 gap-6 pb-8">
          <div className="flex flex-col gap-4">
            <div className="text-xs">서브프로젝트 목록</div>
            <SubPjtWitGrid data={data || []} onDataChange={handleDataChange} />
          </div>
          {showCard && (
            <Card>
              <CardContent className="p-4 flex text-destructive gap-3">
                <ParameterizedIcon name="CircleAlert" />
                <div className="flex flex-col gap-1">
                  <div className="text-base font-medium">Error</div>
                  <div className="text-sm font-normal">
                    가중치의 합계를 100%로 맞춰서 입력해 주세요.
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
        <DialogFooter className="justify-between pt-3 px-6 pb-6">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              닫기
            </Button>
          </DialogClose>
          <Button type="button" variant={'default'} onClick={handleSave}>
            저장하기
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default SubPjtWitDialog
