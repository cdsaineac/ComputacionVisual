function setup() {
    createCanvas(windowWidth, windowHeight);

    noLoop();
  }
  
function draw() {
    background("gray");
    for(i = 0; i < width; i++ ){
        for(j=0; j<height; j++){
            fill("white")
            circle((i*50)+25,(j*50)+25,10);
        }
    } 
    fill("black")
    for(i = 0; i < width; i++ ){
        for(j=0; j<height; j++){
            rect((i*50)-20,(j*50)-20,40,40);
        }
    }
}
