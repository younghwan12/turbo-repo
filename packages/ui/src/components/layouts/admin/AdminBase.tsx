'use client'

import { cn } from '@pims-frontend/ui/lib/utils'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import React from 'react'
import { ImperativePanelHandle } from 'react-resizable-panels'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '../../base/shadcn/resizable'

import { TooltipProvider } from '../../base/shadcn/tooltip'
import { AdminSidebar, type SidebarProps } from './AdminSidebar'
import { AdminTopbar, type TopbarProps } from './AdminTopbar'

export type BaseProps = {
  baseProps?: {
    defaultCollapsed?: boolean
    defaultLayout?: number[]
    navCollapsedSize?: number
  }
  topbarProps?: TopbarProps
  sidebarProps?: SidebarProps
}

export function AdminBase({
  children,
  baseProps,
  sidebarProps,
  topbarProps,
}: React.PropsWithChildren<BaseProps>) {
  const {
    defaultLayout = [20, 80],
    defaultCollapsed = false,
    navCollapsedSize = 4,
  } = baseProps ?? {}
  const sidebarPanelRef = React.useRef<ImperativePanelHandle>(null)
  const [isCollapsed, setIsCollapsed] =
    React.useState<boolean>(defaultCollapsed)
  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout:base=${JSON.stringify(sizes)}`
        }}
        className="h-full max-h-screen items-stretch"
      >
        <ResizablePanel
          ref={sidebarPanelRef}
          defaultSize={defaultLayout[0]}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={10}
          maxSize={20}
          onCollapse={() => {
            setIsCollapsed(true)
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              true,
            )}`
          }}
          onResize={() => {
            setIsCollapsed(false)
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              false,
            )}`
          }}
          className={cn(
            isCollapsed &&
              'min-w-[50px] transition-all duration-300 ease-in-out',
          )}
        >
          <ScrollArea className="h-screen overflow-auto">
            <AdminSidebar
              {...sidebarProps}
              isCollapsed={isCollapsed}
              onCollapse={() => {
                sidebarPanelRef.current?.collapse()
                setIsCollapsed(true)
              }}
              onExpand={() => {
                sidebarPanelRef.current?.expand()
                setIsCollapsed(false)
              }}
            />
          </ScrollArea>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={80}>
          <AdminTopbar {...topbarProps} />
          {/** TODO: Use ref and update the pixel height */}
          <ScrollArea className="h-[calc(100dvh-89px)] overflow-auto">
            {children}
          </ScrollArea>
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  )
}
