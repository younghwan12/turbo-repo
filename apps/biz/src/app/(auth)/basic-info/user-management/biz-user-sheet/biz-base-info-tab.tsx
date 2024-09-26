'use client'

import type { MRT_ColumnDef } from '@pims-frontend/ui/components/base/shadcn/material-react-table'
import {
  MaterialReactTable,
  useMaterialReactTable,
} from '@pims-frontend/ui/components/base/shadcn/material-react-table'
import { ParameterizedIcon } from '@pims-frontend/ui/components/base/shadcn/parameterized-icon'
import { SheetDescription } from '@pims-frontend/ui/components/base/shadcn/sheet'
import { TabsContent } from '@pims-frontend/ui/components/base/shadcn/tabs'
import React, { forwardRef, useMemo } from 'react'

import { BizUserBaseInfoForm } from './biz-user-base-info-form'
import type { UserDetailSheetProps } from './biz-user-detail-sheet'
// import { selectOptions } from '../user-grid-sheet';
// import { UserDetailRoleSelect } from './user-detail-role-select';
// import { UserDetailSheetProps } from './user-detail-sheet';
// import { UserBaseInfoForm } from './user-base-info-form';

export type BaseInfoTabProps = UserDetailSheetProps

export const BizBaseInfoTab = forwardRef<HTMLFormElement, BaseInfoTabProps>(
  function BizBaseInfoTab(props, ref) {
    const [sheet] = props.sheetState

    const columns = useMemo<
      MRT_ColumnDef<{
        프로젝트명: string
        상태: string
        '사용자 권한': string
      }>[]
    >(
      () => [
        {
          header: '프로젝트명',
          accessorKey: '프로젝트명',
          grow: 1,
        },
        {
          header: '상태',
          accessorKey: '상태',
          size: 80,
        },
      ],
      [],
    )

    const data = useMemo(
      () =>
        sheet.data?.subPjtNm.map(project => ({
          프로젝트명: project,
          상태: '진행중',
          '사용자 권한': 'Member',
        })) || [],
      [sheet.data?.subPjtNm],
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
        <BizUserBaseInfoForm data={sheet.data} ref={ref} />
        <div className="flex flex-col gap-4 px-8">
          <SheetDescription className="text-xs">투입정보</SheetDescription>
          <SheetDescription className="px-2 text-2xs">
            프로젝트 <span className="text-primary-normal">{data.length}</span>
          </SheetDescription>
          <MaterialReactTable table={table} />
        </div>
      </TabsContent>
    )
  },
)

BizBaseInfoTab.displayName = 'BaseInfoTab'
