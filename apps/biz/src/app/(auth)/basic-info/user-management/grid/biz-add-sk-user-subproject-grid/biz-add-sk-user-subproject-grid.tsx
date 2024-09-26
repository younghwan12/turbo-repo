import type { MRT_ColumnDef } from '@pims-frontend/ui/components/base/shadcn/material-react-table'
import { MaterialReactTable } from '@pims-frontend/ui/components/base/shadcn/material-react-table'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@pims-frontend/ui/components/base/shadcn/select'
import React, { useMemo, useState } from 'react'

type UserData = {
  userName: string
  subProjects: string[]
  userPermissions: string[]
}

const ExampleTable: React.FC = () => {
  const [selectedData, setSelectedData] = useState<UserData[]>([]) // 테이블에 표시할 데이터 상태

  // 컬럼 정의
  const columns = useMemo<MRT_ColumnDef<UserData>[]>(
    () => [
      {
        accessorKey: 'userName', // 사용자 명 컬럼
        header: '사용자 명',
        enableSorting: false, // 정렬 옵션 비활성화
      },
      {
        accessorKey: 'subProjects', // 서브 프로젝트 컬럼
        header: '서브 프로젝트',
        enableSorting: false, // 정렬 옵션 비활성화
        Cell: ({ cell }) => (
          <ul>
            {cell.getValue<string[]>().map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        ),
      },
      {
        accessorKey: 'userPermissions', // 사용자 권한 컬럼
        header: '사용자 권한',
        enableSorting: false, // 정렬 옵션 비활성화
        Cell: ({ cell }) => (
          <ul>
            {cell.getValue<string[]>().map((permission, index) => (
              <li key={index}>{permission}</li>
            ))}
          </ul>
        ),
      },
    ],
    [],
  )

  // 데이터 예시
  const allData = useMemo<UserData[]>(
    () => [
      {
        userName: 'John Doe',
        subProjects: ['Project A', 'Project B'],
        userPermissions: ['Admin', 'Editor'],
      },
      {
        userName: 'Jane Smith',
        subProjects: ['Project C'],
        userPermissions: ['Viewer'],
      },
      {
        userName: 'Alice Johnson',
        subProjects: ['Project D', 'Project E'],
        userPermissions: ['Editor'],
      },
    ],
    [],
  )

  // 선택된 데이터 변경 핸들러
  const handleSelectChange = (selectedUserName: string) => {
    const filteredData = allData.filter(
      user => user.userName === selectedUserName,
    )
    setSelectedData(filteredData) // 선택된 데이터로 테이블 업데이트
  }

  return (
    <div>
      {/* Selectbox for user selection */}
      <Select onValueChange={handleSelectChange}>
        <SelectTrigger className="w-[200px]">사용자 선택</SelectTrigger>
        <SelectContent>
          {allData.map(user => (
            <SelectItem key={user.userName} value={user.userName}>
              {user.userName}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* 테이블 */}
      {selectedData.length > 0 ? (
        <MaterialReactTable
          columns={columns}
          data={selectedData}
          enablePagination={false} // 페이지 처리 비활성화
          enableTopToolbar={false} // 상단 헤더(툴바) 비활성화
          enableBottomToolbar={false}
          enableColumnActions={false}
        />
      ) : (
        <p>사용자를 선택하세요</p>
      )}
    </div>
  )
}

export default ExampleTable
