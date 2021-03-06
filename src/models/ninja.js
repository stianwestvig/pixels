import { drawAnySprite } from '../lib/draw-helpers.js';
import { spriteSheet, themes } from '../sprites/ninja.js';

function selectSpriteToDraw(state) {
  const { walking, direction, animationCounter } = state;

  if (walking) {
    if (animationCounter < 30) {
      return (direction === 'left')
        ? spriteSheet.get('walkingLeft')[0]
        : spriteSheet.get('walkingRight')[0]
    } else {
      return (direction === 'left')
      ? spriteSheet.get('walkingLeft')[1]
      : spriteSheet.get('walkingRight')[1]
    }
  } else {
    // standing still
    return (direction === 'left')
    ? spriteSheet.get('standingLeft')[0]
    : spriteSheet.get('standingRight')[0]
  }
}

export function drawNinjaSprite(state) {
  const { theme } = state;
  const themeMap = themes.get(theme);

  drawAnySprite(selectSpriteToDraw(state), { ...state, themeMap });
}
