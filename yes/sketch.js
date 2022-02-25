var xoff = 0.1;
var yoff = 0.3;
var s = 3;
var c = 0;
var bg = 255;
var size = 30;

function windowResized() {
  let para = document.querySelector('.p5-container');
  let compStyles = window.getComputedStyle(para);
  let w = parseInt(compStyles.getPropertyValue('width'));
  let h = parseInt(compStyles.getPropertyValue('height'));
  resizeCanvas(w, h);
}

function setup() {
  frameRate(15);
  let para = document.querySelector('.p5-container');
  let compStyles = window.getComputedStyle(para);
  let w = parseInt(compStyles.getPropertyValue('width'));
  let h = parseInt(compStyles.getPropertyValue('height'));

  let canvas = createCanvas(w, h, WEBGL);
  canvas.parent('p5');
}

function draw() {
    
  
  background(bg);
  strokeWeight(s);

  for(let x = -800; x<width; x+=size){
    beginShape();
    stroke(c);
    noFill();
    for(let y = -1000; y<height; y+=size){
      let r = map(mouseX, 0, width, 15, 20);
      let n = noise(xoff)*r;
      let f = noise(yoff)*r;
      vertex(x+n, y+f);
      xoff++;
      yoff+= random(20);
    }
    endShape();

  }
  
 
}
