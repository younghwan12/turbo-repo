'use client'

import type { SelectProps } from '@pims-frontend/ui/components/base/shadcn/radix-ui'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@pims-frontend/ui/components/base/shadcn/select'
import React, { useCallback } from 'react'

import type { BizUserGridSelectOption } from '../biz-user-select-option'
import { BizUserGridAuthBadge } from '../grid/biz-grid-auth-badge'
// import { UserGridAuthBadge } from '../grid/user-grid-auth-badge';
// import { type UserGridSelectOption } from '../user-grid-select-option';

export type UserGridAuthSelectProps = {
  value: string
  selectOptions: BizUserGridSelectOption[]
  placeholder?: string
  onOpenChange?: SelectProps['onOpenChange']
  onValueChange?: SelectProps['onValueChange']
  className?: string
}

const BizUserDetailRoleSelect = (props: UserGridAuthSelectProps) => {
  const handleClickSelectTrigger: React.MouseEventHandler<HTMLButtonElement> =
    useCallback(e => {
      e.stopPropagation()
    }, [])

  return (
    <Select
      value={props.value}
      onOpenChange={props.onOpenChange}
      onValueChange={props.onValueChange}
    >
      <SelectTrigger
        onClick={handleClickSelectTrigger}
        className={props.className}
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

export default BizUserDetailRoleSelect
