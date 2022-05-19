// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

//--- FROM VIDEO --//

//Get a random cell
//Mole image appears in random cell
//Click on the mole
//Mole respawns in a random cell

const cells = document.getElementsByTagName('TD')

let randomIndex = Math.floor(Math.random() * cells.length)
let randomCell = cells[randomIndex]
console.log(randomCell)

const mole = document.createElement('img')
mole.src = './mole.PNG'
mole.id = 'mole'
randomCell.appendChild(mole)

mole.onclick = whackedMole

function whackedMole() {
  //Get a new random cell for the mole to appear in. Reassign to ensure this happens again. The const keyword is only used the first time you assign a variable.
  randomIndex = Math.floor(Math.random() * cells.length)
  randomCell = cells[randomIndex]
  randomCell.appendChild(mole)
  const audio = new Audio('./whack-audio.wav')
  audio.play()
}

// //--- MY CODE ---//

// // The ability to store or get references to the cells in the HTML table.
// //Create an array to access the cells

// let cellsArray = document.getElementsByTagName('TD')
// console.log(cellsArray)

// // // A function to randomly select which cell should show the mole.

// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min
// }

// //Create a mole counter and set it to zero
// let whackedMoleCount = 0

// // A way to show a mole in the chosen cell.
// function showMole() {
//   // Create a randomIndex variable set to the value of our random number. Include this inside the function so that it can generate each time the function is run.
//   let randomIndex = getRandomNumber(0, 25)
//   console.log(randomIndex)
//   // //Create a variable for the random cell to be equal to the index position of the random number in our cell array.
//   let randomCell = cellsArray[randomIndex]
//   console.log(randomCell)
//   //Create an image tag.
//   const img = document.createElement('img')
//   //Set the image source.
//   img.src = 'mole.PNG'
//   img.style.width = '75px'
//   img.style.height = '75px'
//   //Create an ID for the image which we can target in our onclick method.
//   img.id = 'mole'
//   //Set the image to the random cell.
//   randomCell.appendChild(img)
//   //Add an onClick method that calls a whackedMole function when image is clicked. Keep this inside the function so it works each time the function is run.
//   document.getElementById('mole').onclick = function () {
//     whackedMole()
//     //Increment the whackedMoleCount after the whackedMoleFunction
//     whackedMoleCount++
//     //Call the update counter function to update the whackedMoleCount
//     updateCounter(whackedMoleCount)
//     console.log('whackedMoleCount is ' + whackedMoleCount)
//   }
// }

// showMole()

// //Declare a whackedMole function.
// function whackedMole() {
//   startTimer()
//   //Remove the image element when the function is called.
//   document.getElementById('mole').remove()
//   //Add a sound effect that plays when the mole is clicked.
//   const audio = new Audio()
//   audio.src = 'whack-audio.wav'
//   audio.play()
//   showMole()
//   // console.log('You clicked the mole')
// }

// //Possibility to try another way - Use a conditional so if the user clicks anything, it will check if the image is there and remove it if this is the case.

// //Create a variable which will be used to display our whackedMoleCounter. Give it an ID, and set the inner HTML.
// const whackedMoleCounter = document.createElement('h2')
// whackedMoleCounter.id = 'counter'
// whackedMoleCounter.innerHTML = 'Whacked Mole Count: ' + whackedMoleCount
// document.body.appendChild(whackedMoleCounter)

// function updateCounter(whackedMoleCount) {
//   whackedMoleCounter.innerHTML = 'Whacked Mole Count: ' + whackedMoleCount
// }

// //Add a timer to the page

// let timer
// let timeLeft = 10

// const countdownElement = document.createElement('h3')
// countdownElement.innerHTML = `You have ${timeLeft} seconds remaining`
// document.body.appendChild(countdownElement)

// function gameOver() {
//   clearInterval(timer)
//   // alert(`Congratulations! You Whacked ${whackedMoleCount} moles!`)
// }

// function updateTimer() {
//   timeLeft = timeLeft - 1
//   if (timeLeft >= 0) {
//     countdownElement.innerHTML = `You have ${timeLeft} seconds remaining`
//   } else {
//     gameOver()
//   }
// }

// function startTimer() {
//   timer = setInterval(updateTimer, 1000)
//   updateTimer()
// }
