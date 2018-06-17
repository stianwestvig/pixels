export function handleKeyUp(event, input) {
  if (event.keyCode === 68) {
    // D key
    input.isRight = false;

  }
  if (event.keyCode === 65) {
    // A key
    input.isLeft = false;
  }
}

export function handleKeyDown(event, input) {
  console.log(event.keyCode);

  if (event.keyCode === 68) {
    // D key
    input.isRight = true;

  }
  if (event.keyCode === 65) {
    // A key
    input.isLeft = true;
  }
}