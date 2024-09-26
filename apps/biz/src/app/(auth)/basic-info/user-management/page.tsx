import { PageHeader } from '@pims-frontend/ui/components/layouts/biz/PageHeader'
import { type Metadata } from 'next'

import { BizUserGridSheet } from './biz-user-grid-sheet'

export const metadata = {
  title: '사용자관리', // NOTE: 기획 변경 가능성 있음
  description:
    '사용자 등록 및 수정, 권한 변경 및 그룹 설정, 자원 배정을 할 수 있습니다',
} satisfies Metadata

const UserAssignmentPage = async () => {
  return (
    <main className="flex flex-col h-full gap-9 p-9">
      <PageHeader name={metadata.title} desc={metadata.description} />
      <div className="gap-3 border-2 rounded-lg">
        <BizUserGridSheet />
      </div>
    </main>
  )
}

export default UserAssignmentPage
