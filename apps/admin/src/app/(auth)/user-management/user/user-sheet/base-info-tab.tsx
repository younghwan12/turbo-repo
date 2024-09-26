'use client'

import { type UserProjectResDto } from '@pims-frontend/apis/lib/features/common/user/dto/response/UserProjectResDto'
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  useMaterialReactTable,
} from '@pims-frontend/ui/components/base/shadcn/material-react-table'
import { ParameterizedIcon } from '@pims-frontend/ui/components/base/shadcn/parameterized-icon'
import { SheetDescription } from '@pims-frontend/ui/components/base/shadcn/sheet'
import { TabsContent } from '@pims-frontend/ui/components/base/shadcn/tabs'
import { forwardRef, useMemo } from 'react'
import { UserBaseInfoForm } from './user-base-info-form'
import { type UserDetailSheetProps } from './user-detail-sheet'

export type BaseInfoTabProps = UserDetailSheetProps

export const BaseInfoTab = forwardRef<HTMLFormElement, BaseInfoTabProps>(
  function BaseInfoTab(props, ref) {
    const [sheet] = props.sheetState

    const columns = useMemo<MRT_ColumnDef<UserProjectResDto>[]>(
      () => [
        {
          header: '프로젝트명',
          accessorKey: 'projectName',
          grow: 1,
        },
        {
          header: '상태',
          accessorKey: 'progressStatusCode',
          size: 80,
        },
        {
          header: '사용자 권한',
          accessorKey: 'userAuthorityCode',
          size: 80,
        },
      ],
      [],
    )

    const data = useMemo(
      () => sheet.data?.projects || [],
      [sheet.data?.projects],
    )

    const table = useMaterialReactTable({
      data: data,
      columns: columns,
      enableTopToolbar: false,
      enableBottomToolbar: false,
      enableColumnActions: false,
      icons: {
        SyncAltIcon: () => <ParameterizedIcon name="ChevronsUpDown" />,
        ArrowDownwardIcon: () => <ParameterizedIcon name="ChevronDown" />,
      },
      initialState: {
        density: 'compact',
      },
      layoutMode: 'grid',
    })
    return (
      <TabsContent value="base-info">
        <SheetDescription className="px-9">기본정보</SheetDescription>
        <UserBaseInfoForm defaultValues={sheet.data} ref={ref} />
        <div className="flex flex-col px-9 gap-4">
          <SheetDescription className="text-xs">투입정보</SheetDescription>
          <SheetDescription className="text-2xs px-3">
            프로젝트 <span className="text-primary-normal">{data.length}</span>
          </SheetDescription>
          <MaterialReactTable table={table} />
        </div>
      </TabsContent>
    )
  },
)

BaseInfoTab.displayName = 'BaseInfoTab'
