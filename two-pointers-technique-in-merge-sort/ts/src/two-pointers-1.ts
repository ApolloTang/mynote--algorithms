export default function twoPointers(lefts: number[], rights: number[]): void {
  const size_left = lefts.length, size_right = rights.length
  let i = 0, j = 0 // pointer for left is 'i', right is 'j'

  var combined = []

  console.log('size:', size_left, size_right)

  /*
   * two fingers algorithm from:
   * https://gist.github.com/sjohnsonaz/29e92e5ccbb8513a31609930b46d5faf
   */
  while (i < size_left || j < size_right) {

     let left = lefts[i], right = rights[j]
     console.log(left, right)

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

  } // end while-loop

  const remain_left = lefts.slice(i)
  const remain_right = rights.slice(j)

  console.log('after while loop')
  console.log('(i,j): ', i,j)
  console.log('combined: ', combined )
  console.log('remains: ', remain_left, remain_right )
}


