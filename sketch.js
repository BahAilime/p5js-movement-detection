let video;
let frame;

function setup() {
  createCanvas(400, 400);

  video = createCapture(VIDEO);
  video.size(width, height);

  video.hide();
}

function draw() {
  frame = video.get();
  if (mouseIsPressed) {
    frame.filter(INVERT)
  }
  image(frame, 0, 0, width, height);
}
