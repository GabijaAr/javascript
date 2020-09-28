// isrinkti maziausius skaicius ir juos sudeti
function lowestNumbers(numbers) {
  let numbersArray = numbers;
  let maziausiasNumerisVienas = Math.min(...numbersArray);
  numbersArray.splice(numbersArray.indexOf(maziausiasNumerisVienas), 1);
  console.log(numbersArray);
  let maziausiasNumerisDu = Math.min(...numbersArray);
  console.log(maziausiasNumerisVienas + " " + maziausiasNumerisDu);
}
const lowNumbers = [662, 4, 20, 333];
lowestNumbers(lowNumbers);
// ... nukopijavimas visu elementu, isskleidimas
