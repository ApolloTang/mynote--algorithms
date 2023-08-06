import { strict as assert } from "node:assert";

import permuteString from './permute-string'

const results = permuteString('abcd')
const resultsLength = results.length

console.log(results)

assert.equal(resultsLength, 24)


