/**
 * 날짜를 지정된 형식의 문자열로 변환합니다.
 * @param {Date} date - 변환할 날짜
 * @param {string} formatStr - 날짜 형식 문자열 (예: 'YYYY-MM-DD')
 * @returns {string} 형식화된 날짜 문자열
 */
export const format = (date: Date, formatStr: string): string => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return formatStr
    .replace('YYYY', String(year))
    .replace('MM', month)
    .replace('DD', day)
}
