/* build the UI */
//create a 16 by 16 square in a container class on page load
//make your squares change colors when a mouse hover on it ,make it look like a pen is drawing on your squares.
// add a button on the UI that ask the user the number of squares he wants
//once the users enters  a number the existing grid should be removed and a new one with the user specifics show be added
//the new grid should grow or shrink to take the same width as the previous grid (width:950px;)
//the max number a user can enter is 100

let Grid = document.querySelector('.Grid');
window.addEventListener('DOMContentLoaded', addBoxOnPageLoad);

function addBoxOnGrid(dimension) {
  for (let i = 1; i <= Math.pow(dimension, 2); i++) {
    let box = document.createElement('div');
    box.classList.add('box');
    Grid.append(box);
  }
}

function addBoxOnPageLoad() {
  let onPageLoadBoxDimension = 16;
  addBoxOnGrid(onPageLoadBoxDimension);
  adjustBoxDimension(onPageLoadBoxDimension);
}

function adjustBoxDimension(dimension) {
  let box = document.querySelectorAll('.box');
  box.forEach((box) => {
    box.style.flexBasis = `calc(100% / ${dimension})`;
  });
}

let dimennsionBtn = document.getElementById('dimennsion_btn');

function displayUserDimension() {
  Grid.innerHTML = ''; //clear previous boxes inside the grid container
  let UserDimension = parseInt(prompt('ENTER GRID DIMENSION ? X ?'));
  if (UserDimension && UserDimension <= 100) {
    addBoxOnGrid(UserDimension);
    adjustBoxDimension(UserDimension);
  } else {
    addBoxOnPageLoad();
  }
}

dimennsionBtn.addEventListener('click', displayUserDimension);

//when user moves on boxes
let isDrawing = false;
let rainbow = false;

Grid.addEventListener('mousedown', (e) => {
  e.preventDefault();
  isDrawing = true;
});

Grid.addEventListener('mouseup', (e) => {
  e.preventDefault();
  isDrawing = false;
});

//change the color of the box to black
Grid.addEventListener('mouseover', (e) => {
  if (isDrawing && e.target.classList.contains('box')) {
    e.preventDefault();
    draw(e);
  }
});

Grid.addEventListener('click', (e) => {
  if (e.target.classList.contains('box')) {
    draw(e);
  }
});

function draw(e) {
  let box = e.target;
  if (rainbow) {
    box.style.backgroundColor = getRainbowColour();
  } else {
    box.style.backgroundColor = 'black';
  }
}

//when rainbow is clicked change pen ink to diffrent color
//when eraser is click change pen to eraser
//when pan is click it show default back to pen
//when clear btn is press eraser everything in the gread

let rainbowBtn = document.getElementById('rainbow');

rainbowBtn.addEventListener('click', () => {
  rainbow = true;
});

function getRainbowColour() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red},${green},${blue})`;
}
