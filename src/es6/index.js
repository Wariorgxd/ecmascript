function newFuction(name, age, country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'quito';
    console.log(name, age, country);
}

//ES6

function newFuction2(name = 'oscar', age = 32, country = "mx"){
    console.log(name, age, country);
}

newFuction2();
newFuction2("Ricardo", 23, "co");

//Template Literals
//Antes
let hello1 = "hello";
let world = "world";
let epicPhrase = hello1 + ' ' + world;
console.log(epicPhrase);
//Despues y mas intuitivo
let epicPhrase2 = `${hello1} ${world}`;
console.log(epicPhrase2);

let lorem = "Esta es mi frase para aplicar la nueva forma de dar saltos de linea en js\n" 
+ "Entonces asi se daba un salto de línea, osea multilineas";

//ES6
let lorem2 = `Entonces esta frase va a dar saltos de líneas con enter
es fascinante :D porque solo di un enter xd`;

console.log(lorem);
console.log(lorem2);

//Destructuring
let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'co'
};
console.log(person.name, person.age);

//ES6
let { name, age, country} = person;
console.log(name, age, country)

//Destructuring con arrays
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Camila', 'Michelle'];

let education = ['David', ...team1, ...team2];
console.log(education);

//let
var hola = 'Hola';

{
    var globalVar = 'Global';
}

{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

console.log(globalVar);

//const
const a = 'b';
// a = 'a';

//
let name1 = "Sebastian";
let age1 = 32;

//ES5
obj = {
    name: name1,
    age: age1
}
//ES6
obj2 = { name1, age1};
console.log(obj2);

//Arrow Functions
const names = [
    {name: "Sebastian", age: 32},
    {name: "Yesica", age: 27}
]

let listOfNames = names.map( function(items){
    console.log(items.name);
});

let anotherListOfNames = names.map(item => console.log(item.name));

const anotherAnotherListOfNames = (name, age, country) => {
    console.log(name, age, country);
}

const square = num => num * num;

//Promises algo va a pasar
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve("Hey, it worked");
        }else{
            reject("It didn't work");
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log("Hello"))
    .catch(error => console.log(error));

//Clases
class calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sumar(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sumar(2, 2));

//Modulos
// import { hello } from "../module.js";
// console.log(hello());

//generators 
function* helloWorld(){
    if(true){
        yield "hello, ";
    }
    if(true){
        yield "World";
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);