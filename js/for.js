// ciklai: kartojimui

const sayBye = "ate";
const sayHi = "labas";
const count = 6;

console.log("pries cikla");

// kitamasis i gali buti keiciamas
for (let i = 0; i < 3; i++) {
  console.log("sayBye");
  console.log("sayHi");
}

console.log("po ciklo");

//i ispreintina interacijos reiksme
for (let i = 0; i < 3; i++) {
  console.log("sayBye");
  console.log(" i sayHi");
}

console.log("po antro ciklo");

const nuo = 0;
const iki = 4;

let suma = 0;

for (let i = nuo; i <= iki; i++) {
  suma = suma + i;
}
console.log("suma:", suma);

const rez = `Suma nuo ${nuo} iki ${iki} yra ${suma}`;
console.log(rez);
