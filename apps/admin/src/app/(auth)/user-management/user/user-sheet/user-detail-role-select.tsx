'use client'

import { type SelectProps } from '@pims-frontend/ui/components/base/shadcn/radix-ui'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@pims-frontend/ui/components/base/shadcn/select'
import React, { useCallback } from 'react'
import UserGridAuthBadge from '../grid/user-grid-auth-badge'
import { type UserGridSelectOption } from '../user-grid-select-option'

export type UserGridAuthSelectProps = {
  value: string
  selectOptions: UserGridSelectOption[]
  placeholder?: string
  onOpenChange?: SelectProps['onOpenChange']
  onValueChange?: SelectProps['onValueChange']
  className?: string
}

const UserDetailRoleSelect = (props: UserGridAuthSelectProps) => {
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

export default UserDetailRoleSelect
