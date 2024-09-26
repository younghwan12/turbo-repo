// NOTE: typescript 에러를 막기 위한 임시 방편, 나중에 제거할 것
'use client'

import AddProjectDialog from '@pims-frontend/admin/lib/features/project/add-project-dialog'
import {
  projectActions,
  projectSelectors,
} from '@pims-frontend/admin/lib/features/project/projectSlice'
import { useAppDispatch, useAppSelector } from '@pims-frontend/admin/lib/hooks'
import { useGetAllCodeDetailsQuery } from '@pims-frontend/apis/lib/features/common/code/controller/CodeController'
import {
  useGetProjectListQuery,
  useUpdateProjectStatMutation,
} from '@pims-frontend/apis/lib/features/common/project/controller/ProjectController'
import { useToast } from '@pims-frontend/ui/components/base/shadcn/use-toast'
import { CommonPagination } from '@pims-frontend/ui/components/common/etc/EtcPagination'
import { useMemo, useState } from 'react'
import AdminProjectGrid from './grid/admin-project-grid'
import ProjectDetailSheet, {
  type SheetState,
} from './project-sheet/project-detail-sheet'

const initialSheetState: SheetState = {
  isOpen: false,
  data: null,
} satisfies SheetState

const ProjectGridSheet = () => {
  const dispatch = useAppDispatch()
  // const projects = useAppSelector(projectSelectors.selectProjectList)
  const searchText = useAppSelector(
    projectSelectors.selectProjectListSearchText,
  )
  const { toast } = useToast()

  const { data = [], isFetching } = useGetProjectListQuery({
    keyword: '',
  })

  const filteredData = useMemo(() => {
    // dispatch(projectActions());

    if (!searchText) {
      return data
    }

    return data.filter(item => {
      return (
        item.pjtNm.includes(searchText) ||
        item.pjtUid.toString().includes(searchText) ||
        item.pjtNo.includes(searchText)
      )
    })
  }, [data, searchText])

  const [update] = useUpdateProjectStatMutation({})
  useGetAllCodeDetailsQuery({
    codeGroupId: 'PJT_PGS_STAT_CD',
  })

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 20,
  })

  const [sheet, setSheet] = useState<SheetState>(initialSheetState)

  return (
    <>
      <AdminProjectGrid
        data={filteredData}
        pagination={pagination}
        showProgressBars={isFetching}
        isLoading={isFetching}
        onOpenChange={() => () => {
          //console.log('onOpenChange', row, open)
        }}
        onValueChange={row => value => {
          update({ ...row.original, pgsStatCd: value }).then(() => {
            toast({
              title: `상태가 변경 저장되었습니다.`,
            })
          })
        }}
        onClickRow={row => () => {
          setSheet(prev => ({
            ...prev,
            isOpen: !prev.isOpen,
            data: row.original,
          }))
        }}
        topbarbtnClick={() => {
          dispatch(projectActions.openAddPjtModal())
        }}
      />
      <CommonPagination
        dataLength={data?.length || 0}
        paginationState={[pagination, setPagination]}
      />

      <ProjectDetailSheet sheetState={[sheet, setSheet]} />
      <AddProjectDialog />
    </>
  )
}

export default ProjectGridSheet
