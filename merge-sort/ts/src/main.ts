import { strict as assert } from "node:assert";

import mergeSort from './merge-sort-1'
// import mergeSort from './merge-sort-2'

assert.deepEqual(
  mergeSort(
  [2, 5, 1, 3, 7, 4, 2, 3, 9, 8, 6, 3]
  ),
  [1, 2, 2, 3, 3, 3, 4, 5, 6, 7, 8, 9],
  'case a'
)
assert.deepEqual(mergeSort([]), [], 'case b')
assert.deepEqual(mergeSort([1]), [1], 'case c')
assert.deepEqual(mergeSort([2,1]), [1,2], 'case d')
assert.deepEqual(mergeSort([3,2,1]), [1,2,3], 'case e')
assert.deepEqual(mergeSort([4,3,2,1]), [1,2,3,4], 'case f')
