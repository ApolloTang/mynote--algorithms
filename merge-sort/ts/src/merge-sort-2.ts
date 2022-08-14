export default function MergeSort(items: number[]): number[] {
  return divide(items)
}


function divide(items: number[]): number[] {
  const mid = Math.ceil(items.length / 2) // Note [1]
  let lefts = items.slice(0, mid)
  let rights = items.slice(mid)

  if (mid > 1) { // <--- This condition keep the algorithm in recursion
    lefts = divide(lefts)
    rights = divide(rights)
  }

  // If the execution flow reach here, that means we nolonger
  // need to divide the items
  return combine(lefts, rights)
}


/**
 * Lefts and rights array has already being sorted.
 * See two pointer sorting for how the combine function work
 */
function combine(lefts: number[], rights: number[]): number[] {
  const size_left = lefts.length, size_right = rights.length
  let i = 0, j = 0 // pointer for left is 'i', right is 'j'

  var combined = []

  /*
   * Two fingers algorithm from:
   * https://stackblitz.com/edit/typescript-mergesort?file=index.ts
   */
  while (i < size_left && j < size_right) {
    let left = lefts[i], right = rights[j]

    if (lefts[i] < rights[j]) {
      combined.push(left); i++
    } else {
      combined.push(right); j++
    }
  } // end while-loop

  const remain_lefts = lefts.slice(i)
  const remain_rights = rights.slice(j)
  const finalCombined = combined.concat(remain_lefts, remain_rights)

  return finalCombined
}


// Note [1]
// For an array of odd length left array has one more element
// than the right array, which mean:
// items(mid) is first elmeent of right
// items(mid-1) is last element of lefts

