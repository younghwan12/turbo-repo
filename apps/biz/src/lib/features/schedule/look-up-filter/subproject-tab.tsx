'use client'

import { useAppDispatch, useAppSelector } from '@pims-frontend/biz/lib/hooks'
import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import { CheckboxWithLabelAndCount } from '@pims-frontend/ui/components/base/shadcn/checkbox'
import { ScrollArea } from '@pims-frontend/ui/components/base/shadcn/scroll-area'
import { Separator } from '@pims-frontend/ui/components/base/shadcn/separator'
import { TabsContent } from '@pims-frontend/ui/components/base/shadcn/tabs'
import {
  ListDescription,
  ListTitle,
} from '@pims-frontend/ui/components/common/etc/EtcTypography'

import { scheduleActions, scheduleSelectors } from '../scheduleSlice'

const SubprojectTab = () => {
  const dispatch = useAppDispatch()
  const { isAllSelected, subprojects, totalCount } = useAppSelector(
    scheduleSelectors.selectEditingFilterSubProjects,
  )

  return (
    <TabsContent
      key={'subproject'}
      value={'subproject'}
      className="h-full mt-0"
    >
      <ScrollArea className="h-full">
        <div className="flex flex-col w-full gap-2.5">
          <div>
            <div className="flex flex-row items-center justify-between">
              <ListTitle>서브프로젝트</ListTitle>
              <Button
                variant={'text'}
                onClick={() => {
                  dispatch(scheduleActions.resetSubprojectFilter())
                }}
              >
                초기화
              </Button>
            </div>
            <ListDescription>다중 선택할 수 있어요</ListDescription>
          </div>
          <Separator />
          <CheckboxWithLabelAndCount
            label={'전체'}
            id={'all'}
            count={totalCount}
            checked={isAllSelected}
            onCheckedChange={checked => {
              if (typeof checked === 'boolean') {
                dispatch(scheduleActions.onCheckAllSubprojects(checked))
              }
            }}
          />

          {subprojects.map(subproject => (
            <div
              key={`subgroup_${subproject.subgroupUid}`}
              className="flex flex-col gap-4"
            >
              <Separator />

              <div className="flex flex-row items-center justify-start px-2 py-1.5">
                <span className="text-text-normal text-2xs font-medium">
                  {subproject.subgroupName}
                </span>
              </div>
              {subproject.options.map(option => (
                <CheckboxWithLabelAndCount
                  key={option.value}
                  label={option.label}
                  id={option.value}
                  count={0}
                  checked={option.isSelected}
                  onCheckedChange={checked => {
                    if (typeof checked === 'boolean') {
                      dispatch(
                        scheduleActions.onCheckSubproject({
                          subgroupUid: subproject.subgroupUid,
                          value: option.value,
                        }),
                      )
                    }
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </ScrollArea>
    </TabsContent>
  )
}
export default SubprojectTab
