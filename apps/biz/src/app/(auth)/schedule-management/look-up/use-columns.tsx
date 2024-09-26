import { type ScheduleState } from '@pims-frontend/biz/lib/features/schedule/scheduleSlice'
import {
  type MRT_ColumnDef,
  type MRT_RowData,
} from '@pims-frontend/ui/components/base/shadcn/material-react-table'
import { useMemo } from 'react'

export type UseColumnsProps = {
  mode: ScheduleState['lookUp']['mode']
}

export function useColumns<TData extends MRT_RowData>(props: UseColumnsProps) {
  const columns = useMemo<MRT_ColumnDef<TData>[]>(() => {
    if (props.mode === 'plan') {
      return [
        {
          accessorKey: 'wbsNo',
          header: 'WBS',
        },
        // 작업명
        {
          accessorKey: 'srtNo',
          header: '작업순서',
          Cell: () => {
            return <div>Y/N</div>
          },
        },
        {
          header: '산출물',
        },
        {
          header: '계획 기간',
          accessorFn: data => {
            return `${data.plnStaYmd} ~ ${data.plnEndYmd}`
          },
        },
        {
          header: '작업기간(일)',
          accessorKey: 'plnDurNum',
        },
        {
          header: '가중치(%)',
          accessorKey: 'plnWgtNum',
        },
        {
          header: '연계코드',
        },
        {
          header: '워크플로',
        },
        {
          header: '담당자',
          // NOTE: undefined 에러 막으려고 잠시 주석처리
          // accessorKey: 'assignUsers.usrUid',
        },
      ] satisfies MRT_ColumnDef<TData>[]
    }

    return [
      {
        accessorKey: 'wbsNo',
        header: 'WBS',
      },
      // 작업명
      {
        accessorKey: 'srtNo',
        header: '작업순서',
        Cell: () => {
          return <div>Y/N</div>
        },
      },
      {
        header: '산출물',
      },
      {
        header: '상태',
      },
      {
        header: '계획 기간',
        accessorFn: data => {
          return `${data.plnStaYmd} ~ ${data.plnEndYmd}`
        },
      },
      {
        header: '작업기간(일)',
        accessorKey: 'plnDurNum',
      },
      {
        header: '실제 시작일',
        accessorKey: 'ralStaYmd',
      },
      {
        header: '가중치(%)',
        accessorKey: 'plnWgtNum',
      },
      {
        header: '계획 진척률(%)',
      },
      {
        header: '실적 진척률(%)',
        accessorKey: 'recHwyRat',
      },
      {
        header: '담당자',
        // NOTE: undefined 에러 막으려고 잠시 주석처리
        // accessorKey: 'assignUsers.usrUid',
      },
      {
        header: '실제 종료일',
        accessorKey: 'ralEndYmd',
      },
    ] satisfies MRT_ColumnDef<TData>[]
  }, [props.mode])

  return columns
}
