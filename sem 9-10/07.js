function reverseArray(array) {
    res=[]
    for (let index = array.length-1; index >= 0; index--) {
        res.push(array[index]);
    }
    return res
}

function reverseArrayInPlace(array) {
    for (let index = 0; index < array.length/2; index++) {
        tmp=array[index]
        array[index]=array[array.length-1-index]
        array[array.length-1-index] = tmp
    }
}

a=[ 5, 4, 3, 2 ]
n_a=reverseArray(a)
console.log(a)
console.log(n_a)
reverseArrayInPlace(a)
console.log(a)
