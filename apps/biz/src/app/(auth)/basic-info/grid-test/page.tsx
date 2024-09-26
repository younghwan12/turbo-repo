'use client'
import { useGetTasksFlatQuery } from '@pims-frontend/apis/lib/features/pms/task/controller/TaskController'
import { buildTaskTree } from '@pims-frontend/biz/lib/features/schedule/build-task-tree'
import { PageHeader } from '@pims-frontend/ui/components/layouts/biz/PageHeader'
import type { Metadata } from 'next'
import WBSGrid from './_components/WBSGrid'
const metadata = {
  title: '그리드 테스트 ',
  description: '',
} satisfies Metadata
const GridTestPage = () => {
  const { data, isFetching } = useGetTasksFlatQuery({
    pjtUid: 6,
  })
  const newData = buildTaskTree(data ?? [])

  return (
    <main className="h-full flex gap-6 p-9 flex-col bg-background-normal">
      <PageHeader name={metadata.title} desc={metadata.description} />
      <div>
        <WBSGrid
          data={newData || []}
          showProgressBars={isFetching}
          isLoading={isFetching}
        />
      </div>
    </main>
  )
}
export default GridTestPage
