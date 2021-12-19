// 1.Создайте объект city1 (var city1 = {}), укажите у него свойства name (название города, строка) со значением «ГородN» 
//и population (населенность города, число) со значением 10 млн.

var city1 = {};
city1.name = "ГородN";
city1.population = 10000000;


//2.Создайте объект city2 через нотацию {name: "ГородM", population: 1e6}
var city2 = {
    name: "ГородM",
    population: 1e6
};

//3.Создайте у объектов city1 и city2 методы getName(), которые вернут соответствующие названия городов
function getName() { return this.name; }
city1.getName = getName;
city2.getName = getName;

//4.Создайте методы exportStr() у каждого из объектов. 
//Этот метод должен возвращать информацию о городе в формате «name=ГородN\npopulation=10000000\n». 
//Для второго города будет строка со своими значениями. 
//Примечание: можно обращаться к каждому свойству через цикл for/in, но методы объекта возвращать не нужно
function exportStr() { return `name=${this.name}\npopulation=${this.population}\n`; }
city1.exportStr = exportStr;
city2.exportStr = exportStr;

//5.Создайте глобальную функцию getObj(), которая возвращает this. 
//А у каждого из объектов city1 или city2 метод getCity, который ссылается на getObj. 
//Проверьте работу метода. Примечание: к объекту вызова можно обратиться через this.
function getObj() { return this; }
city1.getCity = getObj;
city2.getCity = getObj;

//Проверка
console.log(city1.exportStr());
console.log(city2.exportStr());

console.log(city1.getCity().getName());
console.log(city2.getCity().getName());

