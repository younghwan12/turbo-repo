/**
 * 문자열이 유효한 이메일 형식인지 검사합니다.
 * @param {string} email - 검사할 이메일 주소
 * @returns {boolean} 유효한 이메일이면 true, 그렇지 않으면 false
 */
export const isEmail = (email: string): boolean => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return re.test(email)
}
