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
