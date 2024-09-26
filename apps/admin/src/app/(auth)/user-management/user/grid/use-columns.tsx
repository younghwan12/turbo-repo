'use client'

import UserAuthorityFromCodeCombobox from '@pims-frontend/apis/lib/features/common/code/user-authority-from-code-combobox'
import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import {
  type MRT_ColumnDef,
  type MRT_Row,
  type MRT_RowData,
} from '@pims-frontend/ui/components/base/shadcn/material-react-table'
import { ParameterizedIcon } from '@pims-frontend/ui/components/base/shadcn/parameterized-icon'
import { type ComboboxProps } from '@pims-frontend/ui/components/base/shadcn/select'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@pims-frontend/ui/components/base/shadcn/tooltip'
import React, { useMemo } from 'react'

type UseColumnsProps<RowData extends MRT_RowData> = {
  onOpenChange?: (row: MRT_Row<RowData>) => ComboboxProps['onOpenChange']
  onValueChange?: (row: MRT_Row<RowData>) => ComboboxProps['onValueChange']
  onClickResetPassword?: (
    row: MRT_Row<RowData>,
  ) => React.MouseEventHandler<HTMLButtonElement>
}

export function useColumns<RowData extends MRT_RowData>({
  onOpenChange,
  onValueChange,
  onClickResetPassword,
}: UseColumnsProps<RowData>) {
  const columns = useMemo<MRT_ColumnDef<RowData>[]>(
    () => [
      {
        accessorKey: 'userId',
        header: '사번',
      },
      {
        accessorKey: 'userName',
        header: '사용자명',
      },
      {
        accessorKey: 'companyName',
        header: '소속',
      },
      {
        accessorFn: user => {
          if (user.projects.length > 1) {
            return `${user.projects?.[0]?.projectName} 외 ${user.projects.length - 1}개`
          }

          if (user.projects.length === 1) {
            return user.projects[0]?.projectName
          }

          return '프로젝트 미투입'
        },
        header: '프로젝트 투입 정보',
        Cell(props) {
          return (
            <Tooltip delayDuration={0}>
              <TooltipTrigger>{props.renderedCellValue}</TooltipTrigger>
              {props.row.original.projects.length > 1 && (
                <TooltipContent>
                  <p>
                    {props.row.original.projects
                      .map((v: { projectName: string }) => v.projectName)
                      .join(', ')}
                  </p>
                </TooltipContent>
              )}
            </Tooltip>
          )
        },
      },
      {
        accessorKey: 'authorityCode',
        header: '시스템 권한',
        Cell(props) {
          return (
            <UserAuthorityFromCodeCombobox
              value={props.cell.getValue<string>()}
              onOpenChange={onOpenChange?.(props.row)}
              onValueChange={onValueChange?.(props.row)}
            />
          )
        },
        muiTableBodyCellProps: {
          sx: {
            paddingY: 0,
            border: '1px solid hsl(var(--border))',
          },
        },
      },
      {
        header: '사용자 기능',
        accessorKey: 'resetPassword',
        muiTableBodyCellProps: {
          onClick: e => {
            e.stopPropagation()
          },
        },
        Cell({ row }) {
          return (
            <Button
              variant={'outline'}
              size={'xs'}
              className="py-2"
              onClick={e => {
                e.stopPropagation()
                onClickResetPassword?.(row)(e)
              }}
            >
              <ParameterizedIcon name="RefreshCw" className="mr-2 h-4 w-4" />
              비밀번호 초기화
            </Button>
          )
        },
      },
    ],
    [onClickResetPassword, onOpenChange, onValueChange],
  )

  return [columns] as const
}
