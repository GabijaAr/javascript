("use strict");
// KINTAMŲJŲ INICIJAVIMAS
// 1-2. Skaitinių-textinių kintamųjų atvaizdavimas
const one = 1;
console.log(one);
const two = 2;
console.log(two);
const three = 3;
console.log(three);

const textOne = "one";
console.log(textOne);
const textTwo = "two";
console.log(textTwo);
const textThree = "three";
console.log(textThree);

// 3-4 skaitmeninių-tekstinių kintamųjų sąrašo sudarymas ARRAY
const forestBirdsN = [14, 30, 60, 40, 2];
console.log(forestBirdsN);
const grassLandBirdsN = [13, 15, 6, 70, 3];
console.log(grassLandBirdsN);
const waterLandBirdsN = [55, 30, 16, 4, 78];

const forestBirds = [
  "Ciconia nigra",
  "Buteo buteo",
  "Columba palumbus",
  "Cuculus canorus",
  "Otus scops",
];
console.log(forestBirds);
const grassLandBirds = [
  "Perdix perdix",
  "Bonasa bonasia",
  "Tetrao tetrix",
  "Syrrhaptes paradoxus",
  "Upupa epops",
];
console.log(grassLandBirds);
const waterLandBirds = [
  "Phalacrocorax corbo",
  "Gavia stellata",
  "Branta bernicle",
  "Aix galericulata",
  "Aythya fuligula",
];
console.log(waterLandBirds);

// VEIKSMAI SU KINTAMAISIAIS
// Susumuoti visus skaičiaus tipo kintamuosius
console.log(one + two + three);
// Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
console.log(textOne + " " + textTwo + " " + textThree);
// Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
// 1-2+3-4+5
console.log(
  forestBirdsN[0] -
    forestBirdsN[1] +
    forestBirdsN[2] -
    forestBirdsN[3] +
    forestBirdsN[4]
);

console.log(
  grassLandBirdsN[0] -
    grassLandBirdsN[1] +
    grassLandBirdsN[2] -
    grassLandBirdsN[3] +
    grassLandBirdsN[4]
);

console.log(
  waterLandBirdsN[0] -
    waterLandBirdsN[1] +
    waterLandBirdsN[2] -
    waterLandBirdsN[3] +
    waterLandBirdsN[4]
);
//Tekstinių sąrašų verčių sujungimai nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas
console.log(
  forestBirds[4] +
    ", " +
    forestBirds[3] +
    ", " +
    forestBirds[2] +
    ", " +
    forestBirds[1] +
    ", " +
    forestBirds[0]
);

console.log(
  grassLandBirds[4] +
    ", " +
    grassLandBirds[3] +
    ", " +
    grassLandBirds[2] +
    ", " +
    grassLandBirds[1] +
    ", " +
    grassLandBirds[0]
);

console.log(
  waterLandBirds[4] +
    ", " +
    waterLandBirds[3] +
    ", " +
    waterLandBirds[2] +
    ", " +
    waterLandBirds[1] +
    ", " +
    waterLandBirds[0]
);

// KINTAMŲJŲ PALYGINIMAS
// Skaitinių kintamųjų tarpusavio palyginimas
if (one < two) {
  console.log("pomidoras");
} else {
  console.log("bandykite dar karta");
}

if (two > three) {
  console.log("pomidoras");
} else {
  console.log("bandykite dar karta");
}

if (one === three) {
  console.log("pomidoras");
} else {
  console.log("bandykite dar karta");
}

if (three !== two) {
  console.log("pomidoras");
} else {
  console.log("bandykite dar karta");
}

if (two >= one) {
  console.log("pomidoras");
} else {
  console.log("bandykite dar karta");
}

if (two <= one) {
  console.log("pomidoras");
} else {
  console.log("bandykite dar karta");
}

if (two <= one) {
  console.log("pomidoras");
} else {
  console.log("bandykite dar karta");
}

// butu galima ir su funkcijomis
// function name(params) { compare 1 2 consol log 1 3

