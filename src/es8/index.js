const data = {
  frontend: "Oscar",
  backend: "Sebastian",
  design: "Ana",
};

const enties = Object.entries(data);
console.log(enties);
console.log(enties.length);

//objects values, arreglo de strings ignorando las asignaciones
const data1 = {
  frontend: "Oscar",
  backend: "Sebastian",
  design: "Ana",
};

const values = Object.values(data1);
console.log(values);
console.log(values.length);

//Padding de strings
const string = "Hello";
console.log(string.padStart(7, "hi"));
console.log(string.padEnd(12, " -----"));
console.log("food".padEnd(12, " -----"));

//Trailing poner una coma sin que salga un error
const obj = {
  name: "Sebastian",
};

//Async/Await
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello world"), 3000)
      : reject(new Error("Test Error"));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

//Manejo de errores
const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};
