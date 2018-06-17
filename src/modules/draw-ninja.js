import { drawLine, drawMatrix } from './draw-helpers.js';

export function drawNinja(model) {
  const theme = model.theme;
  const themeMap = new Map();
  themeMap.set(0, 'transparent');
  themeMap.set(1, theme.main);
  themeMap.set(2, theme.skin);
  themeMap.set(3, theme.eyes);

  const matrix = [
    [0,0,0,1,1,0,0,0],
    [0,1,1,1,1,1,1,0],
    [0,1,2,3,2,3,1,0],
    [1,1,1,1,1,1,1,1],
    [0,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,0],
    [0,0,1,0,0,1,0,0],
    [0,0,1,0,0,1,0,0],
  ];

  drawMatrix(matrix, { ...model, themeMap });
}

export function drawNinjaWalking1(model) {
  const theme = model.theme;
  const themeMap = new Map();
  themeMap.set(0, 'transparent');
  themeMap.set(1, theme.main);
  themeMap.set(2, theme.skin);
  themeMap.set(3, theme.eyes);

  const matrix = [
    [0,0,0,1,1,0,0,0],
    [0,1,1,1,1,1,1,0],
    [0,1,2,3,2,3,1,0],
    [1,1,1,1,1,1,1,1],
    [0,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,0],
    [0,0,1,0,0,1,0,0],
    [0,0,0,0,0,1,0,0],
  ];

  drawMatrix(matrix, { ...model, themeMap });
}

export function drawNinjaWalking2(model) {
  const theme = model.theme;
  const themeMap = new Map();
  themeMap.set(0, 'transparent');
  themeMap.set(1, theme.main);
  themeMap.set(2, theme.skin);
  themeMap.set(3, theme.eyes);

  const matrix = [
    [0,0,0,1,1,0,0,0],
    [0,1,1,1,1,1,1,0],
    [0,1,2,3,2,3,1,0],
    [1,1,1,1,1,1,1,1],
    [0,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,0],
    [0,0,1,0,0,1,0,0],
    [0,0,1,0,0,0,0,0],
  ];

  drawMatrix(matrix, { ...model, themeMap });
}

export const blueNinjaTheme = {
  main: '#3333FF',
  skin: '#FFA07A',
  eyes: 'black'
};

export const darkNinjaTheme = {
  main: '#2B303A',
  skin: '#FFA07A',
  eyes: 'black'
};

export const redNinjaTheme = {
  main: '#D64933',
  skin: '#FFA07A',
  eyes: 'black'
};