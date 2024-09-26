'use client'

import { Calendar } from '@pims-frontend/ui/components/base/shadcn/calendar'
import useDate from './useData'

export function CalendarDemo() {
  const { date, setDate } = useDate()

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="border rounded-md"
    />
  )
}
