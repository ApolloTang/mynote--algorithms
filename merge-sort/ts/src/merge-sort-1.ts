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


// from https://gist.github.com/sjohnsonaz/29e92e5ccbb8513a31609930b46d5faf
function combine(lefts: number[], rights: number[]): number[] {
  const size_left = lefts.length, size_right = rights.length
  let i = 0, j = 0 // pointer for left is 'i', right is 'j'

  var combined = []

  // 2 fingers algorithm
  while (i < size_left || j < size_right) {
    let left = lefts[i], right = rights[j]

    if (left !== undefined) {
      if (right === undefined) {
        combined.push(left); i++
      } else {
        if (left <= right) {
          combined.push(left); i++
        } else {
          combined.push(right); j++
        }
      }
    } else {
      if (right !== undefined) {
        combined.push(right); j++
      }
    }
  }
  return combined
}


// Note [1]
// For an array of odd length left array has one more element
// than the right array, which mean:
// items(mid) is first elmeent of right
// items(mid-1) is last element of lefts

