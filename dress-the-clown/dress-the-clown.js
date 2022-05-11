// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

//Create a variable to store the current number of the head image. Store it outside so it can be increased each time the function is called, and used in other functions.
let headIndex = 0

//Write a function that can change the head image.
function changeClownHead() {
  //Create a variable to store the string.
  let headSrc = './images/head' + headIndex + '.png'
  //Create a head variable and set it to the element with ID head
  let head = document.getElementById('head')
  //Replace the image.
  head.src = headSrc
  //Call a function to check headIndex.
  checkHeadIndex()
  console.log(checkHeadIndex)
  console.log(headIndex)
}

//Create a function to check head index.
function checkHeadIndex() {
  if (headIndex === 5) {
    headIndex = 0
  } else {
    headIndex++
  }
}

//Create an eventListener which will be used to bind the keydown event to the function calling.
document.addEventListener('keydown', function (event) {
  switch (event.code) {
    //Use the right arrow key to call the function changeClownHead()
    case 'ArrowRight':
      changeClownHead()
      break
  }
})

// changeClownHead()
// changeClownHead()
// changeClownHead()
