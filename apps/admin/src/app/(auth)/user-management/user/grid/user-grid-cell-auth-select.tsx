'use client'

import {
  type MRT_ColumnDef,
  type MRT_RowData,
} from '@pims-frontend/ui/components/base/shadcn/material-react-table'
import { type SelectProps } from '@pims-frontend/ui/components/base/shadcn/radix-ui'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@pims-frontend/ui/components/base/shadcn/select'
import { type GetPropsObjectType } from '@pims-frontend/ui/lib/utilityTypes'
import React, { useCallback } from 'react'
import { type UserGridSelectOption } from '../user-grid-select-option'
import { UserGridAuthBadge } from './user-grid-auth-badge'

export type UserGridAuthSelectProps<
  TData extends MRT_RowData,
  TValue = unknown,
> = GetPropsObjectType<MRT_ColumnDef<TData, TValue>['Cell']> & {
  selectOptions: UserGridSelectOption[]
  placeholder?: string
  onOpenChange?: SelectProps['onOpenChange']
  onValueChange?: SelectProps['onValueChange']
}

const UserGridCellAuthSelect = <TData extends MRT_RowData, TValue = unknown>(
  props: UserGridAuthSelectProps<TData, TValue>,
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
        className="border-none bg-transparent px-0 py-0"
        onClick={handleClickSelectTrigger}
      >
        <SelectValue placeholder={props.placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {props.selectOptions.map(option => (
            <SelectItem key={option.value} value={option.value}>
              <UserGridAuthBadge color={option.color}>
                {option.displayString}
              </UserGridAuthBadge>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default UserGridCellAuthSelect
