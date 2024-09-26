'use client'

import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from '@pims-frontend/ui/components/base/shadcn/command'
import { ParameterizedIcon } from '@pims-frontend/ui/components/base/shadcn/parameterized-icon'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@pims-frontend/ui/components/base/shadcn/popover'
import { cn } from '@pims-frontend/ui/lib/utils'
import { useLazyGetUsersSearchQuery } from './controller/UserController'
import React from 'react'

export type UserPopopverProps = {
  onSelect: (value: string) => void
  standard: string
  placeholder: string
  defaultValue?: string
  loadOnMount?: boolean
}

export function UserPopover(props: React.PropsWithChildren<UserPopopverProps>) {
  const ref = React.useRef<HTMLButtonElement>(null)
  const [trigger, { data = [], isUninitialized, isFetching }] =
    useLazyGetUsersSearchQuery()
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    if (props.loadOnMount) {
      trigger(props.standard)
    }
  }, [props.loadOnMount, props.standard, trigger])

  return (
    <Popover
      open={isOpen}
      onOpenChange={() => {
        setIsOpen(prev => !prev)
      }}
    >
      <PopoverTrigger asChild>
        <Button
          onClick={() => {
            trigger('')
          }}
          ref={ref}
          variant="outline"
          role="combobox"
          className={cn(
            'w-full justify-between !mt-0',
            !props.standard && 'text-muted-foreground',
          )}
        >
          {props.standard
            ? data.find(option => option.userId === props.standard)?.userName
            : props.placeholder}
          {isFetching && (
            <ParameterizedIcon
              name="LoaderCircle"
              className="ml-2 h-4 w-4 shrink-0 animate-spin"
            />
          )}
          <ParameterizedIcon
            name="ChevronDown"
            className="ml-2 h-4 w-4 shrink-0 opacity-50"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        style={{
          width: ref.current?.offsetWidth,
        }}
      >
        <Command>
          <CommandInput
            placeholder="사용자를 검색하세요."
            onValueChange={value => {
              trigger(value)
            }}
          />
          <CommandList>
            <CommandEmpty>검색결과가 없습니다.</CommandEmpty>
            <CommandGroup>
              {data.map(option => (
                <CommandItem
                  value={option.userName}
                  key={option.userId}
                  onSelect={value => {
                    setIsOpen(false)
                    return props.onSelect(option.userId)
                  }}
                >
                  <ParameterizedIcon
                    name="Check"
                    className={cn(
                      'mr-2 h-4 w-4',
                      option.userId === props.standard
                        ? 'opacity-100'
                        : 'opacity-0',
                    )}
                  />
                  {`${option.userName} (${option.companyCode})`}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
