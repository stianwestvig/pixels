import {
  drawNinja,
  drawNinjaWalking1,
  drawNinjaWalking2,
  ninjaBlue,
  ninjaDark,
  ninjaRed
} from './modules/draw-ninja.js';

function init() {
  console.log('Loading pixels');

  const canvas = document.createElement('canvas');
  canvas.width = 800;
  canvas.height = 600;

  document.body.appendChild(canvas);
  return canvas;
}

const canvas = init();
const c = canvas.getContext('2d');
let posX = 60;

function draw(timestamp) {
  c.clearRect(0, 0, canvas.width, canvas.height);

  // sky
  c.fillStyle = '#DFFFFF';
  c.fillRect(0, 0, 800, 400);

  // ground
  c.fillStyle = '#329F5B';
  c.fillRect(0, 400, 800, 600);

  drawNinjaWalking2({
    ...ninjaRed,
    c,
    xOffset: 360,
    yOffset: 350,
    scale: 10
  });

  drawNinja({
    ...ninjaBlue,
    c,
    xOffset: posX,
    yOffset: 350,
    scale: 10
  });

  drawNinjaWalking1({
    ...ninjaDark,
    c,
    xOffset: 160,
    yOffset: 350,
    scale: 20
  });

  posX++;

  window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);
