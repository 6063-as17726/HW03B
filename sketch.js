let maxDiam = 50;
let minDiam = maxDiam / 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  strokeWeight(0);
  fill("red");
  randomSeed(100);

  for (let xpos = 0; xpos <= windowWidth; xpos += random(50, 75)) {
    for (let ypos = 0; ypos <= windowHeight; ypos += random(50,100)) {
      let x = random(minDiam, maxDiam);
      let y = random (minDiam, maxDiam);
      ellipse(xpos, ypos, x, y);
    }
  }
}
