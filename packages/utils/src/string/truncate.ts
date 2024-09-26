/**
 * 문자열을 지정된 길이로 자르고 끝에 생략 부호를 추가합니다.
 * @param {string} str - 자를 문자열
 * @param {number} length - 최대 길이
 * @param {string} [end='...'] - 생략 부호
 * @returns {string} 잘린 문자열
 */
export const truncate = (
  str: string,
  length: number,
  end: string = '...',
): string => {
  return str.length > length ? str.slice(0, length - end.length) + end : str
}
