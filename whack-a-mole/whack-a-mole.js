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

// A way to show a mole in the chosen cell.
function showMole() {
  // Create a randomIndex variable set to the value of our random number. Include this inside the function so that it can generate each time the function is run.
  let randomIndex = getRandomNumber(0, 25)
  console.log(randomIndex)
  // //Create a variable for the random cell to be equal to the index position of the random number in our cell array.
  let randomCell = cellsArray[randomIndex]
  console.log(randomCell)
  //Create an image tag.
  const img = document.createElement('img')
  //Set the image source.
  img.src = 'mole.png'
  img.style.width = '100px'
  img.style.height = '100px'
  //Create an ID for the image which we can target in our onclick method.
  img.id = 'mole'
  //Set the image to the random cell.
  randomCell.appendChild(img)
  //Add an onClick method that calls a whackedMole function when image is clicked. Keep this inside the function so it works each time the function is run.
  document.getElementById('mole').onclick = function () {
    whackedMole()
  }
}

showMole()

//Declare a whackedMole function.
function whackedMole() {
  //Remove the image element when the function is called.
  document.getElementById('mole').remove()
  //Add a sound effect that plays when the mole is clicked.
  const audio = new Audio()
  audio.src = 'whack-audio.wav'
  audio.play()
  showMole()
  // console.log('You clicked the mole')
}

//Possibility to try another way - Use a conditional so if the user clicks anything, it will check if the image is there and remove it if this is the case.
