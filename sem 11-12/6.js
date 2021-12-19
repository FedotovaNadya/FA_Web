//6(*) Создать объект obj, с методами method1(),method2() и method3(). 
//В методе method3() должна возвращаться строка «метод3». 
//Сделайте так, чтобы было возможно выполнение 
//кода obj.method1().method2().method3().

function mehtod3() {
    return "метод3"
}

function mehtod2() {
    return this
}

function mehtod1() {
    return this
}

var obj = {}
obj.mehtod3 = mehtod3
obj.mehtod2 = mehtod2
obj.mehtod1 = mehtod1
console.log(obj.mehtod1().mehtod2().mehtod3())