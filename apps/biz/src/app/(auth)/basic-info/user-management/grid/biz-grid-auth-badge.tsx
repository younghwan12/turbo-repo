'use client'

import {
  Badge,
  type BadgeProps,
} from '@pims-frontend/ui/components/base/shadcn/badge'
import { cn } from '@pims-frontend/ui/lib/utils'

export type BizUserGridAuthBadgeColors = 'teal' | 'lime' | 'white'

export type BizUserGridAuthBadgeProps = {
  color: BizUserGridAuthBadgeColors
}

export const BizUserGridAuthBadge = (
  props: React.PropsWithChildren<BizUserGridAuthBadgeProps & BadgeProps>,
) => {
  return (
    <Badge
      variant={'outline'}
      className={cn('text-text-normal', {
        'bg-[--teal-5]': props.color === 'teal',
        'bg-[--lime-5]': props.color === 'lime',
        'bg-white border border-border dark:text-black':
          props.color === 'white',
      })}
    >
      {props.children}
    </Badge>
  )
}
