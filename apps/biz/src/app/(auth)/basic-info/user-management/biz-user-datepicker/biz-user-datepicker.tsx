'use client'

import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import { Calendar } from '@pims-frontend/ui/components/base/shadcn/calendar'
import {
  format,
  parse,
} from '@pims-frontend/ui/components/base/shadcn/date-fns'
import {
  type MRT_ColumnDef,
  type MRT_RowData,
} from '@pims-frontend/ui/components/base/shadcn/material-react-table'
import { ParameterizedIcon } from '@pims-frontend/ui/components/base/shadcn/parameterized-icon'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@pims-frontend/ui/components/base/shadcn/popover'
import type { SelectProps } from '@pims-frontend/ui/components/base/shadcn/radix-ui'
import { type GetPropsObjectType } from '@pims-frontend/ui/lib/utilityTypes'
import { cn } from '@pims-frontend/ui/lib/utils'
import * as React from 'react'

export type BizUserWidhDrawPickerProps<
  TData extends MRT_RowData,
  TValue = unknown,
> = GetPropsObjectType<MRT_ColumnDef<TData, TValue>['Cell']> & {
  withDraw?: string
  onOpenChange?: SelectProps['onOpenChange']
  onValueChange?: SelectProps['onValueChange']
}

export const BizWidhDrawDatePicker = <
  TData extends MRT_RowData,
  TValue = unknown,
>(
  props: BizUserWidhDrawPickerProps<TData, TValue>,
) => {
  const { withDraw } = props // RowData에서 row 객체 추출

  const [date, setDate] = React.useState<Date | undefined>(() => {
    // withDraw가 있으면 Date로 변환하고, 없으면 undefined
    if (withDraw) {
      const withDrawData = parse(withDraw, 'yyyyMMdd', new Date())
      return withDrawData ? new Date(withDrawData) : undefined
    }
  })

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[240px] justify-start text-left font-normal',
            !date && 'text-muted-foreground',
          )}
        >
          <ParameterizedIcon name="Calendar" className="w-4 h-4 mr-2" />
          {date ? format(date, 'yyyy년 MM월 dd일') : ''}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          defaultMonth={date}
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
