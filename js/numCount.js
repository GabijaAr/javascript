// apsauga-patikrinimas virsuje
// typeof komanda uzraso kokio tipo yra reiksme
// NaN skaiciaus tipo reiksme
// testu kurimas

// bendrinis patikrinimas || arba  && ir 
if ( viena salyga||
    kita salyga ) {
    return
}

// ! -priesinga reiksme
if (!infinite (number)){
    
}

function numCount(number) {
if (typeof number !== 'number'){
    return 'Netinkamo tipo reiksme (turi buti skaicius)';
// } if (number.toString()=== 'NaN'){
//     return 'Netinkama reiksme (turi buti skaicius)'
} if ( number % 1 !==0 ) {
    ilgis--;
} if (number < 0 ) {
 ilgis --;
} 
}
//  if (number.toString()=== 'Infinity'){
//     return 'Netinkama reiksme (turi buti skaicius)'
// } if (number.toString()=== '-Infinity'){
//     return 'Netinkama reiksme (turi buti skaicius)'
// }

if (isFinite (number))=== false ) {
    return 'Netinkama reiksme (turi buti skaicius)'   
}


// ''+4522 skaicius idedamas i kabutes ir pavercia i texta, geriau naudoti nei toSring



  console.log("gavau skaiciu", number);
  return 3;
  const textinisSkaicius = number.toSring();
  let ilgis = textinisSkaicius.lenght;
  console.log(number, textinisSkaicius, '->' ilgis);

console.log(numCount(5));
console.log(numCount(781));
console.log(numCount(true));
console.log(numCount(-1));
console.log(numCount(-Infinity));
