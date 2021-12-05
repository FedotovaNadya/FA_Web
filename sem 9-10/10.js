arr = [[1, 2, 3], [3, 2, 1]]
console.log(arr)
reducer = (previousValue, currentValue) => previousValue.concat(currentValue);

a=arr.reduce(reducer)
console.log(a)
