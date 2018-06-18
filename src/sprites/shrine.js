export const theme = new Map([
  [0, 'transparent'],
  [1, '#D49959'],
  [2, '#886239'],
  [3, '#E4BD95'],
]);

const shrineSmall = [
  [0,0,0,3,1,0,0,3, 1, 2, 0, 0],
  [0,0,3,1,1,2,3,1, 0, 1, 2, 0],
  [0,1,1,1,1,1,2,0, 0, 0, 1, 2],
  [1,2,0,0,0,1,2,0, 0, 0, 1, 2],
  [1,2,0,0,0,1,2,0, 0, 0, 1, 2],
  [1,2,0,0,0,1,2,0, 0, 0, 1, 2],
  [1,2,0,0,0,1,2,0, 0, 0, 1, 2],
  [1,2,0,0,0,1,2,0, 0, 0, 1, 2],
  [1,2,0,0,0,1,2,0, 0, 0, 1, 2],
];

export const spriteSheet = new Map();
spriteSheet.set('shrineSmall', [shrineSmall]);
