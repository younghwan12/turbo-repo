'use client'

import { scheduleSelectors } from '@pims-frontend/biz/lib/features/schedule/scheduleSlice'
import { useAppSelector } from '@pims-frontend/biz/lib/hooks'
import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import {
  type MRT_RowData,
  type MRT_TableInstance,
} from '@pims-frontend/ui/components/base/shadcn/material-react-table'
import { ParameterizedIcon } from '@pims-frontend/ui/components/base/shadcn/parameterized-icon'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@pims-frontend/ui/components/base/shadcn/tooltip'

export type BottomToolbarProps<TData extends MRT_RowData> = {
  table: MRT_TableInstance<TData>
}

const BottomToolbar = <TData extends MRT_RowData>({
  table,
}: BottomToolbarProps<TData>) => {
  return (
    <div className="flex flex-row justify-start gap-2.5 px-4 py-2">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon">
            <ParameterizedIcon name="ListVideo" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>아래 행 추가</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon">
            <ParameterizedIcon name="WrapText" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>아래로 이동</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon">
            <ParameterizedIcon name="WrapText" className="rotate-180" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>위로 이동</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon">
            <ParameterizedIcon name="ArrowLeftFromLine" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>상위로 변경</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon">
            <ParameterizedIcon name="ArrowRightFromLine" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>하위로 변경</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              table.toggleAllRowsExpanded(true)
            }}
          >
            <ParameterizedIcon name="PanelTopOpen" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>트리 전체 펼치기</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              table.toggleAllRowsExpanded(false)
            }}
          >
            <ParameterizedIcon name="PanelBottomOpen" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>트리 전체 접기</p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}

export default BottomToolbar
