/**
 * 주어진 키를 기준으로 배열에서 중복된 요소를 제거합니다.
 * @template T
 * @param {T[]} arr - 중복 제거할 배열
 * @param {keyof T} key - 중복 판단 기준이 되는 키
 * @returns {T[]} 중복이 제거된 새 배열
 */
export const uniqueBy = <T>(arr: T[], key: keyof T): T[] => {
  const seen = new Set()
  return arr.filter(item => {
    const k = item[key]
    return seen.has(k) ? false : seen.add(k)
  })
}
