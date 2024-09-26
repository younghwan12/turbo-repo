/**
 * 주어진 Date 객체가 유효한 날짜인지 확인합니다.
 * @param {Date} date - 검사할 Date 객체
 * @returns {boolean} 유효한 날짜이면 true, 그렇지 않으면 false
 */
export const isValid = (date: Date): boolean => {
  return !isNaN(date.getTime())
}
