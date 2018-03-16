### O(1) Constant Time
- it only takes a single step for the algorithm to accomplish the task.
- value look ups when you know key or index

### O(log n) Logarithmic Time
- The number of steps it takes to accomplish a task are decreased by some factor with each step.
- ie. know which side of the array to look on for an item, cut in half to save time

### O(n) Linear Time
- the number of of steps required are directly related (1 to 1).
- single for loops are almost always linear time
- array methods like indexOf are linear

### O(n^2) Quadratic Time
- the number of steps it takes to accomplish a task is square of n.
- nested for loops are quadratic time, n for outter, n for inner -> (n)(n) -> n^2

### O(C^n) Exponential Time
- number of steps it takes to accomplish task is constant to the n power (v large)
- dont know much and have to try all permutations
