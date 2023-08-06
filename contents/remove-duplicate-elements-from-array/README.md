 [How to remove duplicate elements from JavaScript Array ? - GeeksforGeeks](https://www.geeksforgeeks.org/how-to-remove-duplicate-elements-from-javascript-array/) 



### using filter to remove duplicate element

```js
let arr = ["apple", "mango", "apple",
          "orange", "mango", "mango"];
  
function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));
```

This method works because `indexOf` returns the index of the first duplicate element. If it is not the first duplicate, then the predicate will be false, and the item is filtered out.

