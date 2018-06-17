import {
  drawNinja,
  drawNinjaWalking1,
  drawNinjaWalking2,
  blueNinjaTheme,
  darkNinjaTheme,
  redNinjaTheme
} from './modules/draw-ninja.js';

import { drawStructure, woodenTheme } from './modules/draw-background.js';

import { handleKeyDown, handleKeyUp } from './modules/keyboard-input.js';

function init() {
  console.log('Loading pixels');

  window.addEventListener('keydown', (event) => handleKeyDown(event, input));
  window.addEventListener('keyup', (event) => handleKeyUp(event, input));

  const canvas = document.createElement('canvas');
  canvas.width = 800;
  canvas.height = 600;

  document.body.appendChild(canvas);
  return canvas;
}

const canvas = init();
const c = canvas.getContext('2d');
let posX = 60;
let walking = true;
let walkingSpeed = 2;

let input = {
  isRight: false,
  isLeft: false
}

function draw(timestamp) {
  c.clearRect(0, 0, canvas.width, canvas.height);

  // sky
  c.fillStyle = '#DFFFFF';
  c.fillRect(0, 0, 800, 400);

  // ground
  c.fillStyle = '#329F5B';
  c.fillRect(0, 400, 800, 600);

  drawStructure({
    ...woodenTheme,
    c,
    xOffset: 460,
    yOffset: 250,
    scale: 20
  })

  drawNinja({
    ...redNinjaTheme,
    c,
    xOffset: 360,
    yOffset: 350,
    scale: 10
  });

  drawNinja({
    ...darkNinjaTheme,
    c,
    xOffset: 160,
    yOffset: 350,
    scale: 20
  });

  // todo: good tutorial
  // https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript

  // animation
  if (walking) {
    if (parseInt((timestamp + '').charAt(0)) % 2) {
      drawNinjaWalking1({
        ...blueNinjaTheme,
        c,
        xOffset: posX,
        yOffset: 350,
        scale: 10
      });
    } else {
      drawNinjaWalking2({
        ...blueNinjaTheme,
        c,
        xOffset: posX,
        yOffset: 350,
        scale: 10
      });
    }
  }

  // update positions
  if (input.isRight) {
    posX += walkingSpeed;
  }

  if (input.isLeft) {
    posX -= walkingSpeed;
  }

  window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);
