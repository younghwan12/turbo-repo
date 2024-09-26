import SelectProjectCombobox from '@pims-frontend/biz/lib/features/project/select-project-combobox'
import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import { UserBase } from '@pims-frontend/ui/components/layouts/biz/UserBase'
import { type Metadata } from 'next'
import Link from 'next/link'
import type { PropsWithChildren } from 'react'
import React from 'react'

import TopRightActions from './top-right-actions'

export const metadata = {
  title: 'new PiMS', // NOTE: 서비스 이름 확정 이후 수정해야함
} satisfies Metadata

const InsideLayout = async (props: PropsWithChildren) => {
  // TODO: 로그인하지 않았을 경우, 그리고 로그인하고나서 프로젝트를 불러올 수 없는 경우에는 로그인 페이지로 이동해야 함 (Unauthorized)
  // SelectProjectCombobox 안쪽 참조할 것

  return (
    <UserBase
      sidebarProps={{
        projectSwitcher: <SelectProjectCombobox />,
        leftTop: (
          <Button asChild variant={'ghost'}>
            <Link className="text-base !font-bold" href="/">
              newPiMS
            </Link>
          </Button>
        ),
        links: [
          {
            href: '/base-info',
            routeMatchMode: 'exact',
            icon: {
              type: 'lucide',
              iconName: 'folder-cog',
            },
            title: '기본정보',
            children: [
              {
                href: '/basic-info/project-management',
                routeMatchMode: 'exact',
                title: '프로젝트 관리',
              },
              {
                href: '/basic-info/user-management',
                routeMatchMode: 'exact',
                title: '사용자 관리',
              },
              {
                href: '/workflow',
                routeMatchMode: 'exact',
                title: '워크플로 관리',
              },
            ],
          },
          {
            href: '/schedule-management',
            routeMatchMode: 'partial',
            icon: {
              type: 'lucide',
              iconName: 'calendar',
            },
            title: '일정 관리',
            children: [],
          },
          {
            href: '/config',
            routeMatchMode: 'exact',
            icon: {
              type: 'lucide',
              iconName: 'cog',
            },
            title: '환경 설정',
            children: [
              {
                href: '/user-mgt/user',
                routeMatchMode: 'exact',
                title: '사용자 관리',
              },
            ],
          },
        ],
      }}
      topbarProps={{
        children: <TopRightActions />,
      }}
    >
      {props.children}
    </UserBase>
  )
}

export default InsideLayout
