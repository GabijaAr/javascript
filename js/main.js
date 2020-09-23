("use strict");
// BASICS

//skaičiavimas: 4 + 7 = 11
const pirmas = 4;
const antras = 7;

const suma = pirmas + antras;

console.log(pirmas);
console.log(antras);
console.log(suma);

//overid'inimas
//  let nuotaika = "gera";
//  console.log(nuotaika);

let nuotaika = "bloga";
console.log(nuotaika);

// basic
const hi = "labas";
const mor = "rytas";
console.log(hi, mor);
const sayhi = "labas rytas";
console.log(sayhi);
const sayheloo = "labas rytas";
console.log(sayheloo);

const name = "vardenis";
const surname = "pavardenis";
const fullName = name + " " + surname;
console.log("Hi, I am " + fullName);

const paz1 = 1;
const paz2 = 10;
const paz3 = 7;
const paz4 = 5;
const paz5 = 8;

// sarasas, arey, list, masyvas
const marks = [1, 10, 7, 5, 8];
const marksPaz = [paz1, paz2, paz3, paz4, paz5];
console.log(marks);
console.log(marksPaz);

const fruits = ["orange", "apple", "pineapple", "banana"];
console.log(fruits);

// Matematiniai skaičiavimai
let sum = 0;
let pazNum = -1;
sum += marks[++pazNum];
sum += marks[++pazNum];
sum += marks[++pazNum];
sum += marks[++pazNum];
sum += marks[++pazNum];
sum += marks[++pazNum];

const count = marks.length;
const average = sum / count;
console.log("Marks average:", sum, "/", count, "=", average);
// kreipiames i sarasa// ideksas lauztiniame
const sum = marks[0] + marks[1] + marks[3] + marks[4];
let sum = 0;
// 2 variantas
sum = sum + marks[0];
sum = sum + marks[1];
sum = sum + marks[2];
const count = marks.length;
const average = sum / count;

let numSum = 0;
let index = 0;
numSum = numSum + num[0];
console.log(numSum);

index = index++;
