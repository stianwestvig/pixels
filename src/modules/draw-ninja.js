import { drawLine } from './draw-helpers.js';

export function drawNinja(figure) {
  const theme = figure.theme;
  drawLine({ ...figure, row: 0 }, ['transparent', 'transparent', 'transparent', theme.main, theme.main, 'transparent', 'transparent', 'transparent']);
  drawLine({ ...figure, row: 1 }, ['transparent', theme.main, theme.main, theme.main, theme.main, theme.main, theme.main, 'transparent']);
  drawLine({ ...figure, row: 2 }, ['transparent', theme.main, theme.skin, 'black', theme.skin, 'black', theme.main, 'transparent']);
  drawLine({ ...figure, row: 3 }, [theme.main, theme.main, theme.main, theme.main, theme.main, theme.main, theme.main, theme.main]);
  drawLine({ ...figure, row: 4 }, ['transparent', theme.main, theme.main, theme.main, theme.main, theme.main, theme.main, 'transparent']);
  drawLine({ ...figure, row: 5 }, ['transparent', theme.main, theme.main, theme.main, theme.main, theme.main, theme.main, 'transparent']);
  drawLine({ ...figure, row: 6 }, ['transparent', 'transparent', theme.main, 'transparent', 'transparent', theme.main, 'transparent', 'transparent']);
  drawLine({ ...figure, row: 7 }, ['transparent', 'transparent', theme.main, 'transparent', 'transparent', theme.main, 'transparent', 'transparent']);
}

export function drawNinjaWalking1(figure) {
  const theme = figure.theme;
  drawLine({ ...figure, row: 0 }, ['transparent', 'transparent', 'transparent', theme.main, theme.main, 'transparent', 'transparent', 'transparent']);
  drawLine({ ...figure, row: 1 }, ['transparent', theme.main, theme.main, theme.main, theme.main, theme.main, theme.main, 'transparent']);
  drawLine({ ...figure, row: 2 }, ['transparent', theme.main, theme.skin, 'black', theme.skin, 'black', theme.main, 'transparent']);
  drawLine({ ...figure, row: 3 }, [theme.main, theme.main, theme.main, theme.main, theme.main, theme.main, theme.main, theme.main]);
  drawLine({ ...figure, row: 4 }, ['transparent', theme.main, theme.main, theme.main, theme.main, theme.main, theme.main, 'transparent']);
  drawLine({ ...figure, row: 5 }, ['transparent', theme.main, theme.main, theme.main, theme.main, theme.main, theme.main, 'transparent']);
  drawLine({ ...figure, row: 6 }, ['transparent', 'transparent', theme.main, 'transparent', 'transparent', theme.main, 'transparent', 'transparent']);
  drawLine({ ...figure, row: 7 }, ['transparent', 'transparent', 'transparent', 'transparent', 'transparent', theme.main, 'transparent', 'transparent']);
}

export function drawNinjaWalking2(figure) {
  const theme = figure.theme;
  drawLine({ ...figure, row: 0 }, ['transparent', 'transparent', 'transparent', theme.main, theme.main, 'transparent', 'transparent', 'transparent']);
  drawLine({ ...figure, row: 1 }, ['transparent', theme.main, theme.main, theme.main, theme.main, theme.main, theme.main, 'transparent']);
  drawLine({ ...figure, row: 2 }, ['transparent', theme.main, theme.skin, 'black', theme.skin, 'black', theme.main, 'transparent']);
  drawLine({ ...figure, row: 3 }, [theme.main, theme.main, theme.main, theme.main, theme.main, theme.main, theme.main, theme.main]);
  drawLine({ ...figure, row: 4 }, ['transparent', theme.main, theme.main, theme.main, theme.main, theme.main, theme.main, 'transparent']);
  drawLine({ ...figure, row: 5 }, ['transparent', theme.main, theme.main, theme.main, theme.main, theme.main, theme.main, 'transparent']);
  drawLine({ ...figure, row: 6 }, ['transparent', 'transparent', theme.main, 'transparent', 'transparent', theme.main, 'transparent', 'transparent']);
  drawLine({ ...figure, row: 7 }, ['transparent', 'transparent', theme.main, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent']);
}

export const ninjaBlue = {
  theme: {
    main: '#92DCE5',
    skin: '#FFA07A'
  }
};

export const ninjaDark = {
  theme: {
    main: '#2B303A',
    skin: '#FFA07A'
  }
};

export const ninjaRed = {
  theme: {
    main: '#D64933',
    skin: '#FFA07A'
  }
};