//Operador de reposo
//Extrae las propiedades de un objeto que aun no se a construido
//Extrae lo necesario de un objeto creando un array

const obj = {
  name: "Sebastian",
  age: 32,
  country: "Argentina",
};

let { name, ...all } = obj;
console.log(name, all);

//Utilizando las operaciones de propagación, podremos unir elementos de objetos a un nuevo objeto
const obj1 = {
  name: "Sebastian",
  age: 31,
};
const obj2 = {
  ...obj1,
  country: "Argentina",
};
console.log(obj2);

//Promise.finally
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 5000)
      : reject(new Error("Test error"));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finally"));

//Agrupar bloques de regex
const regexData = /([0-9]{4}) - ([0-9]{2}) - ([0-9]{2})/;
const match = regexData.exec("2018-04-20");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
