let boom = new Audio('sounds/boom.wav');
let clap = new Audio('sounds/clap.wav');
let hihat = new Audio('sounds/hihat.wav');
let kick = new Audio('sounds/kick.wav');
let openhat = new Audio('sounds/openhat.wav');
let ride = new Audio('sounds/ride.wav');
let snare = new Audio('sounds/snare.wav');
let tink = new Audio('sounds/tink.wav');
let tom = new Audio('sounds/tom.wav');

// Play drum by keyboard press
document.addEventListener('keydown', (event) => {
  if(event.code == 'KeyA') {
    clap.play();
  } else if (event.code == 'KeyS') {
    hihat.play();
  } else if (event.code == 'KeyD') {
    kick.play();
  } else if (event.code == 'KeyF') {
    openhat.play();
  } else if (event.code == 'KeyG') {
    boom.play();
  } else if (event.code == 'KeyH') {
    ride.play();
  } else if (event.code == 'KeyJ') {
    snare.play();
  } else if (event.code == 'KeyK') {
    tom.play();
  } else if (event.code == 'KeyL') {
    tink.play();
  }
})



// Play music by mouse click
const clapLocation = document.getElementById('keyA');
const hihatLocation = document.getElementById('keyS');
const kickLocation = document.getElementById('keyD');
const openhatLocation = document.getElementById('keyF');
const boomLocation = document.getElementById('keyG');
const rideLocation = document.getElementById('keyH');
const snareLocation = document.getElementById('keyJ');
const tomLocation = document.getElementById('keyK');
const tinkLocation = document.getElementById('keyL');

clapLocation.addEventListener('click',(event) => {
  clap.play();
});

hihatLocation.addEventListener('click',(event) => {
  hihat.play();
});

kickLocation.addEventListener('click', (event) => {
  kick.play();
});

openhatLocation.addEventListener('click', (event) => {
  openhat.play();
});

boomLocation.addEventListener('click', (event) => {
  boom.play();
});

rideLocation.addEventListener('click', (event) => {
  ride.play();
});

snareLocation.addEventListener('click', (event) => {
  snare.play();
});

tomLocation.addEventListener('click', (event) => {
  tom.play();
});

tinkLocation.addEventListener('click', (event) => {
  tink.play();
})










