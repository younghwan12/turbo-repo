'use client'

import { cn } from '@pims-frontend/ui/lib/utils'
import Link from 'next/link'
import { useSelectedLayoutSegments } from 'next/navigation'
import React from 'react'

import { Button } from '../../base/shadcn/button'
import { DynamicIcon } from '../../base/shadcn/dynamic-icon'
import type { IconLibraryConsumerProps } from '../../base/shadcn/icon-library-consumer'
import { IconLibraryConsumer } from '../../base/shadcn/icon-library-consumer'
import { ParameterizedIcon } from '../../base/shadcn/parameterized-icon'
import { Separator } from '../../base/shadcn/separator'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '../../base/shadcn/tooltip'

export type LinkNode = {
  title: string
  label?: string
  icon?: IconLibraryConsumerProps
  href: string
  routeMatchMode?: 'partial' | 'exact'
  children?: LinkNode[]
  isCollapsed?: boolean
  depth?: number
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
  projectSwitcher?: React.ReactNode
}

const CollapsableLink = (props: LinkNode) => {
  const { depth = 0 } = props
  const hasChildren = (props.children?.length || 0) > 0
  // eslint-disable-next-line import/no-named-as-default-member
  const [isExpanded, setIsExpanded] = React.useState(true) // 하위 메뉴 상태 관리 추가
  const segments = useSelectedLayoutSegments()
  // eslint-disable-next-line import/no-named-as-default-member
  const isActive = React.useMemo(() => {
    if (props.routeMatchMode === 'exact') {
      return '/' + segments.join('/') === props.href
    }

    // default : partial
    return ('/' + segments.join('/')).startsWith(props.href)
  }, [props.routeMatchMode, segments, props.href])

  if (props.isCollapsed) {
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

  if (hasChildren) {
    return (
      <>
        <Button
          // 자식이 있을 경우 단순 버튼임
          variant={isActive ? 'secondary' : 'ghost'}
          className="w-full justify-between gap-2"
          style={{
            paddingLeft: `${depth * 36 + 12}px`,
          }}
          onClick={() => setIsExpanded(prev => !prev)} // 클릭 시 상태 변경
        >
          <div className="flex flex-row gap-2 items-center">
            {depth > 0 && !hasChildren && <div className="w-6 h-6" />}
            {depth > 0 &&
              (isExpanded ? (
                <ParameterizedIcon name="ChevronDown" />
              ) : (
                <ParameterizedIcon name="ChevronRight" />
              ))}
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
          {depth === 0 &&
            (isExpanded ? (
              <ParameterizedIcon name="ChevronDown" />
            ) : (
              <ParameterizedIcon name="ChevronRight" />
            ))}
        </Button>
        {isExpanded &&
          props.children?.map((child, index) => (
            <CollapsableLink
              key={`${child.href}-${index}`}
              {...child}
              depth={depth + 1}
              isCollapsed={props.isCollapsed}
            />
          ))}
      </>
    )
  }

  return (
    <Button
      asChild // 자식이 없을 경우 링크임
      variant={isActive ? 'secondary' : 'ghost'}
      className="w-full justify-start gap-2"
      style={{
        paddingLeft: `${depth * 36 + 12}px`,
      }}
    >
      <Link className="flex items-center gap-2" href={props.href}>
        {depth > 0 && <div className="w-6 h-6" />}
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
    </Button>
  )
}

export const UserSidebar = (props: SidebarProps) => {
  const { links = [], isCollapsed = false } = props

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
        {!isCollapsed && <div className="px-3">{props.projectSwitcher}</div>}
        <Separator />
        <div className="px-3 py-2">
          <div
            data-collapsed={isCollapsed}
            className="group space-y-1 flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
          >
            <nav className="grid gap-1 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
              {links.map((link, index) => (
                <CollapsableLink
                  key={`${link.href}-${index}`}
                  {...link}
                  isCollapsed={isCollapsed}
                  depth={0}
                />
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
