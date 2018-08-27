export const pinkTheme = new Map([
  [0, 'transparent'],
  [1, '#FF82A9'], // pink
  [2, '#7F95D1'], // blue
  [3, '#FFC0BE'], // beige
]);

export const purpleTheme = new Map([
  [0, 'transparent'],
  [1, '#643173'], // purple
  [2, '#B4DC7F'], // green
  [3, '#FADF7F'], // yellow
]);

const flower = [
  [0,0,0,0,0,0,0,0],
  [0,0,0,1,1,0,0,0],
  [0,0,1,1,1,1,0,0],
  [0,1,1,3,3,1,1,0],
  [0,1,1,3,3,1,1,0],
  [0,0,1,1,1,2,0,0],
  [0,0,0,1,1,0,2,0],
  [0,0,0,0,0,0,2,0],
  [0,0,0,0,0,0,2,0],
];

export const spriteSheet = new Map();
spriteSheet.set('flower', [flower]);
