## Factorial

```
1! = 1
0! = 1
n! = n * (n-1)!
```



## Factorial without recursion:

Ref:  Functional programming in Javascript Cristian Salcescu 2020 (chapter 7)

```js
function factorial(n) {
  let result = 1;

  let i = 2;
  while(i <= n){
    result = result * i;
    i = i + 1;
  }

  return result;
}
```

The while loop simply generate a series of number (store in `i` in each iteration):

```
2,3,4,...,n
```

During each iteration the number stored in `i` is multipled with the result from the previous iterations:

```
( result from previous iteration )* n-3 * n-2 * n-1 * n
```

To wit:

```
( 2 ) * 3 * 4 * ... * n-2 * n-1 * n
  ( 2*3 ) * 4 * ... * n-2 * n-1 * n
..
..
        ( 2*3*4*...*n-2 ) * n-1 * n
          ( 2*3*4*...*n-2*n-1 ) * n
             ( 2*3*4*...*n-2*n-1*n )
```

The loop started from 2 becuase `0!` and `1!` are both 1.

The time complexity of this algorithm is O(n) because the amount of time required is limit by the number of interation in the while loop.

The space complexity is O(1) because the number of varible is indenpendent of the size of  `n`.

 This algorithm is better than the recussive algorithm.  In recusion each time the function calls itself another functional scope is create to consume more memories (see below).



## Factorial with recursion:

```js
function factorial(n) {
  if (n === 0) {
    return 1; // terminator
  } else {
    return n * factorial(n - 1);
  }
}
```

The time complexity of a recursive function depends on the number of recursive calls. In this case, the function calls itself `n` times. Therefore, the time complexity is O(n).

The space complexity of a recursive function depends on the maximum depth of the recursion stack. In this case, the maximum depth is n, so the space complexity is O(n).

The abave can be written succinctly with ternary operator and arrow function:

```js
const factorial = n => (n === 0) ? 1 : n * factorial(n - 1);
```



## Recursion with tail call optimization:

#todo



