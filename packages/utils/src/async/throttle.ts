/**
 * 함수 호출 빈도를 제한하여 일정 시간 간격으로만 실행되도록 합니다.
 * @template F
 * @param {F} func - 쓰로틀할 함수
 * @param {number} limit - 최소 호출 간격 (밀리초)
 * @returns {(...args: Parameters<F>) => void} 쓰로틀된 함수
 */
// eslint-disable-next-line no-unused-vars
export const throttle = <F extends (...args: never[]) => never>(
  func: F,
  limit: number,
): ((...args: Parameters<F>) => void) => {
  let inThrottle: boolean = false

  return (...args: Parameters<F>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}
