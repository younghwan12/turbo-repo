'use client'

import { ParameterizedIcon } from '@pims-frontend/ui/components/base/shadcn/parameterized-icon'
import {
  RadixTabs,
  RadixTabsList,
  RadixTabsTrigger,
} from '@pims-frontend/ui/components/base/shadcn/tabs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import router from 'next/router'
import { type PropsWithChildren, useEffect, useMemo, useState } from 'react'

export type ScheduleManagementPageTabNavProps = NonNullable<unknown>

const ScheduleManagementPageTabNav = (
  props: PropsWithChildren<ScheduleManagementPageTabNavProps>,
) => {
  const pathname = usePathname()
  const [currentPath, setCurrentPath] = useState(pathname)

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      setCurrentPath(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  const currentValue = useMemo(() => {
    if (currentPath === '/schedule-management') {
      return 'read-schedule'
    }

    if (currentPath === '/schedule-management/workflow') {
      return 'workflow'
    }

    if (currentPath === '/schedule-management/status-chart') {
      return 'status-chart'
    }
  }, [currentPath])

  return (
    <RadixTabs value={currentValue}>
      <RadixTabsList className="flex justify-start gap-2 px-6 bg-transparent">
        <RadixTabsTrigger
          value="read-schedule"
          variant={'bottomActive'}
          asChild
        >
          <Link href="/schedule-management">
            <ParameterizedIcon name="Table" />
            조회
          </Link>
        </RadixTabsTrigger>
        <RadixTabsTrigger value="workflow" variant={'bottomActive'} asChild>
          <Link href="/schedule-management/workflow">
            <ParameterizedIcon name="Route" />
            단계
          </Link>
        </RadixTabsTrigger>
        <RadixTabsTrigger value="status-chart" variant={'bottomActive'} asChild>
          <Link href="/schedule-management/status-chart">
            <ParameterizedIcon name="ChartBar" />
            현황 차트
          </Link>
        </RadixTabsTrigger>
      </RadixTabsList>
      {props.children}
    </RadixTabs>
  )
}

export default ScheduleManagementPageTabNav
