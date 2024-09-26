import { cn } from '@pims-frontend/ui/lib/utils'
import type { PropsWithChildren } from 'react'

export type TypographyProps = {
  className?: string
}

export const PageTitle = (props: PropsWithChildren<TypographyProps>) => {
  return (
    <h1 className={cn('text-2xl font-semibold', props.className)}>
      {props.children}
    </h1>
  )
}

export const PageDescription = (props: PropsWithChildren<TypographyProps>) => {
  return (
    <p className={cn('text-text-assistive-1 font-normal', props.className)}>
      {props.children}
    </p>
  )
}

/**
 * 모달이나 팝오버 등에서 상단 제목 말고 그 아래의 제목같은데서 쓰임
 * figma에서는 p-ui-medium이라고 되어있음
 * @name p-ui-medium
 * @param props
 * @returns
 */
export const ListTitle = (props: PropsWithChildren<TypographyProps>) => {
  return (
    <p
      className={cn('font-medium text-base text-text-normal', props.className)}
    >
      {props.children}
    </p>
  )
}

/**
 * ListTitle과 같은 위치에서 상세 설명을 넣을 때 사용
 * @name (없음)
 * @param props
 * @returns
 */
export const ListDescription = (props: PropsWithChildren<TypographyProps>) => {
  return (
    <p
      className={cn(
        'text-sm text-text-assistive-1 font-normal',
        props.className,
      )}
    >
      {props.children}
    </p>
  )
}

/**
 *
 * @name subtle
 * @param props
 * @returns
 */
export const SubtleText = (props: PropsWithChildren<TypographyProps>) => {
  return (
    <p className={cn('text-text-neutral font-normal', props.className)}>
      {props.children}
    </p>
  )
}

/**
 * @name Text-xs/Medium
 */
export const TextXsMedium = (props: PropsWithChildren<TypographyProps>) => {
  return (
    <span
      className={cn(
        'text-2xs text-text-assistive-1 font-medium',
        props.className,
      )}
    >
      {props.children}
    </span>
  )
}

/**
 * @name detail
 */
export const DetailText = (props: PropsWithChildren<TypographyProps>) => {
  return (
    <span
      className={cn('text-2xs text-text-neutral font-medium', props.className)}
    >
      {props.children}
    </span>
  )
}
