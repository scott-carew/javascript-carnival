// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

//Give the unicorns a reference so we know what to click on. This is done by adding an ID to the HTML elements.

console.log('Inflate The Unicorn!')

//Change the source of the image to the new picture

//Write a function that will happen when we click unicorns.
//--- A BETTER WAY TO COMPLETE ---//

document.getElementById('uni0').onclick = clicked
document.getElementById('uni1').onclick = clicked
document.getElementById('uni2').onclick = clicked

//The original inflation levels are just three numbers. To complete the better solution, we can just put those numbers into an array to access them in our function.
let inflation = [0, 0, 0]

function clicked(event) {
  const unicorn = event.target
  //Since in V1 the only thing we were changing was the number, we need to create a variable that represents that number of the unicorn that we are talking about.
  //Pull out the 4th value of the string for id i.e 0, 1, 2
  let id = unicorn.id[3]

  //Increase the value of inflation in the array, based on the string value of the ID
  inflation[id]++

  if (inflation[id] == 4) {
    inflation[id] = 0
  }

  unicorn.src = './images/unicorn-' + inflation[id] + '.png'
}

//---FIRST PART OF THE TUTORIAL - ONE WAY TO COMPLETE---//
// const uni0 = document.getElementById('uni0')
// const uni1 = document.getElementById('uni1')
// const uni2 = document.getElementById('uni2')

// //A variable to keep track of how inflated each unicorn
// // let inflationLevel0 = 0
// // let inflationLevel1 = 0
// // let inflationLevel2 = 0

// let inflation = [0, 0, 0]

// //Bind the onclick method.
// uni0.onclick = clicked
// uni1.onclick = clicked
// uni2.onclick = clicked

// function clicked(event) {
//   //Figure out which unicorn I clicked
//   const unicorn = event.target
//   // console.log(unicorn)
//   //Increase its inflation level
//   //NOTE: If you are just doing the IF statement, and one line of code, you do not need the curly brackets.
//   if (unicorn.id == 'uni0') {
//     inflationLevel0++

//     //Create another if statement to reset the image if it goes too high - otherwise the image will not exist.
//     if (inflationLevel0 == 4) inflationLevel0 = 0
//     unicorn.src = './images/unicorn-' + inflationLevel1 + '.png'
//   }
//   if (unicorn.id == 'uni1') {
//     inflationLevel1++
//     if (inflationLevel1 == 4) inflationLevel1 = 0
//     unicorn.src = './images/unicorn-' + inflationLevel1 + '.png'
//   }
//   if (unicorn.id == 'uni2') {
//     inflationLevel2++
//     if (inflationLevel2 == 4) inflationLevel2 = 0
//     unicorn.src = './images/unicorn-' + inflationLevel2 + '.png'
//   }

//   //Check that the function is working.
//   //NOTE that the word event isn't special. It is the same as 'e' or could be called 'dog'. It still does the same thing. Javascript just knows when you perform 'onclick' the event is the object that is passed in regardless of what it is called.
//   //Because 'event' is an object, and we can traverse an object with dot notation, we can pull out just the target.
//   // console.log(event.target)
// }

// --- MY CODE --- //
// //Get an array containing the unicorns

// let images = document.getElementsByClassName('inflate-an-image')
// // // console.log(images)

// // //Bind the onclick method to our unicorns
// for (let i = 0; i < images.length; i++) {
//   images[i].onclick = imageClicked
// }

// //Write a function that gets called every time you click on a unicorn

// function imageClicked(e) {
//   //Create a variable for the clicked image so we can do something with it.
//   let image = e.target

//   //Change image 0 to be image 1
//   if (image.src.match('./images/unicorn-0.png')) {
//     image.src = './images/unicorn-1.png'
//   } else if (image.src.match('./images/unicorn-1.png')) {
//     image.src = './images/unicorn-2.png'
//   } else if (image.src.match('./images/unicorn-2.png')) {
//     image.src = './images/unicorn-3.png'
//   } else {
//     if (image.id == 'uni0') {
//       alert('Unicorn Number 1 says thank you!')
//     } else if (image.id == 'uni1') {
//       alert('Unicorn Number 2 says thank you!')
//     } else if (image.id == 'uni2') {
//       alert('Unicorn Number 3 says thank you!')
//     }
//   }
// }
