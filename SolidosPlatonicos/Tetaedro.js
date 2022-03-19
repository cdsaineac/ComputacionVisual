const s = ( sketch ) => {

  sketch.setup = () => {
    sketch.createCanvas(400, 400,WEBGL);
  };

  sketch.draw = () => {
    sketch.background(220);
    sketch.orbitControl();
    sketch.rotateZ(frameCount * 0.01);
    sketch.rotateX(frameCount * 0.01);
    sketch.rotateY(frameCount * 0.01);
    
    let a = 100
    let hBase = (sqrt(3)/2)*a
    let h = (sqrt(6)/3)*a
    
    sketch.fill("red");
    sketch.beginShape(TESS);
    sketch.vertex(0, 0,0);
    sketch.vertex(0, a,0);
    sketch.vertex(a/2,hBase,0);
    sketch.endShape(CLOSE);
    
    sketch.fill("blue");
    sketch.beginShape(TESS);
    sketch.vertex(0, 0,0);
    sketch.vertex(0, a,0);
    sketch.vertex(a/2,hBase/3,h);
    sketch.endShape(CLOSE);
    
    sketch.fill("yellow");
    sketch.beginShape(TESS);
    sketch.vertex(0, 0,0);
    sketch.vertex(a/2,hBase,0);
    sketch.vertex(a/2,hBase/3,h);
    sketch.endShape(CLOSE);
    
    sketch.fill("green");
    sketch.beginShape(TESS);
    sketch.vertex(0, a,0);
    sketch.vertex(a/2,hBase,0);
    sketch.vertex(a/2,hBase/3,h);
    sketch.endShape(CLOSE);

  };
};

let myp5 = new p5(s, 'Tetaedro');

  

