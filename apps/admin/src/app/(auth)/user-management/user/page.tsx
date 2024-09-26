// import { PageHeader } from '@pims-frontend/ui/components/layouts/biz/PageHeader'

// import UserGridSheet from './user-grid-sheet'

export const metadata = {
  title: '사용자관리', // NOTE: 기획 변경 가능성 있음
  description:
    '사용자 조회 및 권한 설정을 수행하고, 접속 및 사용 현황을 모니터링합니다.',
} satisfies Metadata

// const UserPage = async () => {
//   return (
//     <main className="h-full flex gap-9 p-9 flex-col">
//       {/* NavBar 컴퍼넌트로 공통 빼기 */}
//       <PageHeader name={metadata.title} desc={metadata.description} />
//       <div className="gap-3">
//         <UserGridSheet />
//       </div>
//     </main>
//   )
// }

// export default UserPage

import { PageHeader } from '@pims-frontend/ui/components/layouts/biz/PageHeader'
import React from 'react'
import { type Metadata } from 'next'
import UserWrapper from './_components/UserWrapper'

const UpserPabe = async () => {
  return (
    <main className="h-full flex gap-9 p-9 flex-col">
      {/* NavBar 컴퍼넌트로 공통 빼기 */}
      <PageHeader name={metadata.title} desc={metadata.description} />
      <div className="gap-3">
        <UserWrapper />
      </div>
    </main>
  )
}

export default UpserPabe
