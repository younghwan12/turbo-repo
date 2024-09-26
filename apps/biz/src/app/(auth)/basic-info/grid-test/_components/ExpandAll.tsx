'use client'

import {
  getExpandFromTree,
  getMaxDepth,
} from '@pims-frontend/biz/lib/features/schedule/build-task-tree'
import { scheduleSelectors } from '@pims-frontend/biz/lib/features/schedule/scheduleSlice'
import { useAppSelector } from '@pims-frontend/biz/lib/hooks'
import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@pims-frontend/ui/components/base/shadcn/command'
import {
  type MRT_RowData,
  type MRT_TableInstance,
} from '@pims-frontend/ui/components/base/shadcn/material-react-table'
import { ParameterizedIcon } from '@pims-frontend/ui/components/base/shadcn/parameterized-icon'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@pims-frontend/ui/components/base/shadcn/popover'
import { cn } from '@pims-frontend/ui/lib/utils'
import React from 'react'

type ExpandAllProps<TData extends MRT_RowData> = {
  table: MRT_TableInstance<TData>
}

const ExpandAll = <TData extends MRT_RowData>(props: ExpandAllProps<TData>) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const data = useAppSelector(scheduleSelectors.selectMemoizedTreeData)
  const [value, setValue] = React.useState<string>(() => '-1')
  const options = React.useMemo(() => {
    const maxDepth = getMaxDepth(data)

    return [
      {
        value: `0`,
        label: `전체`,
      },
      ...Array.from({ length: maxDepth - 1 }, (_, idx) => ({
        value: `${idx + 1}`,
        label: `${idx + 1}레벨 요약`,
      })),
    ]
  }, [data])

  const handleSelect = React.useCallback(
    (currentValue: string) => {
      const next = currentValue === value ? '' : currentValue
      setValue(next)
      setIsOpen(false)

      if (currentValue === '0') {
        return props.table.toggleAllRowsExpanded(true)
      }

      return props.table.setExpanded(() =>
        getExpandFromTree(data, Number(currentValue)),
      )
    },
    [data, value, props.table],
  )

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <ParameterizedIcon name="Blinds" />
          전체 펼쳐보기
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start" sideOffset={5}>
        <Command>
          <CommandList>
            <CommandGroup>
              {options.map(option => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={handleSelect}
                >
                  <ParameterizedIcon
                    name="Check"
                    className={cn('mr-2 h-4 w-4', {
                      'opacity-100': value === option.value,
                      'opacity-0': value !== option.value,
                    })}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default ExpandAll
