import { cn } from '@pims-frontend/ui/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = ({ className, variant, ...props }: BadgeProps) => {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export type BadgeStatusProps = React.HTMLAttributes<HTMLDivElement> & {
  badgestatus?: 'green' | 'yellow' | 'purple' | 'red'
  size: 'lg' | 'md' | 'sm'
  children: React.ReactNode
  background: 'default' | 'blue' | 'violet' | 'amber' | 'gray'
}

const statusColors = {
  green: 'bg-[#46A758]',
  yellow: 'bg-[#FFC53D]',
  purple: 'bg-[#6E56CF]',
  red: 'bg-[#E54666]',
}

const backgroundTheme = {
  default: 'border-[#DAD9D6]',
  blue: 'bg-accent-blue border-[rgba(226, 232, 240, 0.00)] text-[#113264]',
  violet: 'bg-accent-violet text-[#2F265F]',
  amber: 'bg-accent-amber border-[rgba(226, 232, 240, 0.00)] text-[#4F3422]',
  gray: 'bg-accent-gray',
  orange: 'bg-accent-orange',
}

const BadgeStatus = ({
  badgestatus,
  size,
  background,
  children,
  className,
}: BadgeStatusProps) => {
  return (
    <div
      className={cn(
        'inline-flex justify-center items-center rounded-lg border bg-card text-card-foreground gap-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 min-w-8 min-h-8',
        size === 'lg' && 'px-2 py-1.5',
        size === 'md' && 'px-2 py-1',
        size === 'sm' && 'px-2 py-1.5',
        backgroundTheme[background],
        className,
      )}
    >
      {badgestatus && (
        <span
          className={cn('h-1.5 w-1.5 rounded-full', statusColors[badgestatus])}
        />
      )}
      {children}
    </div>
  )
}

const BadgeForFilter = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        'border-transparent bg-[#E1D9FF] text-[#2F265F] cursor-pointer',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

// eslint-disable-next-line react/display-name
const BadgeWithDot = React.forwardRef<
  HTMLDivElement,
  {
    dotColor: string
    label: string
    onClick?: React.MouseEventHandler<HTMLDivElement>
  }
>(({ dotColor, label, onClick }, ref) => (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events
  <div
    ref={ref}
    className="bg-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    onClick={onClick}
  >
    <div className="flex flex-row items-center gap-2 border rounded-md px-2 py-1.5 w-fit">
      <div
        className={cn('w-1.5 h-1.5 rounded-full', {
          'bg-status-positive': dotColor === 'positive',
          'bg-status-destructive': dotColor === 'destructive',
          'bg-status-cautionary': dotColor === 'cautionary',
          'bg-primary-normal': dotColor === 'primary-normal',
        })}
      />
      <span className="text-sm font-medium leading-none">{label}</span>
    </div>
  </div>
))

export type UserGridAuthBadgeColors = 'teal' | 'lime' | string

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

export {
  Badge,
  BadgeForFilter,
  BadgeStatus,
  badgeVariants,
  BadgeWithDot,
  UserGridAuthBadge,
}
