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

  console.log(getAverageColor().toString())
}

function getAverageColor() {
  loadPixels();

  const totalPixels = width * height;
  let redSum = 0;
  let greenSum = 0;
  let blueSum = 0;

  for (let i = 0; i < pixels.length; i += 4) {
    redSum += pixels[i];
    greenSum += pixels[i+1];
    blueSum += pixels[i+2];
  }

  let avgRed = redSum / totalPixels;
  let avgGreen = greenSum / totalPixels;
  let avgBlue = blueSum / totalPixels;

  return color(((avgRed + avgGreen + avgBlue)/3));
}