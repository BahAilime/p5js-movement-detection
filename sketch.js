let video;
let frame;
let frames = [];

function setup() {
  createCanvas(400, 400);

  video = createCapture(VIDEO);
  video.size(width, height);

  video.hide();
}

function draw() {
  frames.push(video.get());

  if (frames.length > 5) {
    frames.shift();
  }

  frame = frames[0];
  image(video.get(), 0, 0, width, height);

  frame.filter(INVERT)
  tint(255, 40)
  image(frames[0], 0, 0, width, height);
}
