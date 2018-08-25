import { drawNinjaSprite } from './models/ninja.js';
import { drawShrineSprite } from './models/shrine.js';
import {
  drawPinkFlowerSprite,
  drawPurpleFlowerSprite
} from './models/flower.js';
import { handleKeyDown, handleKeyUp } from './lib/keyboard-input.js';
import { canvas, fpsCounter } from './lib/dom-elements.js';

function init() {
  window.addEventListener('keydown', (event) => handleKeyDown(event, input));
  window.addEventListener('keyup', (event) => handleKeyUp(event, input));

  document.body.appendChild(canvas);
  document.body.appendChild(fpsCounter);
}

init();
const c = canvas.getContext('2d');
const walkingSpeed = 15;
let animationCounter = 0;

let flowerState = {
  animationCounter,
  c,
  position: {
    x: 200,
    y: 650,
    scale: 15
  },
  theme: 'red',
  walking: false,
  direction: 'right'
}

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
  theme: 'blue',
  walking: false,
  direction: 'left'
}

const darkNinjaState = {
  animationCounter,
  c,
  position: {
    x: 760,
    y: 350,
    scale: 20
  },
  theme: 'dark',
  walking: false,
  direction: 'right'
}

let input = {
  isRight: false,
  isLeft: false,
  isDown: false,
  isUp: false
}

const times = [];
let fps;

function draw(timestamp) {

  // measure frames per second
  const now = performance.now();
  while (times.length > 0 && times[0] <= now - 1000) {
    times.shift();
  }
  times.push(now);
  fps = times.length;
  fpsCounter.textContent = fps;

  c.clearRect(0, 0, canvas.width, canvas.height);

  // sky
  c.beginPath();
  const gradient = c.createLinearGradient(0,0,1220,1200);
  gradient.addColorStop(0,"#DFFFFF");
  gradient.addColorStop(1,"#aa048b");
  c.fillStyle = gradient;
  c.fillRect(0, 0, 1920, 400);

  // ground
  c.beginPath();
  c.fillStyle = '#329F5B';
  c.fillRect(0, 400, 1920, 680);

  drawShrineSprite({
    c,
    position: {
      x: 460,
      y: 250,
      scale: 5
    }
  });

  drawShrineSprite({
    c,
    position: {
      x: 960,
      y: 250,
      scale: 7
    }
  });

  drawShrineSprite({
    c,
    position: {
      x:1560,
      y: 250,
      scale: 5
    }
  });
  
  drawPinkFlowerSprite({
    c,
    position: {
      x: flowerState.position.x,
      y: flowerState.position.y,
      scale: 10
    }
  })
  
  drawPurpleFlowerSprite({
    c,
    position: {
      x: 700,
      y: 700,
      scale: 10
    }
  })
  
  drawPinkFlowerSprite({
    c,
    position: {
      x: 500,
      y: 600,
      scale: 10
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
  
  // flowerState.position.x += walkingSpeed / 6;

  // update positions
  if (input.isRight) {
    playerState.position.x += walkingSpeed;
    playerState.direction = 'right';
  }

  if (input.isLeft) {
    playerState.position.x -= walkingSpeed;
    playerState.direction = 'left';
  }

  if (input.isDown) {
    playerState.position.y += walkingSpeed;
    playerState.direction = 'left';
  }

  if (input.isUp) {
    playerState.position.y -= walkingSpeed;
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
