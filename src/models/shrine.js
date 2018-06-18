import { drawAnySprite } from '../modules/draw-helpers.js';
import { spriteSheet, theme } from '../sprites/shrine.js';

export function drawShrineSprite(state) {
  drawAnySprite(spriteSheet.get('shrineSmall')[0], { ...state, themeMap: theme });
}
