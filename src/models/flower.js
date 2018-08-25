import { drawAnySprite } from '../lib/draw-helpers.js';
import {
  spriteSheet,
  pinkTheme,
  purpleTheme
} from '../sprites/flower.js';

export function drawPinkFlowerSprite(state) {
  drawAnySprite(spriteSheet.get('flower')[0], { ...state, themeMap: pinkTheme });
}

export function drawPurpleFlowerSprite(state) {
  drawAnySprite(spriteSheet.get('flower')[0], { ...state, themeMap: purpleTheme });
}
