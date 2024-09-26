import { PageHeader } from '@pims-frontend/ui/components/layouts/biz/PageHeader'
import type { Metadata } from 'next'

import { ProjectTabs } from './project-tabs'

const metadata = {
  title: '프로젝트 관리',
  description: '',
} satisfies Metadata

const ProjectMgtPage = async () => {
  return (
    <main className="h-full flex gap-6 p-9 flex-col bg-background-normal">
      <PageHeader name={metadata.title} desc={metadata.description} />
      <div>
        <ProjectTabs />
      </div>
    </main>
  )
}

export default ProjectMgtPage
