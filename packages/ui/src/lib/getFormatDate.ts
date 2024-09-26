import { format } from 'date-fns'
import { ko } from 'date-fns/locale'

// type format = 'option' | 'localize' | 'formatLong' | 'options';
type getFormatDateProps = {
  date: Date
  type: string
  local?: any
}
export function getFormatDate({ date, type, local = ko }: getFormatDateProps) {
  return format(date, type, { locale: local })
}
