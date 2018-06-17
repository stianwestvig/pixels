import { drawLine } from './draw-helpers.js';

export function drawStructure(model) {
  const theme = model.theme;
  const themeMap = new Map();
  themeMap.set(0, 'transparent');
  themeMap.set(1, theme.main);
  themeMap.set(2, theme.dark);
  themeMap.set(3, theme.light);

  const matrix = [
    [0,0,0,3,1,0,0,0],
    [0,0,3,1,1,2,0,0],
    [0,1,1,1,1,1,2,0],
    [1,2,0,0,0,1,2,0],
    [1,2,0,0,0,1,2,0],
    [1,2,0,0,0,1,2,0],
    [1,2,0,0,0,1,2,0],
    [1,2,0,0,0,1,2,0],
    [1,2,0,0,0,1,2,0],
  ];

  matrix.forEach((line, index) => drawLine(
    { ...model, row: index },
    line.map(key => themeMap.get(key))
  ));

}

export const woodenTheme = {
  main: '#D49959',
  dark: '#886239',
  light: '#E4BD95'
};