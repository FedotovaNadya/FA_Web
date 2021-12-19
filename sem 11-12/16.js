class Human{
    //методы класса
    constructor(name, age, height){
        this.name = name;
        this.age = age;
        this.height = height;
    };
    getInfo = function () {
        return `${this.name}, ${this.age}, ${this.height} `
    }
    get firstname(){
        return this.name;
    }
}

humanis = [ new Human("Коля", 23, 180), 
new Human("Даша", 19, 170), 
new Human("Ваня", 18, 192), 
new Human("Петя", 45, 178), 
new Human("Вася", 34, 197), 
new Human("Джони", 40, 168), 
new Human("Катя", 37, 160), 
new Human("Петя", 29, 200), 
new Human("Соня", 21, 172), 
new Human("Женя", 25, 175), 
]

function sortByName(hum) {
    function SortArray(x, y){
        if (x.firstname < y.firstname) {return -1;}
        if (x.firstname> y.firstname) {return 1;}
        return 0;
    }
    return hum.sort(SortArray)
}

function sortByHeight(hum) {
    function SortArray(x, y){
        if (x.height > y.height) {return -1;}
        if (x.height < y.height) {return 1;}
        return 0;
    }
    return hum.sort(SortArray)
}

console.log(humanis[1].getInfo())
console.log(humanis[3].firstname)

sortByHeight(humanis)

console.log(humanis)