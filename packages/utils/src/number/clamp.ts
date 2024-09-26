/**
 * 숫자를 지정된 범위 내로 제한합니다.
 * @param {number} num - 제한할 숫자
 * @param {number} min - 최소값
 * @param {number} max - 최대값
 * @returns {number} 범위 내로 제한된 숫자
 */
export const clamp = (num: number, min: number, max: number): number => {
  return Math.min(Math.max(num, min), max)
}
