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

export const blueNinjaTheme = {
  main: '#3333FF',
  skin: '#FFA07A',
  eyes: 'black'
};

export const darkNinjaTheme = {
  main: '#2B303A',
  skin: '#FFA07A',
  eyes: 'black'
};

export const redNinjaTheme = {
  main: '#D64933',
  skin: '#FFA07A',
  eyes: 'black'
};