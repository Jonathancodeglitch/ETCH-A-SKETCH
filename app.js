/* build the UI */
//create a 16 by 16 square in a container class on page load
//make your squares change colors when a mouse hover on it ,make it look like a pen is drawing on your squares.
// add a button on the UI that ask the user the number of squares he wants
//once the users enters  a number the existing grid should be removed and a new one with the user specifics show be added
//the new grid should grow or shrink to take the same width as the previous grid (width:950px;)
//the max number a user can enter is 100

let Grid = document.querySelector('.Grid');
window.addEventListener('DOMContentLoaded', addBoxOnPageLoad);



function addBoxOnGrid(onPageLoadBoxDimension){
  for (let i = 1; i <= Math.pow(onPageLoadBoxDimension, 2); i++) {
    let box = document.createElement('div');
    box.classList.add('box');
    Grid.append(box);
  }
}

function addBoxOnPageLoad() {
  let onPageLoadBoxDimension = 16;
  addBoxOnGrid(onPageLoadBoxDimension)
  let box = document.querySelectorAll('.box');
  adjustBoxDimension(onPageLoadBoxDimension, box);
}

function adjustBoxDimension(dimension, box) {
  box.forEach((box) => {
    box.style.flexBasis = `calc(100% / ${dimension})`;
  });
}

//events
