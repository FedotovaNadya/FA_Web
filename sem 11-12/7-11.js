//7.Создайте массив d1 с числовыми величинами 45,78,10,3,9. 
//Добавьте в массив d1 еще одно число ( d1[7] = 100). 
//Выведите в консоль весь массив и его элементы с индексами 6 и 7.
console.log("Task7")
let d1 = [45, 78, 10, 3]
d1[7] = 100

console.log(d1)
console.log(d1[6],d1[7])

//8.Создайте массив d2 с числовыми величинами 45,78,10,3. 
//Посчитайте в переменную sum2 сумму чисел в нем, при помощи цикла for .
console.log("Task8")
let d2 = [45, 78, 10, 3]
let sum2 = 0
for(let el in d2) {
    sum2 += d2[el]
} 
console.log(d2)
console.log(sum2)

//9.Создайте массив d3 с числовыми величинами 45,78,10,3. 
//Добавьте в массив d3 еще одно число (например, d[7] = 100) 
//Посчитайте в переменную sum3 сумму чисел в нем, при помощи цикла for/in.
console.log("Task9")
let d3 = [45, 78, 10, 3]
d3[7] = 100
let sum3 = 0
for(let el in d3) {
    sum3 += d3[el]
} 
console.log(d3)
console.log(sum3)

//10.Создайте массив d4 с числовыми величинами 45,78,10,3. 
//Напишите функцию сортировки my(a,b), которая при вызове d4.sort(my) отсортирует элементы массива 
//по убыванию чисел. Вызовите d4.sort(my)
console.log("Task10")
let d4 = [45, 78, 10, 3]
function my(a, b) {
    if (a > b) {
return -1;;
} else if (b > a) {
return 1;;
} else {
return 0;
}
}
console.log(d4)
console.log(d4.sort(my))


//11) (*) Создайте двумерный массив d5 размером n=3 элементов в каждом из которых будет m=4 элементов из целых чисел (в каждый элемент поместить цифру 5). Примечание: при создании двумерного массива используйте циклы. Во внешнем цикле должна появиться конструкция d5[i] = [];
console.log("Task11")

let d5 = [] 
n=3
m=4

for (let i = 0; i < n; i++) {
    d5[i]=[];
    for (let j = 0; j < m; j++) {
        d5[i][j] = Math.round(Math.random()*100);
        
    }
    
}
console.log(d5)