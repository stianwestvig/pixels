import { drawNinjaSprite } from './models/ninja.js';
import { drawShrineSprite } from './models/shrine.js';
import { handleKeyDown, handleKeyUp } from './lib/keyboard-input.js';

// todo: good tutorial
// https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript

function init() {
  console.log('Loading pixels');

  window.addEventListener('keydown', (event) => handleKeyDown(event, input));
  window.addEventListener('keyup', (event) => handleKeyUp(event, input));

  const canvas = document.createElement('canvas');
  // canvas.width = 800;
  // canvas.height = 600;
  canvas.width = 1920;
  canvas.height = 1080;

  document.body.appendChild(canvas);
  return canvas;
}

const canvas = init();
const c = canvas.getContext('2d');
const walkingSpeed = 3;
let animationCounter = 0;

let playerState = {
  animationCounter,
  c,
  position: {
    x: 60,
    y: 350,
    scale: 15
  },
  theme: 'red',
  walking: false,
  direction: 'right'
}

const redNinjaState = {
  animationCounter,
  c,
  position: {
    x: 360,
    y: 350,
    scale: 10
  },
  theme: 'red',
  walking: false,
  direction: 'left'
}

const darkNinjaState = {
  animationCounter,
  c,
  position: {
    x: 160,
    y: 350,
    scale: 20
  },
  theme: 'dark',
  walking: false,
  direction: 'right'
}

let input = {
  isRight: false,
  isLeft: false
}

function draw(timestamp) {
  c.clearRect(0, 0, canvas.width, canvas.height);

  // sky
  c.fillStyle = '#DFFFFF';
  c.fillRect(0, 0, 1920, 400);

  // ground
  c.fillStyle = '#329F5B';
  c.fillRect(0, 400, 1920, 600);

  drawShrineSprite({
    c,
    position: {
      x: 460,
      y: 250,
      scale: 5
    }
  })

  drawShrineSprite({
    c,
    position: {
      x: 960,
      y: 250,
      scale: 7
    }
  })

  drawShrineSprite({
    c,
    position: {
      x:1560,
      y: 250,
      scale: 5
    }
  })

  drawNinjaSprite(redNinjaState);
  drawNinjaSprite(darkNinjaState);
  drawNinjaSprite(playerState);

  animationCounter ++;
  if (animationCounter === 60) {
    animationCounter = 0;
  }
  playerState.animationCounter = animationCounter;

  // update positions
  if (input.isRight) {
    playerState.position.x += walkingSpeed;
    playerState.direction = 'right';
  }

  if (input.isLeft) {
    playerState.position.x -= walkingSpeed;
    playerState.direction = 'left';
  }

  if (input.isLeft || input.isRight) {
    playerState.walking = true;
  } else {
    playerState.walking = false;
  }

  window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);
