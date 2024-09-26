import { scheduleSelectors } from '@pims-frontend/biz/lib/features/schedule/scheduleSlice'
import { useAppSelector } from '@pims-frontend/biz/lib/hooks'
import { IconButtonProps } from '@pims-frontend/ui/components/base/@mui/material'
import {
  type MRT_RowData,
  type MRT_TableOptions,
} from '@pims-frontend/ui/components/base/shadcn/material-react-table'
import { ParameterizedIcon } from '@pims-frontend/ui/components/base/shadcn/parameterized-icon'
import { NonNullableFunction } from '@pims-frontend/ui/lib/utilityTypes'
import { PropsWithChildren } from 'react'

export type ExpandButtonPropsProps<TData extends MRT_RowData> = Parameters<
  NonNullableFunction<MRT_TableOptions<TData>['muiExpandButtonProps']>
>[0]

function ExpandButtonWithTaskName({
  taskName,
  children,
  className,
  ...rest
}: PropsWithChildren<{ taskName: string; className?: string }>) {
  return (
    <div
      {...rest}
      className={'flex flex-row items-center prose dark:prose-invert '}
    >
      {children}
      <span className="ml-4 prose dark:prose-invert font-normal text-sm">
        {taskName}
      </span>
    </div>
  )
}

const ExpandButton = <TData extends MRT_RowData>(
  props: ExpandButtonPropsProps<TData>,
): IconButtonProps => {
  const children = () => {
    if (props.row.getIsExpanded() && props.row.original.children.length > 0) {
      return (
        <ExpandButtonWithTaskName taskName={props.row.original['tskNm']}>
          <ParameterizedIcon name="ChevronDown" className="stroke-current" />
        </ExpandButtonWithTaskName>
      )
    }

    if (props.row.getCanExpand()) {
      return (
        <ExpandButtonWithTaskName taskName={props.row.original['tskNm']}>
          <ParameterizedIcon name="ChevronRight" className="stroke-current" />
        </ExpandButtonWithTaskName>
      )
    }

    return (
      <ExpandButtonWithTaskName taskName={props.row.original['tskNm']}>
        <div className="w-6 h-6" />
      </ExpandButtonWithTaskName>
    )
  }

  return {
    // component: ExpandButtonWithTaskName,
    disableRipple: true,
    children: children(),
    sx: {
      justifyContent: 'flex-start',
      opacity: 1,
      width: 'fit-content',
    },
  }
}

export default ExpandButton
