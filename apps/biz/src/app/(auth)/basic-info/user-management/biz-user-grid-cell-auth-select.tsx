'use client'

import {
  type MRT_ColumnDef,
  type MRT_RowData,
} from '@pims-frontend/ui/components/base/shadcn/material-react-table'
import type { SelectProps } from '@pims-frontend/ui/components/base/shadcn/radix-ui'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@pims-frontend/ui/components/base/shadcn/select'
import type { GetPropsObjectType } from '@pims-frontend/ui/lib/utilityTypes'
import React, { useCallback } from 'react'

import type { BizUserGridSelectOption } from './biz-user-select-option'
import { BizUserGridAuthBadge } from './grid/biz-grid-auth-badge'
// import { UserGridAuthBadge } from './user-grid-auth-badge';
// import { type UserGridSelectOption } from '../user-grid-select-option';

export type BizUserGridAuthSelectProps<
  TData extends MRT_RowData,
  TValue = unknown,
> = GetPropsObjectType<MRT_ColumnDef<TData, TValue>['Cell']> & {
  selectOptions: BizUserGridSelectOption[]
  placeholder?: string
  onOpenChange?: SelectProps['onOpenChange']
  onValueChange?: SelectProps['onValueChange']
}

export const BizUserGridCellAuthSelect = <
  TData extends MRT_RowData,
  TValue = unknown,
>(
  props: BizUserGridAuthSelectProps<TData, TValue>,
) => {
  const handleClickSelectTrigger: React.MouseEventHandler<HTMLButtonElement> =
    useCallback(e => {
      e.stopPropagation()
    }, [])

  return (
    <Select
      value={props.cell.getValue() as string}
      onOpenChange={props.onOpenChange}
      onValueChange={props.onValueChange}
    >
      <SelectTrigger
        className="px-0 py-0 bg-transparent border-none"
        onClick={handleClickSelectTrigger}
      >
        <SelectValue placeholder={props.placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {props.selectOptions.map(option => (
            <SelectItem key={option.value} value={option.value}>
              <BizUserGridAuthBadge color={option.color}>
                {option.displayString}
              </BizUserGridAuthBadge>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
