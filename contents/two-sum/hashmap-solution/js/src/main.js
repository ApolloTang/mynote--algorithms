function twoSum(nums, target) {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
      const element = nums[i]
      const complement = target - element
      if (map[complement] !== undefined) {
        return [map[complement], i]
      } else {
        console.log(element, i, map)
        map[element] = i
      }
    }
    return []
  }

var input = [9,2,3,-1,9,11,6,15]
const result = twoSum(input, 9)
console.log(result, input[result[0]]+input[result[1]])

