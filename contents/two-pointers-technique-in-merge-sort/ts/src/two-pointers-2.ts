export default function combine(lefts: number[], rights: number[]): void {
  console.log('----------- algorithm 2')

  const size_left = lefts.length, size_right = rights.length
  let i = 0, j = 0 // pointer for left is 'i', right is 'j'

  var combined = []

  console.log('size:', size_left, size_right)

  /*
   * Two fingers algorithm from:
   * https://stackblitz.com/edit/typescript-mergesort?file=index.ts
   */
  while (i < size_left && j < size_right) {

    let left = lefts[i], right = rights[j]
    console.log(left, right)

    if (left < right) {
      combined.push(left); i++
    } else {
      combined.push(right); j++
    }

  } // end while-loop
  console.log('--- while-loop done ---')

  const remain_lefts = lefts.slice(i)
  const remain_rights = rights.slice(j)
  const finalCombined = combined.concat(remain_lefts, remain_rights)

  console.log('(i,j): ', i,j)
  console.log('combined: ', combined )
  console.log('remains: ', remain_lefts, remain_rights )
  console.log('finalCombined: ', finalCombined )
}

