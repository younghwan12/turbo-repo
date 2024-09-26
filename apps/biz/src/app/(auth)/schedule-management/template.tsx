'use client'

import { type PropsWithChildren } from 'react'

import ScheduleManagementPageTabNav from './tab-nav'

const ScheduleManagementTemplate = (props: PropsWithChildren) => {
  return (
    <ScheduleManagementPageTabNav>
      {props.children}
    </ScheduleManagementPageTabNav>
  )
}
export default ScheduleManagementTemplate
