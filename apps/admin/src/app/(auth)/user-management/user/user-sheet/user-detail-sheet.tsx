'use client'

import { type UserDetailResDto } from '@pims-frontend/apis/lib/features/common/user/dto/response/UserDetailResDto'
import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@pims-frontend/ui/components/base/shadcn/sheet'
import {
  RadixTabs,
  RadixTabsList,
  RadixTabsTrigger,
} from '@pims-frontend/ui/components/base/shadcn/tabs'
import React, { useRef } from 'react'
import { BaseInfoTab } from './base-info-tab'
import ConnectHistoryTab from './connect-history-tab'

export type SheetState = {
  isOpen: boolean
  data: UserDetailResDto | null
}

export type UserDetailSheetProps = {
  sheetState: [SheetState, React.Dispatch<React.SetStateAction<SheetState>>]
}

const UserDetailSheet = (props: UserDetailSheetProps) => {
  const ref = useRef<HTMLFormElement>(null)
  const [sheet, setSheet] = props.sheetState

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
            <RadixTabsList className="flex justify-start gap-2 px-6 bg-transparent">
              <RadixTabsTrigger value="base-info" variant={'bottomActive'}>
                기본 정보
              </RadixTabsTrigger>
              <RadixTabsTrigger
                value="connect-history"
                variant={'bottomActive'}
              >
                접속 이력
              </RadixTabsTrigger>
            </RadixTabsList>
          </SheetHeader>
          <div className="flex-grow py-10 overflow-y-auto bg-background-plain">
            <BaseInfoTab sheetState={props.sheetState} ref={ref} />
            <ConnectHistoryTab />
          </div>
          <SheetFooter className="p-3 flex-none bg-background-plain border-t border-t-border-normal">
            <Button
              className="bg-primary-normal"
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

export default UserDetailSheet