// sarasu palyginimui
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
// }
// Išvesti teksto tipo kintamųjų ilgius
// console.log(forestBirds.length);

// Tarpusavyje palyginti teksto tipo kintamųjų ilgius

// CICLO FOR PANAUDOJIMAS
// Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
// 0 - 0; 0 - 4; 0 - 100; 574 - 815; -50 - 50; -70 - 30

const nuo = 0;
const iki = 4;
let suma = 0;

for (let i = nuo; i <= iki; i++) {
  suma += i;
}

const rez = `Suma nuo ${nuo} iki ${iki} yra ${suma}.`;

console.log(rez);


// panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
// “abcdef” -> “fedcba”

let changedString = " ";
for (let i = textOne.length; i > 0; i--) {
  changedString += textOne[i - 1];
}
console.log(changedString);

let changedStringT = " ";
for (let i = textTwo.length; i > 0; i--) {
  changedStringT += textTwo[i - 1];
}
console.log(changedStringT);

// +Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:

// kintamuosius paliekame tuscius nes jie neturi reiksmes, tai- konteineriukai
// % dalybos metu grąžina liekaną ir tada dalina kitą cikle esantį skaičių
// / dalina vieną kartą

// galima prideti kintamaji dalikli 3
let dalTrys = 0;
let dalPenki = 0;
let dalSeptyni = 0;

// 0-11
let start0 = 0;
let end11 = 11;

// for ciklo sukimasis i++ paiima sekanti skaiciu, 
for (let i = start0; i <= end11; i++) {
  if (i % 3 === 0) {
    dalTrys++;
  }
  if (i % 5 === 0) {
    dalPenki++;
  }
  if (i % 7 === 0) {
    dalSeptyni++;
  }
}

console.log(
  `Skaičių intervale tarp ${start0} ir ${end11}, besidalijančių be liekanos iš 3 yra ${dalTrys} vienetai.\n
  Skaičių intervale tarp ${start0} ir ${end11}, besidalijančių be liekanos iš 3 yra ${dalPenki} vienetai.\n
  Skaičių intervale tarp ${start0} ir ${end11}, besidalijančių be liekanos iš 3 yra ${dalSeptyni} vienetai.\n
  `
);

// 8 - 31;
let start8 = 8;
let end31 = 31;

for (let i = start8; i <= end31; i++) {
  if (i % 3 === 0) {
    dalTrys++;
  }
  if (i % 5 === 0) {
    dalPenki++;
  }
  if (i % 7 === 0) {
    dalSeptyni++;
  }
}

console.log(
  `Skaičių intervale tarp ${start8} ir ${end31}, besidalijančių be liekanos iš 3 yra ${dalTrys} vienetai.\n
  Skaičių intervale tarp ${start8} ir ${end31}, besidalijančių be liekanos iš 3 yra ${dalPenki} vienetai.\n
  Skaičių intervale tarp ${start8} ir ${end31}, besidalijančių be liekanos iš 3 yra ${dalSeptyni} vienetai.\n
  `
);

// -18 - 18;
let startM18 = -18;
let endM18 = -18;

function interval (nuo, iki, daliklis) {
for (let i = startM18; i <= endM18; i++) {
  if (i % 3 === 0) {
    dalTrys++;
  }
  if (i % 5 === 0) {
    dalPenki++;
  }
  if (i % 7 === 0) {
    dalSeptyni++;
  }
}
}

console.log(
  `Skaičių intervale tarp ${startM18} ir ${endM18}, besidalijančių be liekanos iš 3 yra ${dalTrys} vienetai.\n
  Skaičių intervale tarp ${startM18} ir ${endM18}, besidalijančių be liekanos iš 3 yra ${dalPenki} vienetai.\n
  Skaičių intervale tarp ${startM18} ir ${endM18}, besidalijančių be liekanos iš 3 yra ${dalSeptyni} vienetai.
  `
);
return rez;

// FUNKCIJOS
funcija-funkcijos vardas-funkcijos argumentas
function tusciaFunkcija(params) {
  
}