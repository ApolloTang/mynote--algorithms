# Two Sum

https://leetcode.com/problems/two-sum/

https://www.nileshblog.tech/2022/08/leet-code-two-sum-problem-solution-java-cpp-javascript-python/





```js
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

```

```
9 0 {}
2 1 { '9': 0 }
3 2 { '2': 1, '9': 0 }
-1 3 { '2': 1, '3': 2, '9': 0 }
9 4 { '2': 1, '3': 2, '9': 0, '-1': 3 }
11 5 { '2': 1, '3': 2, '9': 4, '-1': 3 }
[ 2, 6 ] 9
```

## Explaination

Whenever we visited an element in the input, we save the element as the key of the hashmap. This saved element become the  complement of the element we going to search in the next iteration.   

In the next interation, If this complement exist (as a key in the hashtable), we simply read the value of the hashtable (which is the index of element in the input array complement the current index `i`). 
