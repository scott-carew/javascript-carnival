// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')
//--- BETTER SOLUTION FROM VIDEO ---//

document.onkeydown = checkKey

function checkKey(e) {
  if (e.key == 'ArrowUp') {
    console.log('i pressed up')
    changeVertical(-1)
    // up arrow
  } else if (e.key == 'ArrowDown') {
    changeVertical(1)
    // down arrow
  } else if (e.key == 'ArrowLeft') {
    changeHorizontal(-1)
    // left arrow
  } else if (e.key == 'ArrowRight') {
    changeHorizontal(1)
    // right arrow
  }
}

//Create an array that represents the different indexes
let indexes = [0, 0, 0]

let mainIndex = 0

let head = document.getElementById('head')
let body = document.getElementById('body')
let shoes = document.getElementById('shoes')

const imgs = [head, body, shoes]
const strings = ['head', 'body', 'shoes']

function changeHorizontal(shift) {
  //Create a copy of the index from above
  let index = indexes[mainIndex]
  let image = imgs[mainIndex]
  let str = strings[mainIndex]

  //Move the index up or down
  index += shift

  //Two IF statements will ensure both run. IF/ELSE - only one will run.
  if (index < 0) index = 5

  if (index > 5) index = 0

  //Reassign the index to be the value of the copy that you made. Deconstructive coding. Otherwise, it will only allow you to go once in either direction.
  indexes[mainIndex] = index

  image.src = './images/' + str + index + '.png'
}

function changeVertical(shift) {
  mainIndex += shift
  if (mainIndex < 0) mainIndex = 2

  if (mainIndex > 2) mainIndex = 0
  console.log(mainIndex)
}

// //--- From Video NON OPTIMAL SOLUTION ---//

// document.onkeydown = checkKey

// function checkKey(e) {
//   if (e.key == 'ArrowUp') {
//     console.log('i pressed up')
//     changeVertical(-1)
//     // up arrow
//   } else if (e.key == 'ArrowDown') {
//     changeVertical(1)
//     // down arrow
//   } else if (e.key == 'ArrowLeft') {
//     changeHorizontal(-1)
//     // left arrow
//   } else if (e.key == 'ArrowRight') {
//     changeHorizontal(1)
//     // right arrow
//   }
// }

// let headIndex = 0
// let bodyIndex = 0
// let shoesIndex = 0

// let mainIndex = 0

// let head = document.getElementById('head')
// let body = document.getElementById('body')
// let shoes = document.getElementById('shoes')

// function changeHorizontal(shift) {
//   if (mainIndex == 0) {
//     //Adding a negative number onto a number will subtract. Passes in the argument of -1 for left and 1 for right
//     headIndex += shift

//     //Two IF statements will ensure both run. IF/ELSE - only one will run.
//     if (headIndex < 0) headIndex = 5

//     if (headIndex > 5) headIndex = 0
//     head.src = './images/head' + headIndex + '.png'
//   }
//   if (mainIndex == 1) {
//     bodyIndex += shift

//     if (bodyIndex < 0) bodyIndex = 5

//     if (bodyIndex > 5) bodyIndex = 0
//     body.src = './images/body' + bodyIndex + '.png'
//   }
//   if (mainIndex == 2) {
//     shoesIndex += shift

//     if (shoesIndex < 0) shoesIndex = 5

//     if (shoesIndex > 5) shoesIndex = 0
//     shoes.src = './images/shoes' + shoesIndex + '.png'
//   }
// }

// function changeVertical(shift) {
//   mainIndex += shift
//   if (mainIndex < 0) mainIndex = 2

//   if (mainIndex > 2) mainIndex = 0
//   console.log(mainIndex)
// }

//Push the left and right arrow keys to change the outfit
//Push the up and down arrow keys to change which part of the body we're changing

// //---   MY CODE ---//

// //Create a variable to store the current number of the head image. Store it outside so it can be increased each time the function is called, and used in other functions. Setting this to -1 will ensure that when you call the function, picture 0 will be the first image to display.
// let bodyPartIndex = -1

// //Create a variable to track which body part you are selecting clothing for.
// let clothingIndex = 0

// //Create an instructions variable which will show the user what body part they are working on.
// let instructions = document.getElementById('instructions')
// let bodyPart = document.getElementById('bodyPart')
// instructions.innerHTML =
//   'Use UP/DOWN arrows to change the body part. Use LEFT/RIGHT arrows to change clothes.'

// function updateClothingText() {
//   if (clothingIndex == 0) {
//     bodyPart.innerHTML = 'Currently selected: head'
//   } else if (clothingIndex == 1) {
//     bodyPart.innerHTML = 'Currently selected: body'
//   } else if (clothingIndex == 2) {
//     bodyPart.innerHTML = 'Currently selected: shoes'
//   }
// }

// //Write a function that can change the head image.
// function changeClothes() {
//   //Create a variable to store the string which corresponds to the image.
//   let headSrc = './images/head' + bodyPartIndex + '.png'
//   let bodySrc = './images/body' + bodyPartIndex + '.png'
//   let shoesSrc = './images/shoes' + bodyPartIndex + '.png'
//   //Create a variable for each bodypart and set it to the element with ID from HTML
//   let head = document.getElementById('head')
//   let body = document.getElementById('body')
//   let shoes = document.getElementById('shoes')
//   //Set the image based on the clothingIndex.
//   if (clothingIndex == 0) {
//     head.src = headSrc
//   } else if (clothingIndex == 1) {
//     body.src = bodySrc
//   } else if (clothingIndex == 2) {
//     shoes.src = shoesSrc
//   }
// }

// //Create an eventListener which will be used to bind the keydown event to the function calling and set restrictions.
// document.addEventListener('keydown', function (event) {
//   switch (event.code) {
//     //Use the right arrow key to call the function changeClothes()
//     case 'ArrowRight':
//       if (bodyPartIndex < 6) {
//         bodyPartIndex++
//         console.log('bodyPartIndex is ' + bodyPartIndex)
//       } else {
//         bodyPartIndex = 0
//         console.log('bodyPartIndex is ' + bodyPartIndex)
//       }
//       changeClothes()
//       break
//     case 'ArrowLeft':
//       //Set a condition to ensure the index variable decreases on keydown providing the number is greater than zero.
//       if (bodyPartIndex < 7 && bodyPartIndex > 0) {
//         bodyPartIndex--
//         console.log('bodyPartIndex is ' + bodyPartIndex)
//         //Reset the index to 5 if the variable reaches zero
//       } else {
//         bodyPartIndex = 6
//         console.log('bodyPartIndex is ' + bodyPartIndex)
//       }
//       changeClothes()
//       break
//     case 'ArrowUp':
//       //Set a condition to toggle the clothing index UP on keydown.
//       if (clothingIndex < 2) {
//         clothingIndex++
//         updateClothingText()
//         console.log('clothingIndex is ' + clothingIndex)
//       } else {
//         clothingIndex = 0
//         updateClothingText()
//         console.log('clothingIndex is ' + clothingIndex)
//       }
//       break
//     case 'ArrowDown':
//       //Set a condition to toggle the clothing index DOWN on keydown.
//       if (clothingIndex < 3 && clothingIndex > 0) {
//         clothingIndex--
//         updateClothingText()
//         console.log('clothingIndex is ' + clothingIndex)
//       } else {
//         clothingIndex = 2
//         updateClothingText()
//         console.log('clothingIndex is ' + clothingIndex)
//       }
//   }
// })
