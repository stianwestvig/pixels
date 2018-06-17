import {
  blueNinjaTheme,
  darkNinjaTheme,
  redNinjaTheme
} from './modules/draw-ninja.js';

import { animateNinja } from './models/ninja.js';
import { drawStructure, woodenTheme } from './modules/draw-background.js';
import { handleKeyDown, handleKeyUp } from './modules/keyboard-input.js';

// todo: good tutorial
// https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript

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
let animationCounter = 0;

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

  const redNinjaState = {
    animationCounter,
    c,
    position: {
      x: 360,
      y: 350
    },
    theme: redNinjaTheme,
    walking: false
  }
  animateNinja(redNinjaState);

  const darkNinjaState = {
    animationCounter,
    c,
    position: {
      x: 160,
      y: 350,
      scale: 20
    },
    theme: darkNinjaTheme,
    walking: false
  }
  animateNinja(darkNinjaState);

  const playerState = {
    animationCounter,
    c,
    position: {
      x: posX,
      y: 350
    },
    theme: blueNinjaTheme,
    walking
  }
  animateNinja(playerState);

  animationCounter ++;
  if (animationCounter === 60) {
    animationCounter = 0;
  }

  // update positions
  if (input.isRight) {
    posX += walkingSpeed;
  }

  if (input.isLeft) {
    posX -= walkingSpeed;
  }

  if (input.isLeft || input.isRight) {
    walking = true;
  } else {
    walking = false;
  }

  window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);
