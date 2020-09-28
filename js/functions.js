function tusciaFunkcija() {
  return false;
}
console.log(tusciaFunkcija());

// 20 kartu loop
for (let i = 0; i < 20; i++) {
  console.log(tusciaFunkcija());
}
// 1 variantas
function daugyba(skaicius1, skaicius2) {
  console.log(skaicius1, skaicius2);
  return skaicius1 * skaicius2;
}
console.log(daugyba(2, 3));

// 2variantas
// const rezultatas = skaicius1 * skaicius2
// return rezultatas
// rasome funkcijos viduje

function interval() {}

// return grazina reiksme, console log rasomas po funkcijos ribomis
// ---------
// 4 uzdavinys-didziausias skaicius sarase

// function didziausiasSkaiciusSarase(arr) {
//   let tekstas = arr;
//   if (!Array.isArray) {
//     return "Pateikta netinkamo tipo reikšmė";
//   } else if (strings === " ") {
//     return "Pateiktas sąrašas negali būti tuščias";
//   } let didziausias = arr.reduce(function(a, b) {
//       return Math.max(a, b);
// if (i === 0) {
//   didziausias = strings[i];
// } else if (didžiausias < strings[i]) {
//   didziausias = strings[i];
// } else if ()
// return didziausias;}

// 4--------------------------------------------------
function didziausiasSkaiciusSarase(arr) {
  if (!Array.isArray) {
    return "Pateikta netinkamo tipo reikšmė.";
  } else if (arr.length === 0) {
    return "Pateiktas sąrašas negali būti tuščias.";
  }
  let didziausias;

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      didziausias = arr[i];
    } else if (didžiausias < arr[i]) {
      didziausias = arr[i];
    }
  }
  return didziausias;
}

console.log(didziausiasSkaiciusSarase([1]));
console.log(didziausiasSkaiciusSarase([1, 2, 3]));

function didziausiasSkaiciusSarase(arr) {
  if (!Array.isArray(arr)) {
    return "Pateikta netinkamo tipo reikšmė.";
  } else if (arr.length === 0) {
    return "Pateiktas sąrašas negali būti tuščias.";
  }

  let didziausias;

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      didziausias = arr[i];
    } else if (didziausias < arr[i]) {
      didziausias = arr[i];
    }
  }
  return didziausias;
}

console.log(didziausiasSkaiciusSarase([1]));
console.log(didziausiasSkaiciusSarase([1, 2, 3]));
console.log(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]));
console.log(didziausiasSkaiciusSarase([69, 69, 69, 69, 66]));
console.log(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8]));
console.log(didziausiasSkaiciusSarase("pomidoras"));
console.log(didziausiasSkaiciusSarase([]));

// 5
function isrinktiRaides(text, kelintinis) {
  if (typeof text !== "string") {
    return "Pirmasis kintamasis yra netinkamo tipo.";
  } else if (text === "" || text.length > 100) {
    return "Pirmojo kintamojo reikšmė yra netinkamo dydžio.";
  } else if (typeof kelintinis !== "number") {
    return "Antrasis kintamasis yra netinkamo tipo.";
  } else if (kelintinis < 0) {
    return "Antrasis kintamasis turi būti didesnis už nulį.";
  } else if (kelintinis > text.length) {
    return "Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.";
  }
  //   išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
  // sukuriame newtext i kuri pliusuosime padalytas raides
  // mums reikia text[i]
  //  i + 1 nes a yra 1 raide- pirmasis character ir pasirasome, kad pradesime skaiciuoti nuo josS
  let newtext = "";
  for (let i = 0; i < text.length; i++) {
    if ((i + 1) % kelintinis === 0) {
      newtext += text[i];
    }
  }
  return newtext;
}

console.log(isrinktiRaides("abcdefg", 2));
console.log(isrinktiRaides("abcdefghijkl", 3));
console.log(isrinktiRaides("abc", 0));
console.log(isrinktiRaides("abc", 4));
console.log(isrinktiRaides(1561, 2));

// 6
// 6
// turi buti tuscias kintamasis i kuri pliusuosime siu skaiciu dalybos reiksme (viskas tas pats, tik dabar bus numeriai)
function dalyba(numeris, kelintinisSk) {
  if (!Array.isArray(numeris) || numeris === "") {
    return "Prašome įrašyti numerį";
  } else if (numeris < 0 || numeris.length > 100) {
    return "Prašome įrašyti numerį sudarantį nuo 0 iki 1000 simbolių";
  } else if (kelintinisSk === "" || kelintinisSk > numeris.length) {
    return "Prašome įrašyti kelintinį skaičių";
  }
  //   i +1 - interacija yra characters skaicius ir nurodo nuo kelinto character pradesime dalinti
  //  jei i butu 0 tuo atveju negaletumeme nurodyti character raides i+1 yra a index [0], pirmasis character
  let naujassk = "";
  for (let i = 0; i < numeris.length; i++) {
    if ((i + 1) % kelintinisSk === 0) {
      naujassk += numeris[i];
    }
  }
  return naujassk;
}
console.log(dalyba([8, 5, 6, 4, 7, 5], 2));
console.log(dalyba([8, 8, 5, 2, 6, 7, 7, 5, 5, 5], 3));
console.log(dalyba([7, 5, 8, 5, 9, 6, 2, 2, 1], 8));
console.log(dalyba([8, 5, 5], 6));
console.log(dalyba("tekstas", 3));
console.log(dalyba([6, 6, 5, 8, 8, 1], 0));
