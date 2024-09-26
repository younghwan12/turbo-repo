'use client'

import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import {
  type MRT_RowData,
  type MRT_TableInstance,
} from '@pims-frontend/ui/components/base/shadcn/material-react-table'
import { ParameterizedIcon } from '@pims-frontend/ui/components/base/shadcn/parameterized-icon'
import { Separator } from '@pims-frontend/ui/components/base/shadcn/separator'
import ExpandAll from './ExpandAll'
import ModeSwitch from './ModeSwitch'
import SearchTextInput from '@pims-frontend/biz/lib/features/schedule/look-up-filter/search-text-input'
import LookUpFilter from '@pims-frontend/biz/lib/features/schedule/look-up-filter/look-up-filter'
import AppliedSubprojectBadges from '@pims-frontend/biz/lib/features/schedule/look-up-filter/applied-subproject-badges'

export type TopToolbarProps<TData extends MRT_RowData> = {
  table: MRT_TableInstance<TData>
}

const TopToolbar = <TData extends MRT_RowData>({
  table,
}: TopToolbarProps<TData>) => {
  return (
    <div>
      <div className="flex justify-between items-center px-4 py-2">
        <SearchTextInput />
        <div className="flex flex-row items-center gap-1">
          <Button variant="bordered" className="py-3">
            <ParameterizedIcon name="ScanText" />
            버전
          </Button>
          <Button variant="bordered" className="py-3">
            <ParameterizedIcon name="Save" />
            저장
          </Button>
          <Button variant="bordered" className="py-3">
            <ParameterizedIcon name="FileSpreadsheet" />
            .xls
          </Button>
          <ModeSwitch />
        </div>
      </div>
      <Separator orientation="horizontal" />
      <div className="flex flex-row justify-between px-4 py-2">
        <div className="flex justify-start items-center py-2 gap-1">
          <ExpandAll table={table} />
          <LookUpFilter />
        </div>
        <div className="flex justify-end items-center py-2 gap-1">
          <Button variant="outline">
            <ParameterizedIcon name="CalendarCog" />
            날짜 변경
          </Button>
          <Button variant="outline">
            <ParameterizedIcon name="UserRoundPen" />
            담당자 변경
          </Button>
          <Button variant="outline">
            <ParameterizedIcon name="SquareCheck" />
            단계지정 변경
          </Button>
          <Button
            variant="bordered"
            className="text-status-destructive border-status-destructive disabled:text-status-destructive-disabled disabled:border-status-destructive-disabled"
          >
            <ParameterizedIcon name="Trash2" />
            삭제
          </Button>
        </div>
      </div>
      <div className="flex flex-row justify-start px-4 pb-2 gap-1">
        <AppliedSubprojectBadges allText="서브프로젝트 전체" />
        {/* {searchText.length > 0 && (
          <BadgeForFilter
          >
            {`${searchText} X`}
          </BadgeForFilter>
        )} */}
      </div>
      <div className="flex flex-row justify-start px-4 pb-2">
        <p className="text-xs font-medium">
          전체
          {/* <span className="text-[--violet-10]">{table.getRowCount()}</span> */}
        </p>
      </div>
    </div>
  )
}

export default TopToolbar
