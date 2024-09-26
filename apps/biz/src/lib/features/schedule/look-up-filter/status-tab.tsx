'use client'

import { useAppDispatch, useAppSelector } from '@pims-frontend/biz/lib/hooks'
import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import {
  CheckboxWithBadgeAndDot,
  CheckboxWithLabelAndCount,
} from '@pims-frontend/ui/components/base/shadcn/checkbox'
import { ScrollArea } from '@pims-frontend/ui/components/base/shadcn/scroll-area'
import { Separator } from '@pims-frontend/ui/components/base/shadcn/separator'
import { TabsContent } from '@pims-frontend/ui/components/base/shadcn/tabs'
import {
  ListDescription,
  ListTitle,
} from '@pims-frontend/ui/components/common/etc/EtcTypography'

import { scheduleActions, scheduleSelectors } from '../scheduleSlice'

const StatusTab = () => {
  const { options, isAllSelected, totalCount } = useAppSelector(
    scheduleSelectors.selectEditingFilterStatus,
  )
  const dispatch = useAppDispatch()

  return (
    <TabsContent key={'status'} value={'status'} className="h-full mt-0">
      <ScrollArea className="h-full">
        <div className="flex flex-col w-full gap-2.5">
          <div>
            <div className="flex flex-row items-center justify-between">
              <ListTitle>진행 상태</ListTitle>
              <Button
                variant={'text'}
                onClick={() => {
                  dispatch(scheduleActions.resetStatus())
                }}
              >
                초기화
              </Button>
            </div>
            <ListDescription>
              일정 진행 상태별로 검색할 수 있어요
            </ListDescription>
          </div>
          <Separator />
          <CheckboxWithLabelAndCount
            label={'전체'}
            id={'all'}
            count={totalCount}
            checked={isAllSelected}
            onCheckedChange={checked => {
              if (typeof checked === 'boolean') {
                dispatch(scheduleActions.onCheckAllStatus(checked))
              }
            }}
          />
          <Separator />
          {options.map(option => (
            <CheckboxWithBadgeAndDot
              key={option.value}
              label={option.label}
              id={option.value}
              dotColor={option.color}
              count={option.count}
              checked={option.isSelected}
              onCheckedChange={checked => {
                if (typeof checked === 'boolean') {
                  dispatch(
                    scheduleActions.onCheckStatus({
                      value: option.value,
                      isSelected: checked,
                    }),
                  )
                }
              }}
            />
          ))}
        </div>
      </ScrollArea>
    </TabsContent>
  )
}
export default StatusTab
