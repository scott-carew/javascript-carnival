// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

//Get an array containing the unicorns

let images = document.getElementsByClassName('inflate-an-image')
// // console.log(images)

// //Bind the onclick method to our unicorns
for (let i = 0; i < images.length; i++) {
  images[i].onclick = imageClicked
}

//Write a function that gets called every time you click on a unicorn

function imageClicked(e) {
  //Create a variable for the clicked image so we can do something with it.
  let image = e.target

  //Change image 0 to be image 1
  if (image.src.match('./images/unicorn-0.png')) {
    image.src = './images/unicorn-1.png'
  } else if (image.src.match('./images/unicorn-1.png')) {
    image.src = './images/unicorn-2.png'
  } else if (image.src.match('./images/unicorn-2.png')) {
    image.src = './images/unicorn-3.png'
  } else {
    if (image.id == 'one') {
      alert('Unicorn Number 1 says thank you!')
    } else if (image.id == 'two') {
      alert('Unicorn Number 2 says thank you!')
    } else if (image.id == 'three') {
      alert('Unicorn Number 3 says thank you!')
    }
  }
}
