import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import { DynamicIcon } from '@pims-frontend/ui/components/base/shadcn/dynamic-icon'
import { PageHeader } from '@pims-frontend/ui/components/layouts/biz/PageHeader'
import { type Metadata } from 'next'
import Link from 'next/link'

export const metadata = {
  title: '일정관리',
  description: '프로젝트의 일정을 조회하고 현황을 파악합니다',
} satisfies Metadata

const ScheduleManagementLayout = async (props: React.PropsWithChildren) => {
  return (
    <div className="flex flex-col p-8 gap-6">
      <PageHeader name={metadata.title} desc={metadata.description}>
        <Button asChild variant={'secondary'}>
          <Link href="/page-setup" prefetch>
            <DynamicIcon name="cog" />
            페이지 설정
          </Link>
        </Button>
      </PageHeader>
      {props.children}
    </div>
  )
}

export default ScheduleManagementLayout
