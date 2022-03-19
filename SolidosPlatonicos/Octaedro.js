
function setup() {
  var Canvas1 = createCanvas(400, 400,WEBGL);
  Canvas1.parent("Octaedro")
}
  
function draw() {
  background(220);
  
  orbitControl();

  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  
  let a = 100
  let h = (sqrt(6)/3)*a
  
  fill("red");
  beginShape(TESS);
  vertex(0, 0,0);
  vertex(0, a,0);
  vertex(a/2,a/2,h);
  endShape(CLOSE);
  endShape(CLOSE);
  
  fill("red");
  beginShape(TESS);
  vertex(0, 0,0);
  vertex(a,0,0);
  vertex(a/2,a/2,h);
  endShape(CLOSE);
  
  fill("red");
  beginShape(TESS);
  vertex(a,0,0);
  vertex(a,a,0);
  vertex(a/2,a/2,h);
  endShape(CLOSE);
  
  fill("red");
  beginShape(TESS);
  vertex(0, a,0);
  vertex(a, a,0);
  vertex(a/2,a/2,h);
  endShape(CLOSE);
  endShape(CLOSE);

  
  fill("blue");
  beginShape(TESS);
  vertex(0, 0,0);
  vertex(0, a,0);
  vertex(a/2,a/2,-h);
  endShape(CLOSE);
  endShape(CLOSE);
  
  fill("blue");
  beginShape(TESS);
  vertex(0, 0,0);
  vertex(a,0,0);
  vertex(a/2,a/2,-h);
  endShape(CLOSE);
  
  fill("blue");
  beginShape(TESS);
  vertex(a,0,0);
  vertex(a,a,0);
  vertex(a/2,a/2,-h);
  endShape(CLOSE);
  
  fill("blue");
  beginShape(TESS);
  vertex(0, a,0);
  vertex(a, a,0);
  vertex(a/2,a/2,-h);
  endShape(CLOSE);
  endShape(CLOSE);
}
