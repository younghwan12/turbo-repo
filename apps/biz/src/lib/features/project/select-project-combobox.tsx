'use client'

import { fetchMockProject } from '@pims-frontend/biz/app/mock-fetch'
import {
  projectActions,
  projectSelectors,
} from '@pims-frontend/biz/lib/features/project/projectSlice'
import { useAppDispatch, useAppSelector } from '@pims-frontend/biz/lib/hooks'
import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@pims-frontend/ui/components/base/shadcn/command'
import { ParameterizedIcon } from '@pims-frontend/ui/components/base/shadcn/parameterized-icon'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@pims-frontend/ui/components/base/shadcn/popover'
import { cn } from '@pims-frontend/ui/lib/utils'
import React, { useEffect, useRef } from 'react'

const SelectProjectCombobox = () => {
  const { isOpen, target, value, options } = useAppSelector(
    projectSelectors.selectProjectCombobox,
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    // TODO: 이 코드는 임시 코드임; 로그인 로직이 개발되면, layout으로부터 server side data를 props로 받아와야함
    fetchMockProject().then(project => {
      if (project) {
        dispatch(projectActions.getInitialProject(project))
      }
    })
  }, [dispatch])

  const triggerRef = useRef<HTMLButtonElement>(null)

  return (
    <div className="px-3">
      <Popover
        open={isOpen}
        onOpenChange={open => {
          dispatch(projectActions.toggleCombobox(open))
        }}
      >
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={isOpen}
            aria-label="프로젝트를 선택하세요"
            className={cn('w-full justify-between')}
            ref={triggerRef}
          >
            {target?.pjtNm}
            <ParameterizedIcon name="ChevronDown" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className={'min-w-fit p-0'}
          style={{
            width: triggerRef.current?.offsetWidth,
          }}
        >
          <Command>
            <CommandInput placeholder="프로젝트 검색..." />
            <CommandList>
              <CommandEmpty>프로젝트를 찾을 수 없습니다.</CommandEmpty>
              <CommandGroup key={target?.pjtNm}>
                {options.map(project => (
                  <CommandItem
                    key={project.pjtNo}
                    onSelect={() => {
                      dispatch(
                        projectActions.selectProject({
                          target: project,
                          value: project.pjtNo,
                        }),
                      )
                      dispatch(projectActions.closeCombobox())
                    }}
                    className="text-sm"
                  >
                    {project.pjtNm}
                    <ParameterizedIcon
                      name="Check"
                      className={cn(
                        'ml-auto h-4 w-4',
                        project.pjtNo === value ? 'opacity-100' : 'opacity-0',
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default SelectProjectCombobox
