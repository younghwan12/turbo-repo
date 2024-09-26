import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import { AdminBase } from '@pims-frontend/ui/components/layouts/admin/AdminBase'
import { type Metadata } from 'next'
import Link from 'next/link'
import TopRightActions from './top-right-actions'

export const metadata = {
  title: 'new PiMS', // NOTE: 서비스 이름 확정 이후 수정해야함
} satisfies Metadata

const InsideLayout = async (props: React.PropsWithChildren) => {
  return (
    <AdminBase
      sidebarProps={{
        leftTop: (
          <Button asChild variant={'ghost'}>
            <Link className="text-base !font-bold" href="/">
              newPiMS
            </Link>
          </Button>
        ),
        links: [
          {
            href: '/project-management',
            icon: {
              type: 'lucide',
              iconName: 'folder-cog',
            },
            title: '프로젝트 관리',
            children: [
              {
                href: '/project-management/project',
                title: '프로젝트 관리',
              },
              {
                href: '/project-management/user',
                title: '메뉴 및 화면관리',
              },
              {
                href: '/project-management/user-group',
                title: '템플릿 관리',
              },
              {
                href: '/project-management/workflow',
                title: 'Workflow 관리',
              },
              {
                href: '/project-management/language',
                title: '다국어 관리',
              },
              {
                href: '/project-management/code',
                title: '코드 관리',
              },
            ],
          },
          {
            href: '/user-management',
            icon: {
              type: 'lucide',
              iconName: 'user-cog',
            },
            title: '사용자 관리',
            children: [
              {
                href: '/user-management/user',
                title: '사용자 관리',
              },
              {
                href: '/user-management/user-group',
                title: '사용자 그룹 관리',
              },
              {
                href: '/user-management/ip-block-mgt',
                title: 'IP 차단 관리',
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
    </AdminBase>
  )
}

export default InsideLayout
