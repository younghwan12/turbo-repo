'use client'

import {
  Badge,
  type BadgeProps,
} from '@pims-frontend/ui/components/base/shadcn/badge'
import { cn } from '@pims-frontend/ui/lib/utils'

export type UserGridAuthBadgeColors = 'teal' | 'lime' | 'white'

export type UserGridAuthBadgeProps = {
  color: UserGridAuthBadgeColors
}

const UserGridAuthBadge = (
  props: React.PropsWithChildren<UserGridAuthBadgeProps & BadgeProps>,
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

export default UserGridAuthBadge
