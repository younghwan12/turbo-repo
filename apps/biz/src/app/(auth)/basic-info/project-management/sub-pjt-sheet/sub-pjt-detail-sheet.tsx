'use client'

import {
  useGetSubProjectPjQuery,
  useGetSubProjectUsersQuery,
} from '@pims-frontend/apis/lib/features/pms/project/controller/ProjectController'
import {
  basicInfoActions,
  basicInfoSelectors,
} from '@pims-frontend/biz/lib/features/project/basicInfoSlice'
import { projectSelectors } from '@pims-frontend/biz/lib/features/project/projectSlice'
import { useAppDispatch, useAppSelector } from '@pims-frontend/biz/lib/hooks'
import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@pims-frontend/ui/components/base/shadcn/sheet'
import { useRef } from 'react'

import { SubPjtInUsrGrid } from '../grid/sub-pjt-in-usr-grid'
import { SubPjtBaseInfoForm } from './sub-pjt-base-info-form'

export type subProjectDetailSheepProps = {
  selectUid: number
}

// type DataType = {
//   userId: string
//   skYN: 'Y' | 'N' | '퇴사'
//   userAuth: ('pmo' | 'subGroupPL' | 'Member')[]
// }
//
// const user = [
//   {
//     usrNikNm: '이영환',
//     adminYN: true,
//   },
// ]

export const SubPjtDetailSheet = (props: subProjectDetailSheepProps) => {
  const ref = useRef<HTMLFormElement>(null)
  const dispatch = useAppDispatch()
  const { isSubPjtDrawerOpen } = useAppSelector(
    basicInfoSelectors.selectSubPjtDrawer,
  )

  const { target } = useAppSelector(projectSelectors.selectProjectCombobox)

  const { data: subPjt } = useGetSubProjectPjQuery({
    pjtUid: target.pjtUid ?? 6,
    subPjtUid: props.selectUid,
  })

  const { data: userList } = useGetSubProjectUsersQuery({
    pjtUid: target.pjtUid ?? 6,
    subPjtUid: props.selectUid,
  })

  return (
    <Sheet
      open={isSubPjtDrawerOpen}
      onOpenChange={() => {
        dispatch(basicInfoActions.closeSubPjtDrawer())
      }}
    >
      <SheetContent className="p-0 flex flex-col min-w-[640px] h-screen gap-0">
        <SheetHeader className="flex-none w-full bg-background-plain">
          <SheetTitle className="p-6">서브프로젝트 정보</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-16 flex-grow py-10 overflow-y-auto bg-background-plain px-9">
          <div className="flex flex-col gap-4">
            <SheetDescription>기본 정보</SheetDescription>
            {subPjt && <SubPjtBaseInfoForm ref={ref} data={subPjt} />}
          </div>
          <div className="flex flex-col gap-4">
            <SheetDescription>투입 정보</SheetDescription>
            <SubPjtInUsrGrid data={userList || []} showProgressBars={false} />
          </div>
        </div>
        <SheetFooter className="!justify-between p-3 bg-background-plain border-t border-t-border-normal">
          <Button
            variant={'outline'}
            onClick={() => {
              dispatch(basicInfoActions.closeSubPjtDrawer())
            }}
          >
            닫기
          </Button>
          <Button
            variant={'default'}
            className="bg-primary-normal"
            onClick={() => {
              ref.current?.requestSubmit()
              dispatch(basicInfoActions.closeSubPjtDrawer())
            }}
          >
            수정하기
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
