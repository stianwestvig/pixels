import { drawAnySprite } from '../modules/draw-helpers.js';
import { spriteSheet } from '../sprites/ninja.js';

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
  const themeMap = new Map();

  themeMap.set(0, 'transparent');
  themeMap.set(1, theme.main);
  themeMap.set(2, theme.skin);
  themeMap.set(3, theme.eyes);

  drawAnySprite(selectSpriteToDraw(state), { ...state, themeMap });
}
