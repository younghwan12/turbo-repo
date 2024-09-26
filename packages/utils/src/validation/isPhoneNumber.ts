/**
 * 문자열이 유효한 전화번호 형식인지 검사합니다.
 * @param {string} phone - 검사할 전화번호
 * @returns {boolean} 유효한 전화번호이면 true, 그렇지 않으면 false
 */
export const isPhoneNumber = (phone: string): boolean => {
  const re = /^\+?[\d\s-]{10,14}$/
  return re.test(phone)
}
