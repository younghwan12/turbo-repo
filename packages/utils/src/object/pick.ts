/**
 * 객체에서 지정된 키에 해당하는 속성만을 선택합니다.
 * @template T, K
 * @param {T} obj - 원본 객체
 * @param {K[]} keys - 선택할 키 배열
 * @returns {Pick<T, K>} 선택된 속성으로 이루어진 새 객체
 */
export const pick = <T extends object, K extends keyof T>(
  obj: T,
  keys: K[],
): Pick<T, K> => {
  return keys.reduce(
    (result, key) => {
      if (key in obj) {
        result[key] = obj[key]
      }
      return result
    },
    {} as Partial<Pick<T, K>>,
  ) as Pick<T, K>
}
