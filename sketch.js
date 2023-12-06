let video;

function setup() {
  createCanvas(400, 400);

  video = createCapture(VIDEO);
  video.size(width, height);

  video.hide();
}

function draw() {
  image(video.get(), 0, 0, width, height)
}
