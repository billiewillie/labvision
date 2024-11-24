export function setResultOutput(
  arr: Array<any>,
  amount: number
): Array<any> {
  return arr.slice(0, amount)
}