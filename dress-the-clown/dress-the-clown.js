// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

//Create a variable to store the current number of the head image. Store it outside so it can be increased each time the function is called, and used in other functions.
let headIndex = 0

//Create a variable to track which body part you are selecting clothing for.
let clothingIndex = 0

//Write a function that can change the head image.
function changeClownHead() {
  //Create a variable to store the string.
  let headSrc = './images/head' + headIndex + '.png'
  //Create a head variable and set it to the element with ID head
  let head = document.getElementById('head')
  //Replace the image.
  head.src = headSrc
  //Call a function to check headIndex.
  // checkHeadIndex()
  // console.log(checkHeadIndex)
  // console.log(headIndex)
}

//Create a function to check head index.
// function checkHeadIndex() {
//   if (headIndex > 5) {
//     headIndex = 0
//   } else if (headIndex === 0) {
//     headIndex = 5
//   }
// }

//Create an eventListener which will be used to bind the keydown event to the function calling.
document.addEventListener('keydown', function (event) {
  switch (event.code) {
    //Use the right arrow key to call the function changeClownHead()
    case 'ArrowRight':
      changeClownHead()
      if (headIndex < 5) {
        headIndex++
      } else {
        headIndex = 0
      }
      break
    case 'ArrowLeft':
      changeClownHead()
      //Set a condition to ensure the index variable decreases on keydown providing the number is greater than zero.
      if (headIndex < 6 && headIndex > 0) {
        headIndex--
        //Reset the index to 5 if the variable reaches zero
      } else {
        headIndex = 5
      }
      break
    case 'ArrowUp':
      //Set a condition to toggle the clothing index UP on keydown.
      if (clothingIndex < 2) {
        clothingIndex++
        console.log('clothingIndex is ' + clothingIndex)
      } else {
        clothingIndex = 0
        console.log('clothingIndex is ' + clothingIndex)
      }
      break
    case 'ArrowDown':
      //Set a condition to toggle the clothing index DOWN on keydown.
      if (clothingIndex < 3 && clothingIndex > 0) {
        clothingIndex--
        console.log('clothingIndex is ' + clothingIndex)
      } else {
        clothingIndex = 2
        console.log('clothingIndex is ' + clothingIndex)
      }
  }
})
