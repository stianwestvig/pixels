function drawScaledPixel(context, x, y) {
  const {
    c,
    xOffset = 0,
    yOffset = 0,
    scale = 1,
    fillStyle = 'black'
  } = context;
  c.fillStyle = fillStyle;
  c.fillRect(x * scale + xOffset, y * scale + yOffset, scale, scale);
}

export function drawLine(context, pixels) {
  pixels.forEach((pixel, index) => drawScaledPixel(
    { ...context, fillStyle: pixel, yOffset: context.yOffset + context.row * context.scale }, index, 0)
  );
}

export function drawMatrix(matrix, model) {
  const { themeMap } = model;
  matrix.forEach((line, index) => drawLine(
    { ...model, row: index },
    line.map(key => themeMap.get(key))
  ));
}