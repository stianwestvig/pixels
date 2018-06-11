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

function pixel(context, x, y) {
  drawScaled(context, x, y)
}

const canvas = init();
const c = canvas.getContext('2d');

const rowContext = { c, xOffset: 60, yOffset: 60, scale: 10, row: 0 };
drawLine(rowContext, ['INDIANRED', 'LIGHTCORAL', 'LIGHTCORAL', 'SALMON', 'DARKSALMON']);
drawLine({ ...rowContext, row: 1 }, ['INDIANRED', 'BLACK', 'LIGHTCORAL', 'BLACK', 'DARKSALMON']);
drawLine({ ...rowContext, row: 2 }, ['INDIANRED', 'LIGHTCORAL', 'LIGHTCORAL', 'SALMON', 'DARKSALMON']);