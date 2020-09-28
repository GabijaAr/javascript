function asiuSkaicius(ratai) {
  let asiesSk = ratai / 2;
  let asiesSkSunk = (ratai - 2) / 4 + 1;
  if (asiesSk > 2) {
    return asiesSkSunk;
  } else {
    return asiesSk;
  }
}

// 2 -> 2+2
console.log(asiuSkaicius(4));
// 3 -> 2+4+2
console.log(asiuSkaicius(10));
// 4-> 2+4+4+2
console.log(asiuSkaicius(14));
// 5-> 2+4+4+4+2
console.log(asiuSkaicius(18));

// Optimalesnis variantas:
// function asiuSkaicius(r) {
//   return ratuKiekis === 4 ? 2 : (r + 2) / 4;
// }
// pridedame dokumentacija
// @param {number} r ratu kiekis
// @returns {number} asiu skaicius

// AT LEAST I TRIED
// function tree(height) {
// let tustuma = " ";
// let zvaigzdutes = "*";
// let tustumosSk = tustuma * height;
// let eglute = "";
// for (let i = 0; i < height; index++) {

// console.log(snaiges)
// eglute += '**';
// }
// }
// console.log(tustumosSk);

// let snaiges = '*';

// i *2 +1
// console.log('#');
// tree(5);
// tree(3);

// if height zvaizduxiu skaicius apatinis ir einame is galo ir atiminejame po du is sonu
// kiekvienoje eluteje dviem daugiau nei pries tai
// ("*" i)

function stringRepeat(string, count) {
  let text = "";
  for (let i = 0; i < count; i++) {
    text += string;
  }
  console.log(stringRepeat("*", i * 2 + 1));
}

function tree(height) {
    // virsune
    console.log(stringRepeat(" ", height - 1)+ "|") +
  for (let i = 0; i < height; i++) {
    console.log(stringRepeat(" ", height - i - 1)) +"@" +
      stringRepeat("*", i * 2 - 1) + "@") ;
    //   kamienas
  }
}
// sluoskni perdaryti ciklu
tree(5);
// height- i -1


// "*".repeat(7) -alternatyva


