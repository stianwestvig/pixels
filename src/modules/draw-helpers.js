export function drawScaled(context, x, y) {
  const { c,
    xOffset = 0,
    yOffset = 0,
    scale = 1,
    fillStyle = 'black'
  } = context;
  c.fillStyle = fillStyle;
  c.fillRect(x * scale + xOffset, y * scale + yOffset, scale, scale);
}

export function drawLine(context, pixels) {
  pixels.forEach((pixel, index) => drawScaled(
    { ...context, fillStyle: pixel, yOffset: context.yOffset + context.row * context.scale }, index, 0)
  );
}