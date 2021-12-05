/*
Также напишите вспомогательную функцию prepend, которая получает элемент и создаёт новый список, где этот элемент добавлен спереди к первоначальному списку, и функцию nth, которая в качестве аргументов принимает список и число, а возвращает элемент на заданной позиции в списке, или же undefined в случае отсутствия такого элемента.
*/
function arrayToList(arr) {
    a=null
    for (let index = arr.length-1; index >= 0; index--) {
        a = {value: arr[index], rest: a}
    }
    return a
}

function listToArray(lst) {
    arr=[]
    arr.push(lst.value)
    while (lst.rest != null) {
        lst = lst.rest
        arr.push(lst.value)     
    }
    return arr
}

function prepend(elem, lst) {
    a={value: elem, rest: lst}
    return a
}

function nth(lst, num) {
    if (lst == null){
        return undefined
    }
    if (num == 0){
        return lst.value
    }
    else{
        return nth(lst.rest, num-1)
    }
}

l=[1,2,3]
la = arrayToList(l)
console.log(la)
a=listToArray(la)
console.log(a)
n=nth(la, 5)
console.log(n)
ln=prepend(7,la)
console.log(ln)





