import { drawAnySprite } from '../modules/draw-helpers.js';
import { spriteSheet } from '../sprites/shrine.js';

function selectSpriteToDraw() {
  return spriteSheet.get('shrineSmall')[0];
}

export function drawShrineSprite(state) {
  const { theme } = state;
  const themeMap = new Map();

  themeMap.set(0, 'transparent');
  themeMap.set(1, theme.main);
  themeMap.set(2, theme.dark);
  themeMap.set(3, theme.light);

  drawAnySprite(selectSpriteToDraw(state), { ...state, themeMap });
}
