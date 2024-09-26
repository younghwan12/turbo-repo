/**
 * 함수 호출을 지연시켜 마지막 호출 후 일정 시간이 지난 후에만 실행되도록 합니다.
 * @template F
 * @param {F} func - 디바운스할 함수
 * @param {number} wait - 대기 시간 (밀리초)
 * @returns {(...args: Parameters<F>) => void} 디바운스된 함수
 */
// eslint-disable-next-line no-unused-vars
export const debounce = <F extends (...args: never[]) => never>(
  func: F,
  wait: number,
): ((...args: Parameters<F>) => void) => {
  let timeout: ReturnType<typeof setTimeout> | null = null

  return (...args: Parameters<F>) => {
    if (timeout !== null) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => func(...args), wait)
  }
}
