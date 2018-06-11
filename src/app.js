function init() {
  console.log('Loading pixels');

  const canvas = document.createElement('canvas');
  canvas.width = 800;
  canvas.height = 600;

  document.body.appendChild(canvas);
  return canvas;
}

function drawScaled(context, x, y) {
  const { c,
    xOffset = 0,
    yOffset = 0,
    scale = 1,
    fillStyle = 'black'
  } = context;
  c.fillStyle = fillStyle;
  c.fillRect(x * scale + xOffset, y * scale + yOffset, scale, scale);
}

function drawLine(context, pixels) {
  pixels.forEach((pixel, index) => drawScaled(
    { ...context, fillStyle: pixel, yOffset: context.yOffset + context.row * context.scale }, index, 0)
  );
}

const canvas = init();
const c = canvas.getContext('2d');

function drawNinja(figure) {
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

const ninjaBlue = {
  c,
  xOffset: 60,
  yOffset: 60,
  scale: 10,
  theme: {
    main: '#92DCE5',
    skin: '#FFA07A'
  }
};
drawNinja(ninjaBlue);

const ninjaDark = {
  c,
  xOffset: 160,
  yOffset: 60,
  scale: 10,
  theme: {
    main: '#2B303A',
    skin: '#FFA07A'
  }
};
drawNinja(ninjaDark);

const ninjaRed = {
  c,
  xOffset: 260,
  yOffset: 60,
  scale: 10,
  theme: {
    main: '#D64933',
    skin: '#FFA07A'
  }
};
drawNinja(ninjaRed);