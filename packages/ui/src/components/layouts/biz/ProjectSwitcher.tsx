'use client'

import { cn } from '@pims-frontend/ui/lib/utils'
import {
  CaretSortIcon,
  CheckIcon,
  PlusCircledIcon,
} from '@radix-ui/react-icons'
import React from 'react'

import { Button } from '../../base/shadcn/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '../../base/shadcn/command'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../base/shadcn/dialog'
import { Input } from '../../base/shadcn/input'
import { Label } from '../../base/shadcn/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../../base/shadcn/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../base/shadcn/select'

const projects = [
  {
    label: '프로젝트',
    projects: [
      {
        label: '어떤 프로젝트',
        value: 'project-1',
      },
      {
        label: '좋은 프로젝트',
        value: 'project-2',
      },
      {
        label: '괜찮은 프로젝트',
        value: 'project-3',
      },
    ],
  },
]

type Project = (typeof projects)[number]['projects'][number]

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

export type ProjectSwitcherProps = PopoverTriggerProps & NonNullable<unknown>

export default function ProjectSwitcher({ className }: ProjectSwitcherProps) {
  const triggerRef = React.useRef<HTMLButtonElement>(null)
  const [open, setOpen] = React.useState(false)
  const [showNewProjectDialog, setShowNewProjectDialog] = React.useState(false)
  const [selectedProject, setSelectedProject] = React.useState<Project>(
    projects[0]!.projects[0]!,
  )

  return (
    <Dialog open={showNewProjectDialog} onOpenChange={setShowNewProjectDialog}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            aria-label="Select a project"
            className={cn('w-full justify-between', className)}
            ref={triggerRef}
          >
            {selectedProject.label}
            <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className={'min-w-fit p-0'}
          style={{
            width: triggerRef.current?.offsetWidth,
          }}
        >
          <Command>
            <CommandInput placeholder="Search project..." />
            <CommandList>
              <CommandEmpty>No project found.</CommandEmpty>
              {projects?.map(group => (
                <CommandGroup key={group.label} heading={group.label}>
                  {group?.projects.map(project => (
                    <CommandItem
                      key={project.value}
                      onSelect={() => {
                        setSelectedProject(project)
                        setOpen(false)
                      }}
                      className="text-sm"
                    >
                      {project.label}
                      <CheckIcon
                        className={cn(
                          'ml-auto h-4 w-4',
                          selectedProject.value === project.value
                            ? 'opacity-100'
                            : 'opacity-0',
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
            <CommandSeparator />
            <CommandList>
              <CommandGroup>
                <DialogTrigger asChild>
                  <CommandItem
                    onSelect={() => {
                      setOpen(false)
                      setShowNewProjectDialog(true)
                    }}
                  >
                    <PlusCircledIcon className="mr-2 h-5 w-5" />
                    프로젝트 생성
                  </CommandItem>
                </DialogTrigger>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>프로젝트 생성하기</DialogTitle>
          <DialogDescription>프로젝트를 생성하세요.</DialogDescription>
        </DialogHeader>
        <div className="px-2">
          <div className="space-y-4 py-2 pb-4">
            <div className="space-y-2">
              <Label htmlFor="name">새 프로젝트 이름</Label>
              <Input id="name" placeholder="새 프로젝트 1" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="plan">프로젝트 유형</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="프로젝트 유형을 선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="maintenance">
                    <span className="font-medium">관리</span> -{' '}
                    <span className="text-muted-foreground">관리 프로젝트</span>
                  </SelectItem>
                  <SelectItem value="integration">
                    <span className="font-medium">구축</span> -{' '}
                    <span className="text-muted-foreground">구축 프로젝트</span>
                  </SelectItem>
                  <SelectItem value="combined">
                    <span className="font-medium">복합</span> -{' '}
                    <span className="text-muted-foreground">복합 프로젝트</span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => setShowNewProjectDialog(false)}
          >
            취소
          </Button>
          <Button type="submit">계속</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
