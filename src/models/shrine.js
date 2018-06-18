import { drawAnySprite } from '../lib/draw-helpers.js';
import { spriteSheet, theme } from '../sprites/shrine.js';

export function drawShrineSprite(state) {
  drawAnySprite(spriteSheet.get('shrine')[0], { ...state, themeMap: theme });
}
