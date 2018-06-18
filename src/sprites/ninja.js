const darkTheme = new Map([
  [0, 'transparent'],
  [1, '#2B303A'],
  [2, '#FFA07A'],
  [3, 'black'],
]);

const redTheme = new Map([
  [0, 'transparent'],
  [1, '#D64933'],
  [2, '#FFA07A'],
  [3, 'black'],
]);

const blueTheme = new Map([
  [0, 'transparent'],
  [1, '#3333FF'],
  [2, '#FFA07A'],
  [3, 'black'],
]);

export const themes = new Map([
  ['dark', darkTheme],
  ['red', redTheme],
  ['blue', blueTheme]
]);

const stillRight = [
  [0,0,0,1,1,0,0,0],
  [0,1,1,1,1,1,1,0],
  [0,1,2,3,2,3,1,0],
  [1,1,2,2,2,2,1,1],
  [1,1,1,1,1,1,1,1],
  [0,1,1,1,1,1,1,0],
  [0,1,1,1,1,1,1,0],
  [0,0,1,0,0,1,0,0],
  [0,0,1,0,0,1,0,0],
];
const stillLeft = stillRight.map(array => array.slice().reverse());

const walkingRight1 = [
  [0,0,0,1,1,0,0,0],
  [0,1,1,1,1,1,1,0],
  [0,1,2,3,2,3,1,0],
  [1,1,2,2,2,2,1,1],
  [1,1,1,1,1,1,1,1],
  [0,1,1,1,1,1,1,0],
  [0,1,1,1,1,1,1,0],
  [0,0,1,0,0,1,0,0],
  [0,0,0,0,0,1,0,0],
];
const walkingLeft1 = walkingRight1.map(array => array.slice().reverse());

const walkingRight2 = [
  [0,0,0,1,1,0,0,0],
  [0,1,1,1,1,1,1,0],
  [0,1,2,3,2,3,1,0],
  [1,1,2,2,2,2,1,1],
  [1,1,1,1,1,1,1,1],
  [0,1,1,1,1,1,1,0],
  [0,1,1,1,1,1,1,0],
  [0,0,1,0,0,1,0,0],
  [0,0,1,0,0,0,0,0],
];
const walkingLeft2 = walkingRight2.map(array => array.slice().reverse());

export const spriteSheet = new Map();
spriteSheet.set('standingRight', [stillRight]);
spriteSheet.set('standingLeft', [stillLeft]);
spriteSheet.set('walkingRight', [walkingRight1, walkingRight2]);
spriteSheet.set('walkingLeft', [walkingLeft1, walkingLeft2]);
