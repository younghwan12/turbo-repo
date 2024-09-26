/**
 * 숫자를 통화 형식의 문자열로 변환합니다.
 * @param {number} amount - 변환할 금액
 * @param {string} [currency='USD'] - 통화 코드
 * @returns {string} 통화 형식의 문자열
 */
export const formatCurrency = (
  amount: number,
  currency: string = 'USD',
): string => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(
    amount,
  )
}
