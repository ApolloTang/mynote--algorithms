export default function combine(lefts: number[], rights: number[]): void {
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

    if (lefts[i] < rights[j]) {
      combined.push(left); i++
    } else {
      combined.push(right); j++
    }

  } // end while-loop

  const remain_lefts = lefts.slice(i)
  const remain_rights = rights.slice(j)

  console.log('after while loop')
  console.log('(i,j): ', i,j)
  console.log('combined: ', combined )
  console.log('remains: ', remain_lefts, remain_rights )
}
