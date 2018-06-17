import {
  drawNinja,
  drawNinjaWalking1,
  drawNinjaWalking2,
  darkNinjaTheme,
  redNinjaTheme
} from '../modules/draw-ninja.js';

export function animateNinja(state) {
  const {
    animationCounter,
    c,
    position = {
      scale: 10,
      x: 0,
      y: 0
    },
    theme,
    walking,
  } = state;

  if (walking) {
    if (animationCounter < 30) {
      drawNinjaWalking1({
        c,
        xOffset: position.x,
        yOffset: position.y,
        scale: position.scale,
        theme
      });
    } else {
      drawNinjaWalking2({
        c,
        xOffset: position.x,
        yOffset: position.y,
        scale: position.scale,
        theme
      });
    }
  } else {
    drawNinja({
      c,
      xOffset: position.x,
      yOffset: position.y,
      scale: position.scale,
      theme
    });
  }
}