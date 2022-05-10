// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

// The ability to store or get references to the cells in the HTML table.
//Create an array to access the cells

let cellsArray = document.getElementsByTagName('TD')
console.log(cellsArray)

// // A function to randomly select which cell should show the mole.

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

// //Create a randomIndex variable set to the value of our random number.
const randomIndex = getRandomNumber(0, 25)
console.log(randomIndex)

// //Create a variable for the random cell to be equal to the index position of the random number in our cell array.
const randomCell = cellsArray[randomIndex]
console.log(randomCell)

// // A way to show a mole in the chosen cell.
function showMole(cell) {
  //Create an image tag.
  const img = document.createElement('img')
  //Set the image source.
  img.src = 'mole.png'
  //Create an ID for the image
  img.id = 'mole'
  //Set the image to the random cell.
  randomCell.appendChild(img)
}

showMole(randomCell)

//Add an onClick method that calls a whackedMole function when image is clicked
document.getElementById('mole').onclick = function () {
  whackedMole()
}

function whackedMole() {
  console.log('You clicked the mole')
}
//Remove the mole from the current cell.
//Reuse code wr
