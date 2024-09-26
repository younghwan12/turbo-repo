import { PageHeader } from '@pims-frontend/ui/components/layouts/biz/PageHeader'
import { type Metadata } from 'next'
import ProjectGridSheet from './project-grid-sheet'

const metadata = {
  title: '프로젝트 관리',
  description:
    '프로젝트 조회 및 템플릿 설정을 수행하고, 참여자 현황을 모니터링 합니다.',
} satisfies Metadata

const ProjectPage = async () => {
  return (
    <main className="h-full flex gap-9 p-9 flex-col">
      <PageHeader name={metadata.title} desc={metadata.description} />
      <div className="gap-3">
        <ProjectGridSheet />
      </div>
    </main>
  )
}

export default ProjectPage
