// IF palyginimo operatoriai
// naudoti: >, <, <=, >=, ===, !==
// nenaudotini: ==, !=

const limit = 21;
const age = 99;
if (limit <= age) {
  console.log("you got candy");
} else {
  console.log("try again later");
}

// === kad reiksme nebutu priskirta reiksmei
if (limit === age) {
  console.log("Happy birthday");
}
// } else { nuoseklus loginis rasymas

// jeigu nelygu
if (age !== 0) {
  console.log("Hmmm");
}


const color = "melyna";

if (color === "melyna") {
  console('tyros sielos');
} else {
    if (color === 'zalia') {
        console.log('srekas');
    }
    }else {
if (color ==='ruda')
console.log('melagiai')
}else {
('velniu priede');
}

// nestinimas 2 variantas, eilute
const month: 'sausis';

if (month=== 'sausis') {
    console.log(1);
}else if (month === 'vasaris') {
    console.log(2)
}else if (month === 'kovas') {
    console.log(3);
} else {
    console.log(`-------`);
}

// blogas variantas jeigu yra else. Rekomenduotina visada naudoti riestinius
if (month === 'Sausis') console.log(1);
if (month === 'Vasaris') console.log(2);
if (month === 'Kovas') console.log(3);
if (month === 'Balandis') console.log(4);
if (month === 'Geguze') {
    console.log(5);
}else {
    console.log(`------`);
}

// atvejai 
const day = 'pir';

switch () {
case'pir':
console.log(1);
break;
case'ant':
console.log(2);
break;
case'tre':
console.log(3);
break;
case'ket':
console.log(4);
break;
case'pen':
console.log(5);
break;
case'ses':
console.log(6);
break;
case'sep':
console.log(7);
default :
console.log('tokios dienos nera');
}

const stop = 'Geniu'

switch (stops) {
    case 'Naujoji Vilnia':
    case 'Geniu':
    case 'Rudens':
    case 'Karaliaus mindaugo':
    case 'Zaliasis tiltas':

    case 'Lvovo':
    case 'Tuskulenai':
    case 'Vasaros':
    case 'Rudens2':
    case 'Tremtiniu':

    default:
        console.log(Ar turi telefona);
        break;
}

const text = 'Labas';
const textSize = text.length;
console.log(text, '->', textSize);

const abc= ['a', 'b', 'c', 'd']
console.log(abc);
console.log(abc.length);

