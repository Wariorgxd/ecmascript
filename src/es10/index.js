let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(2));

let array1 = [1, 2, 3, 4, 5];
console.log(array1.flatMap(value => [value, value * 2]));

//Eliminar los espacios en blanco al inicio de un string
let hello = "       hello World  ";
console.log(hello);
console.log(hello.trimStart());

//Eliminar los espacios en blanco al final de un string
let hello2 = "hello world        ";
console.log(hello2);
console.log(hello2.trimEnd());

//Opcional catch find
// try {

// } catch  {
//     error
// }

//clave valor para convertir arreglos a un objeto
let entries = [["name", "oscar"], ["age", 30]];

console.log(Object.fromEntries(entries))

//objeto de tipo simbolo

let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);
