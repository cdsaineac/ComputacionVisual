let lumaShader;
let img;
let grey_scale;

function preload() {
  lumaShader = readShader('./sketches/shaders/luma.frag', {matrices: Tree.NONE, varyings: Tree.texcoords2 });
  // image source: https://en.wikipedia.org/wiki/HSL_and_HSV#/media/File:Fire_breathing_2_Luc_Viatour.jpg
  img = loadImage('./sketches/shaders/fire_breathing.jpg');
}

function setup() {
  createCanvas(700, 500, WEBGL);
  noStroke();
  textureMode(NORMAL);
  shader(lumaShader);
  lumaShader.setUniform('texture', img);
  grey_scale = createCheckbox('luma', false);
  grey_scale.position(10, 10);
  grey_scale.style('color', 'white');
  grey_scale.input(() => lumaShader.setUniform('grey_scale', grey_scale.checked()));
  lumaShader.setUniform('texture', img);
}
  
function draw() {
  background(0);
  quad(1, 1, -1, 1, -1, -1, 1, -1);
  /*beginShape();
    vertex(1, -1);
    vertex(-1, -1);
    vertex(-1, 1);
    vertex(1, 1);
  endShape(CLOSE);*/
}