function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (mouseIsPressed) {
    fill(color(130, 252, 126));
  } else {
    fill(color(252, 126, 126));
  }
  rect(0, 0, width, height)
}
