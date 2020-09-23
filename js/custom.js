("use strict");
// KINTAMŲJŲ INICIJAVIMAS
// 1-2. Skaitinių-textinių kintamųjų atvaizdavimas
const done = 1;
console.log(done);
const unfinished = 0;
console.log(unfinished);
const unknown = -1;
console.log(unknown);

const doneText = "true";
console.log(doneText);
const unfinishedText = "false";
console.log(unfinishedText);
const unknownText = "N";
console.log(unknownText);

// 3-4 skaitmeninių-tekstinių kintamųjų sąrašo sudarymas
const forestBirdsNum = [14, 30, 60, 40, 2];
console.log(forestBirdsNum);
const grassLandsBirdsNum = [13, 15, 6, 70, 3];
console.log(grassLandsBirdsNum);
const waterLandBirdsNum = [55, 30, 16, 4, 78];

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
const sum1 = forestBirdsNum.reduce(function (a, b) {
  return a + b;
}, 0);
console.log(sum1);

const sum2 = grassLandsBirdsNum.reduce(function (a, b) {
  return a + b;
}, 0);
console.log(sum2);

const sum3 = waterLandBirdsNum.reduce(function (a, b) {
  return a + b;
}, 0);
console.log(sum3);

// Sujungti visus tekstinius kintamuosius taip, jog tarp jų būtų sudarytas tarpas
// 1 variantas
console.log(
  "Ciconia nigra",
  " ",
  "Buteo buteo",
  " ",
  "Columba palumbus",
  " ",
  "Cuculus canorus",
  " ",
  "Otus scops"
);

//X UNFINISHED
math.sum(done, unfinish, unknown);
console(math.sum);
//X Sujungti visus teksto tipo kintamuosius su tarpais
// ?

//X Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
// 1-2+3-4+5

const sum11 = forestBirdsNum.reduce(function (a, b, c, d, e) {
  return a - b + c - d + e;
}, 0);
console.log(sum11);
