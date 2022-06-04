//replace all
const string = "HolaMundo en Js";
const replacedString = string.replace("Js", "JavaScript");
console.log(replacedString);

const replaceString2 = string.replaceAll("Js", "JavaScript");
console.log(replaceString2);

//métodos privados
class Message {
  #show(val) {
    console.log(val);
  }
  // get #add(val){
  //     return val + 1;
  // }
}

const menssage = new Message();
menssage.show("Hola Mundo"); //No retorna nada por que el método es privado

//Promise any
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3]).then((val) => console.log(val));

//
class AnyClass {
  constructor(element) {
    this.ref = new WeakRef(element);
  }
}

//Ayuda para trabajar con expresiones y elementos
let isTrue = true;
let isFalse = false;
console.log((isTrue &&= isFalse));

let isTrue1 = true;
let isFalse2 = false;
console.log((isTrue1 ||= isFalse2));

let isTrue2 = undefined;
let isFalse3 = undefined;
console.log((isTrue2 ??= isFalse3));

