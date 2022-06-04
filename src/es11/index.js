//dinamic import
const button = document.getElementById("btn");

button.addEventListener("click", async () => {
  const module = await import("./file.js");
  module.hello();
});

//BigInt
const aBigNumber = 90073423472934n;
const anotherBigNumber = BigInt(90073423472934);

console.log(aBigNumber);
console.log(anotherBigNumber);

//Promise.allSettled()
const promise1 = new Promise((resolve, reject) => reject("Reject"));
const promise2 = new Promise((resolve, reject) => resolve("Resolve"));
const promise3 = new Promise((resolve, reject) => resolve("Resolve"));

Promise.allSettled([promise1, promise2, promise3]).then((response) =>
  console.log(response)
);

//globalThis
console.log(window);
console.log(globalThis);

//Operador de null Nullish coalescing
const fooo = null ?? "default String";
console.log(fooo);

//Optional Chaining
const user = {};

console.log(user?.profile?.email); //Regresa undefined

if (user?.profile?.email) {
  console.log("Email");
} else {
  console.log("fail");
}
