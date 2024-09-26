import React from 'react'

export type TopbarProps = NonNullable<unknown>

export const BizTopbar = (props: React.PropsWithChildren<TopbarProps>) => {
  return <header className="w-full p-4">{props.children}</header>
}
