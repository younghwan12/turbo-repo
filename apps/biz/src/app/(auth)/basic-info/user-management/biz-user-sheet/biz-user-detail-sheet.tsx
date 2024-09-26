'use client'

import type { BizProjectUserListDto } from '@pims-frontend/apis/lib/features/pms/projectUser/request/ProjectUserReqDto'
import { addUserModalSelector } from '@pims-frontend/biz/lib/features/user-management/addUserSlice'
import { useAppSelector } from '@pims-frontend/biz/lib/hooks'
import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@pims-frontend/ui/components/base/shadcn/sheet'
import { RadixTabs } from '@pims-frontend/ui/components/base/shadcn/tabs'
import React, { useRef } from 'react'

// import { BizConnectHistoryTab } from '../grid/biz-connect-history-tab';
import { BizBaseInfoTab } from './biz-base-info-tab'

// import { BaseInfoTab } from './base-info-tab';
// import { ConnectHistoryTab } from './connect-history-tab';

export type SheetState = {
  isOpen: boolean
  data: BizProjectUserListDto | null
}

export type UserDetailSheetProps = {
  sheetState: [SheetState, React.Dispatch<React.SetStateAction<SheetState>>]
}

const BizUserDetailSheet = (props: UserDetailSheetProps) => {
  const ref = useRef<HTMLFormElement>(null)
  const [sheet, setSheet] = props.sheetState
  const isChecked = useAppSelector(addUserModalSelector.selectAddModalState)
  return (
    <Sheet
      open={sheet.isOpen}
      onOpenChange={open => {
        setSheet(prev => ({
          ...prev,
          isOpen: open,
        }))
      }}
    >
      <RadixTabs defaultValue="base-info">
        <SheetContent className="p-0 flex flex-col min-w-[640px] h-screen gap-0">
          <SheetHeader className="flex-none w-full bg-background-plain">
            <SheetTitle className="p-6">사용자 정보</SheetTitle>
            {/* <RadixTabsList className="flex justify-start gap-2 px-6 bg-transparent">
              <RadixTabsTrigger value="base-info" variant={'bottomActive'}>
                기본 정보
              </RadixTabsTrigger>
              <RadixTabsTrigger
                value="connect-history"
                variant={'bottomActive'}
              >
                접속 이력
              </RadixTabsTrigger>
            </RadixTabsList> */}
          </SheetHeader>
          <div className="flex-grow overflow-y-auto bg-background-plain">
            <BizBaseInfoTab sheetState={props.sheetState} ref={ref} />
            {/* <BizConnectHistoryTab /> */}
          </div>
          <SheetFooter className="flex-none p-3 border-t bg-background-plain border-t-border-normal">
            <Button
              className="bg-primary-normal"
              disabled={!isChecked.duplicate.isNicknameDuplicate}
              onClick={() => {
                ref.current?.requestSubmit()
                setSheet(prev => ({
                  ...prev,
                  isOpen: false,
                }))
              }}
            >
              확인
            </Button>
          </SheetFooter>
        </SheetContent>
      </RadixTabs>
    </Sheet>
  )
}
export default BizUserDetailSheet
