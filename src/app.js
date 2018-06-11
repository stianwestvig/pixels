function init() {
  console.log('Loading pixels');

  const canvas = document.createElement('canvas');
  canvas.width = 800;
  canvas.height = 600;

  document.body.appendChild(canvas);
  return canvas;
}

const canvas = init();
const c = canvas.getContext('2d');

c.fillStyle = 'black';
c.fillRect(40, 40, 10, 10);
