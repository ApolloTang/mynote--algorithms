## Factorial

```
1! = 1
0! = 1
n! = n * (n-1)!
```



## Without recursor:

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
2,3,4,5,6,...,n
```

During each iteration the number store in `i` is multiple with the result from the previous iterations:

```
( result from previous iteration )* n-3 * n-2 * n-1 * n
```

To wit:

```
( 2 )*3*4*5*6*...*n
( 2*3 )*4*5*6*...*n
..
..
( 2*3*4*5*6*... )*n
( 2*3*4*5*6*...*n )
```

The loop started from 2 becuase `0!` and `1!` are both 1.



The above algorithm has space complexity of O(1). It is better spacewise when compare to that using recussion algorithm.



 