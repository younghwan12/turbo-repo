'use client'

import { cn } from '@pims-frontend/ui/lib/utils'
import Link from 'next/link'
import { useSelectedLayoutSegments } from 'next/navigation'
import React from 'react'

import { Button } from '../../base/shadcn/button'
import { DynamicIcon } from '../../base/shadcn/dynamic-icon'
import {
  IconLibraryConsumer,
  type IconLibraryConsumerProps,
} from '../../base/shadcn/icon-library-consumer'
import { ParameterizedIcon } from '../../base/shadcn/parameterized-icon'
import { Separator } from '../../base/shadcn/separator'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '../../base/shadcn/tooltip'
import ProjectSwitcher from '../biz/ProjectSwitcher'

export type LinkNode = {
  title: string
  label?: string
  icon?: IconLibraryConsumerProps
  href: string
  children?: LinkNode[]
}

export type SidebarProps = Pick<
  React.HTMLAttributes<HTMLDivElement>,
  'className'
> & {
  isAdminChannel?: boolean
  leftTop?: React.ReactNode
  isCollapsed?: boolean
  onCollapse?: () => void
  onExpand?: () => void
  links?: LinkNode[]
}

const CollapsedLink = (props: LinkNode) => {
  const segments = useSelectedLayoutSegments()
  const isActive = '/' + segments.join('/') === props.href

  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild className="w-full justify-start gap-2">
        <Button asChild variant={isActive ? 'secondary' : 'ghost'}>
          <Link href={props.href}>
            {props.icon?.type === 'lucide' && (
              <IconLibraryConsumer {...props.icon} />
            )}
            <span className="sr-only">{props.title}</span>
          </Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="right" className="flex items-center gap-4">
        {props.title}
        {props.label && (
          <span className="ml-auto text-muted-foreground">{props.label}</span>
        )}
      </TooltipContent>
    </Tooltip>
  )
}

const ExpandedLink = (props: LinkNode) => {
  const segments = useSelectedLayoutSegments()
  const isActive = '/' + segments.join('/') === props.href

  const hasChildren = !!props.children?.length

  const [isExpanded, setIsExpanded] = React.useState(true) // 하위 메뉴 상태 관리 추가

  return (
    <>
      <Button
        asChild={!hasChildren} // 자식이 있을 경우 링크로 작동하지 않도록 설정
        variant={isActive ? 'default' : 'ghost'}
        className="w-full justify-between gap-2"
        onClick={() => hasChildren && setIsExpanded(!isExpanded)} // 클릭 시 상태 변경
      >
        {hasChildren ? (
          // 자식이 있을 경우 부모는 단순 버튼으로 표시
          <>
            <div className="flex items-center gap-2">
              {props.icon?.type === 'lucide' && (
                <IconLibraryConsumer {...props.icon} />
              )}
              {props.title}
              {props.label && (
                <span
                  className={cn(
                    'ml-auto',
                    isActive && 'text-background dark:text-white',
                  )}
                >
                  {props.label}
                </span>
              )}
            </div>
            {isExpanded && <ParameterizedIcon name="ChevronDown" />}
            {!isExpanded && <ParameterizedIcon name="ChevronRight" />}
          </>
        ) : (
          <Link href={props.href} className="pl-[60px]">
            {props.icon?.type === 'lucide' && (
              <IconLibraryConsumer {...props.icon} />
            )}
            {props.title}
            {props.label && (
              <span
                className={cn(
                  'ml-auto',
                  isActive && 'text-background dark:text-white',
                )}
              >
                {props.label}
              </span>
            )}
          </Link>
        )}
      </Button>
      {hasChildren && isExpanded && props.children && (
        <SubMenuGroup children={props.children} />
      )}
    </>
  )
}

const SubMenuGroup = ({ children }: { children: LinkNode[] }) => {
  return (
    <div>
      {children.map((child, index) => (
        <ExpandedLink key={index} {...child} />
      ))}
    </div>
  )
}

export const AdminSidebar = (props: SidebarProps) => {
  const { links = [], isCollapsed = false, isAdminChannel = false } = props

  return (
    <div className={props.className}>
      <div className="space-y-4 py-4">
        <div
          className={cn('flex justify-between items-center px-3', {
            'justify-center': isCollapsed,
          })}
        >
          {!isCollapsed && (props.leftTop || <span>Placeholder</span>)}
          <Button
            variant="ghost"
            onClick={() => {
              isCollapsed ? props.onExpand?.() : props.onCollapse?.()
            }}
          >
            {isCollapsed ? (
              <DynamicIcon name="arrow-right-to-line" />
            ) : (
              <DynamicIcon name="arrow-left-to-line" />
            )}
          </Button>
        </div>
        {isAdminChannel && !isCollapsed && (
          <div className="px-3">
            <ProjectSwitcher />
          </div>
        )}
        <Separator />
        <div className="px-3 py-2">
          <div
            data-collapsed={isCollapsed}
            className="group space-y-1 flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
          >
            <nav className="grid gap-1 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
              {links.map((link, index) =>
                isCollapsed ? (
                  <CollapsedLink key={index} {...link} />
                ) : (
                  <ExpandedLink key={index} {...link} />
                ),
              )}
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
