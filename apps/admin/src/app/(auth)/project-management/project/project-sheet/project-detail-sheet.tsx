'use client'

import { useLazyGetProjectQuery } from '@pims-frontend/apis/lib/features/common/project/controller/ProjectController'
import { type ProjectResDto } from '@pims-frontend/apis/lib/features/common/project/dto/response/ProjectResDto'
import { BadgeStatus } from '@pims-frontend/ui/components/base/shadcn/badge'
import { Button } from '@pims-frontend/ui/components/base/shadcn/button'
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  useMaterialReactTable,
} from '@pims-frontend/ui/components/base/shadcn/material-react-table'
import { ParameterizedIcon } from '@pims-frontend/ui/components/base/shadcn/parameterized-icon'
import { Separator } from '@pims-frontend/ui/components/base/shadcn/separator'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@pims-frontend/ui/components/base/shadcn/sheet'
import React, { useEffect, useMemo, useRef } from 'react'
import { ProjectBaseInfoForm } from './project-base-info-form'

export type SheetState = {
  isOpen: boolean
  data: ProjectResDto | null
}

export type ProjectDetailSheetProps = {
  sheetState: [SheetState, React.Dispatch<React.SetStateAction<SheetState>>]
}

type DataType = {
  userId: string
  skYN: 'Y' | 'N' | '퇴사'
  userAuth: ('pmo' | 'subGroupPL' | 'Member')[]
}

const initialDatas = [
  {
    userId: 'username01(사번)',
    skYN: 'Y',
    userAuth: ['pmo', 'subGroupPL'],
  },
  {
    userId: 'username02',
    skYN: 'N',
    userAuth: ['Member'],
  },
  {
    userId: 'username03(사번)',
    skYN: '퇴사',
    userAuth: ['Member'],
  },
] satisfies DataType[]

const ProjectDetailSheet = (props: ProjectDetailSheetProps) => {
  const ref = useRef<HTMLFormElement>(null)
  const [sheet, setSheet] = props.sheetState

  const pjtUid = sheet.data?.pjtUid || -1
  const [getProject] = useLazyGetProjectQuery()

  useEffect(() => {
    if (pjtUid > -1) {
      getProject({ pjtUid }).unwrap()
    }
  }, [getProject, pjtUid])

  const columns = useMemo<MRT_ColumnDef<DataType>[]>(
    () => [
      {
        header: '일반사용자',
        accessorKey: 'userId',
        grow: 1,
      },
      {
        header: 'SK',
        accessorKey: 'skYN',
        size: 80,
        Cell(props) {
          const backgroundColors = {
            Y: 'blue',
            N: 'default',
            퇴사: 'gray',
            default: 'default',
          } as const
          type CellValue = keyof typeof backgroundColors
          const value = props.cell.getValue() as CellValue
          const background = backgroundColors[value] || backgroundColors.default
          return (
            <BadgeStatus size={'lg'} background={background}>
              {props.cell.getValue() as string}
            </BadgeStatus>
          )
        },
      },
      {
        header: '사용자 권한',
        accessorKey: 'userAuth',
        grow: 1,
        Cell(props) {
          const backgroundColors = {
            pmo: 'blue',
            subGroupPL: 'default',
            PL: 'violet',
            default: 'default',
          } as const
          type CellValue = keyof typeof backgroundColors
          const bg = props.cell.getValue() as CellValue
          const value = props.cell.getValue<DataType['userAuth']>()
          const background = backgroundColors[bg] || backgroundColors.default
          return (
            <div className="flex gap-1">
              {value.map((auth, i) => {
                return (
                  <BadgeStatus
                    key={props.cell.id + i}
                    size={'lg'}
                    background={background}
                  >
                    {auth}
                  </BadgeStatus>
                )
              })}
            </div>
          )
        },
      },
    ],
    [],
  )

  const table = useMaterialReactTable({
    data: initialDatas,
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

  if (pjtUid < 0) {
    return null
  }

  return (
    <Sheet
      open={sheet.isOpen}
      onOpenChange={open => {
        setSheet(prev => ({
          ...prev,
          isOpen: open,
        }))
      }}
    >
      <SheetContent className="p-0 flex flex-col min-w-[640px] h-screen gap-0">
        <SheetHeader className="flex-none w-full bg-background-plain">
          <SheetTitle className="p-6">프로젝트 정보</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-16 flex-grow py-10 overflow-y-auto bg-background-plain px-9">
          <div className="flex flex-col gap-4">
            <SheetDescription>정보</SheetDescription>
            <ProjectBaseInfoForm defaultValues={sheet.data} ref={ref} />
          </div>
          <div>
            <SheetDescription>투입 정보</SheetDescription>
            <div className="text-2xs px-3">
              <div className="text-sm text-muted-foreground">
                <div className="flex flex-col gap-2.5">
                  <div className="flex h-5 items-center space-x-4 text-sm">
                    <div>
                      전체 <span className="text-primary-normal">{50}</span>
                    </div>
                    <Separator orientation="vertical" />
                    <div>
                      SK <span className="text-primary-normal">{50}</span>
                    </div>
                    <Separator orientation="vertical" />
                    <div>
                      협력 <span className="text-primary-normal">{50}</span>
                    </div>
                  </div>
                  <MaterialReactTable table={table} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <SheetFooter className="p-3 flex-none bg-background-plain border-t border-t-border-normal">
          <Button
            className="bg-primary-normal"
            onClick={() => {
              ref.current?.requestSubmit()
              setSheet(prev => ({
                ...prev,
                isOpen: false,
              }))
            }}
          >
            확인
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default ProjectDetailSheet
