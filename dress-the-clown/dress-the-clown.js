// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

//Create a variable to store the current number of the head image. Store it outside so it can be increased each time the function is called, and used in other functions. Setting this to -1 will ensure that when you call the function, picture 0 will be the first image to display.
let bodyPartIndex = -1

//Create a variable to track which body part you are selecting clothing for.
let clothingIndex = 0

//Write a function that can change the head image.
function changeClothes() {
  //Create a variable to store the string which corresponds to the image.
  let headSrc = './images/head' + bodyPartIndex + '.png'
  let bodySrc = './images/body' + bodyPartIndex + '.png'
  let shoesSrc = './images/shoes' + bodyPartIndex + '.png'
  //Create a variable for each bodypart and set it to the element with ID from HTML
  let head = document.getElementById('head')
  let body = document.getElementById('body')
  let shoes = document.getElementById('shoes')
  //Set the image based on the clothingIndex.
  if (clothingIndex == 0) {
    head.src = headSrc
  } else if (clothingIndex == 1) {
    body.src = bodySrc
  } else if (clothingIndex == 2) {
    shoes.src = shoesSrc
  }
}

//Create an eventListener which will be used to bind the keydown event to the function calling and set restrictions.
document.addEventListener('keydown', function (event) {
  switch (event.code) {
    //Use the right arrow key to call the function changeClothes()
    case 'ArrowRight':
      if (bodyPartIndex < 5) {
        bodyPartIndex++
        console.log('bodyPartIndex is ' + bodyPartIndex)
      } else {
        bodyPartIndex = 0
        console.log('bodyPartIndex is ' + bodyPartIndex)
      }
      changeClothes()
      break
    case 'ArrowLeft':
      //Set a condition to ensure the index variable decreases on keydown providing the number is greater than zero.
      if (bodyPartIndex < 6 && bodyPartIndex > 0) {
        bodyPartIndex--
        console.log('bodyPartIndex is ' + bodyPartIndex)
        //Reset the index to 5 if the variable reaches zero
      } else {
        bodyPartIndex = 5
        console.log('bodyPartIndex is ' + bodyPartIndex)
      }
      changeClothes()
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
