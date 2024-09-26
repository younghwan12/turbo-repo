'use client'

import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import { Calendar } from '@pims-frontend/ui/components/base/shadcn/calendar'
import {
  format,
  parse,
} from '@pims-frontend/ui/components/base/shadcn/date-fns'
import { DynamicIcon } from '@pims-frontend/ui/components/base/shadcn/dynamic-icon'
import type {
  MRT_ColumnDef,
  MRT_RowData,
} from '@pims-frontend/ui/components/base/shadcn/material-react-table'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@pims-frontend/ui/components/base/shadcn/popover'
import type { SelectProps } from '@pims-frontend/ui/components/base/shadcn/radix-ui'
import type { DateRange } from '@pims-frontend/ui/lib/react-day-picker/index'
import { type GetPropsObjectType } from '@pims-frontend/ui/lib/utilityTypes'
import { cn } from '@pims-frontend/ui/lib/utils'
// import { ko } from 'date-fns/locale';
import React, { useState } from 'react'

// type BizRangeValueProps = {
//   value: {
//     workSt: string;
//     workEnd: string;
//   };
// };

export type BizUserRangePickerProps<
  TData extends MRT_RowData,
  TValue = unknown,
> = GetPropsObjectType<MRT_ColumnDef<TData, TValue>['Cell']> & {
  startDate?: string
  endDate?: string
  onOpenChange?: SelectProps['onOpenChange']
  onValueChange?: SelectProps['onValueChange']
}

export const BizDatePickerWithRange = <
  TData extends MRT_RowData,
  TValue = unknown,
>(
  props: BizUserRangePickerProps<TData, TValue>,
) => {
  const [date, setDate] = useState<DateRange | undefined>(() => {
    const { startDate, endDate } = props // workSt와 workEnd 가져오기
    if (startDate && endDate) {
      const stDate = parse(startDate, 'yyyyMMdd', new Date())
      const edDate = parse(endDate, 'yyyyMMdd', new Date())
      return {
        from: stDate ? new Date(stDate) : undefined,
        to: endDate ? new Date(edDate) : undefined,
      }
    }
  })

  return (
    <div className={cn('grid gap-2')}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={'outline'}
            className={cn(
              'w-[300px] justify-start text-left font-normal',
              !date && 'text-muted-foreground',
            )}
          >
            <DynamicIcon className="w-4 h-4 mr-2" name={'calendar'} />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'yyyy년 MM월 dd일')} -{' '}
                  {format(date.to, 'yyyy년 MM월 dd일')}
                </>
              ) : (
                format(date.from, 'yyyy년 MM월 dd일')
              )
            ) : (
              <span>기간을 선택하세요</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={newDate => {
              setDate(newDate)
            }}
            numberOfMonths={2}
            // locale={ko}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
