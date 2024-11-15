function FindMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const mergedArray = [...nums1, ...nums2];
  mergedArray.sort((a, b) => a - b);
  const len = mergedArray.length;
  let median: number;
  if (len % 2 === 0) {
    const mid1 = mergedArray[len / 2 - 1];
    const mid2 = mergedArray[len / 2];
    median = (mid1 + mid2) / 2;
  } else {
    median = mergedArray[Math.floor(len / 2)];
  }
  return median;
}
