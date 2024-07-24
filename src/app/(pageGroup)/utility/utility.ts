/**
 * @function sortNumbersAscending
 * @param array 데이타 배열
 * @param sortId Id값 srot
 * @returns 정렬한 값 오름차순 리턴
 */
export function sortNumbersAscending(array: Array<any>, sortId: string) {
  return array.slice().sort((a, b) => a[sortId] - b[sortId]);
}

/**
 * @function sortNumbersDescending
 * @param array 데이타 배열
 * @param sortId Id값 srot
 * @returns 정렬한 값 내림차순 리턴
 */
export function sortNumbersDescending(array: Array<any>, sortId: string) {
  return array.slice().sort((a, b) => b[sortId] - a[sortId]);
}

/**
 * @function sortStringAscending
 * @param array 데이타 배열
 * @param sortId Id값 srot
 * @returns 정렬한 값 오름차순 리턴
 */
export function sortStringAscending(array: Array<any>, sortId: string) {
  return array.slice().sort((a, b) => {
    if (a[sortId] > b[sortId]) return -1;
    if (a[sortId] < b[sortId]) return 1;
    return 0;
  });
}

/**
 * @function sortStringAscending
 * @param array 데이타 배열
 * @param sortId Id값 srot
 * @returns 정렬한 값 오름차순 리턴
 */
export function sortStringDescending(array: Array<any>, sortId: string) {
  return array.slice().sort((a, b) => {
    if (a[sortId] < b[sortId]) return -1;
    if (a[sortId] > b[sortId]) return 1;
    return 0;
  });
}
