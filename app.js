let Grid = document.querySelector('.Grid');

function addBoxOnGrid(dimension) {
  //create boxes
  for (let i = 1; i <= Math.pow(dimension, 2); i++) {
    let box = document.createElement('div');
    box.classList.add('box');
    Grid.append(box);
  }
}

function addBoxOnPageLoad() {
  //add box to grid on pageLoad with default dimension
  let onPageLoadBoxDimension = 16;
  addBoxOnGrid(onPageLoadBoxDimension);
  adjustBoxDimension(onPageLoadBoxDimension);
}

addBoxOnPageLoad();

function adjustBoxDimension(dimension) {
  // change box row and column on grid
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

let rainbow = false;
let colorMode = false;
let eraser = false;

let rainbowBtn = document.getElementById('rainbow');

function getRainbowColour() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red},${green},${blue})`;
}

rainbowBtn.addEventListener('click', () => {
  changeGridCursor('./img/rainbow_pen.png');
  rainbow = true;
  colorMode = false;
  eraser = false;
});

let colorModeBtn = document.getElementById('default_picker');

function getColorMode() {
  return colorModeBtn.value;
}

colorModeBtn.addEventListener('input', () => {
  changeGridCursor('./img/pen.png');
  colorMode = true;
  rainbow = false;
  eraser = false;
});

colorModeBtn.addEventListener('click', () => {
  changeGridCursor('./img/pen.png');
  colorMode = true;
  rainbow = false;
  eraser = false;
});

let eraserBtn = document.getElementById('eraser');

eraserBtn.addEventListener('click', () => {
  changeGridCursor('./img/eraser.png');
  colorMode = false;
  rainbow = false;
  eraser = true;
});

let clear = document.getElementById('clear');

clear.addEventListener('click', function () {
  let box = document.querySelectorAll('.box');
  box.forEach((box) => (box.style.backgroundColor = 'white'));
});

function changeGridCursor(url) {
  Grid.style.cursor = `url('${url}'), auto`;
}

function draw(e) {
  let box = e.target;
  if (rainbow) {
    box.style.backgroundColor = getRainbowColour();
  } else if (colorMode) {
    box.style.backgroundColor = getColorMode();
  } else if (eraser) {
    box.style.backgroundColor = 'white';
  } else {
    box.style.backgroundColor = getColorMode();
  }
}
