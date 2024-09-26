'use client'

import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@pims-frontend/ui/components/base/shadcn/dropdown-menu'
import { ParameterizedIcon } from '@pims-frontend/ui/components/base/shadcn/parameterized-icon'

import { type BizUserGridSelectOption } from '../biz-user-select-option'
import { BizUserGridAuthBadge } from './biz-grid-auth-badge'

export type BizUserGridFilterDropdownButtonProps = {
  selectOptions: BizUserGridSelectOption[]
  onClickDropdownMenuItem?: (
    value: BizUserGridSelectOption['value'],
  ) => React.MouseEventHandler<HTMLDivElement>
  buttonText: string
  subTriggerText: string
}

const BizUserGridFilterDropdownButton = (
  props: React.PropsWithChildren<BizUserGridFilterDropdownButtonProps>,
) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'outline'}>
          <ParameterizedIcon name="Filter" className="w-4 h-4 mr-2" />
          {props.buttonText}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" side="right">
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            {props.subTriggerText}
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              {props.selectOptions.map(option => (
                <DropdownMenuItem
                  key={option.value}
                  onClick={props?.onClickDropdownMenuItem?.(option.value)}
                >
                  <BizUserGridAuthBadge color={option.color}>
                    {option.displayString}
                  </BizUserGridAuthBadge>
                </DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default BizUserGridFilterDropdownButton
