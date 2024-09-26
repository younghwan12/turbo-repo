'use client'

import { useGetSubprojectsPjQuery } from '@pims-frontend/apis/lib/features/pms/project/controller/ProjectController'
import AddSubGrpDialog from '@pims-frontend/biz/lib/features/project/add-sub-grp-dialog'
import {
  basicInfoActions,
  basicInfoSelectors,
} from '@pims-frontend/biz/lib/features/project/basicInfoSlice'
import DelSubPjtDialog from '@pims-frontend/biz/lib/features/project/del-sub-pjt-dialog'
import { projectSelectors } from '@pims-frontend/biz/lib/features/project/projectSlice'
import SubPjtWitDialog from '@pims-frontend/biz/lib/features/project/sub-pjt-wit-dialog'
import { useAppDispatch, useAppSelector } from '@pims-frontend/biz/lib/hooks'
import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import { Separator } from '@pims-frontend/ui/components/base/shadcn/separator'
import { TabsContent } from '@pims-frontend/ui/components/base/shadcn/tabs'

import AddSubPjtDialog from '../../../../lib/features/project/add-sub-pjt-dialog'
import { SubPjtGrid } from './grid/sub-pjt-grid'
import { SubPjtDetailSheet } from './sub-pjt-sheet/sub-pjt-detail-sheet'

export const SubPjtInfoTab = () => {
  const dispatch = useAppDispatch()
  const { target } = useAppSelector(projectSelectors.selectProjectCombobox)
  const { selSubPjt } = useAppSelector(basicInfoSelectors?.selectSubPjtDrawer)

  const { data, isFetching } = useGetSubprojectsPjQuery({
    pjtUid: target?.pjtUid ?? 6,
  })

  return (
    <TabsContent value="sub-pjt">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg">{target?.pjtNm}</h3>
            <p className="text-sm">
              서브프로젝트의 기간과 가중치를 설정하고, 노출 순서를 관리합니다
            </p>
          </div>
          <div className="flex gap-3 justify-end">
            <Button variant={'outline'}>취소하기</Button>
            <Button variant={'default'}>저장하기</Button>
          </div>
        </div>
        <Separator />
        <SubPjtGrid
          data={data || []}
          showProgressBars={isFetching}
          isLoading={isFetching}
          onClickRow={row => () => {
            dispatch(basicInfoActions.openSubPjtDrawer(row.original))
          }}
          onClickSetWitNum={() => () => {
            dispatch(basicInfoActions.openSubPjtWitDialog())
          }}
          addSubPjtBtnClick={() => {
            dispatch(basicInfoActions.openAddSubPjtDialog())
          }}
          delSubPjtBtnClick={selectedData => {
            dispatch(basicInfoActions.openDelSubPjtDialog(selectedData))
          }}
          addSubGrpBtnClick={() => {
            dispatch(basicInfoActions.openSubGrpDialog())
          }}
        />
      </div>

      {selSubPjt && <SubPjtDetailSheet selectUid={selSubPjt.subPjtUid ?? 6} />}

      <AddSubPjtDialog />
      <AddSubGrpDialog />
      <DelSubPjtDialog />
      <SubPjtWitDialog />
    </TabsContent>
  )
}
