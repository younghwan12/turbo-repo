/**
 * 문자열의 첫 글자를 대문자로 변환합니다.
 * @param {string} str - 변환할 문자열
 * @returns {string} 첫 글자가 대문자로 변환된 문자열
 */
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
