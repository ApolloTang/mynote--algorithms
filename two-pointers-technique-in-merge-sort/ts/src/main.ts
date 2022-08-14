import { strict as assert } from "node:assert";

import twoPointers1 from './two-pointers-1'
import twoPointers2 from './two-pointers-2'

const l = [0,1,7]
const r = [4,5,8]
console.log(Date.now())
console.log(l, r)
twoPointers1(l, r)
twoPointers2(l, r)

