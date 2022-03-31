var zoom
var check

function preload(){
    zoom = document.getElementById("slider").value;
    check = document.getElementById("show").checked;
    console.log(check)
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop(); 
  }
  
function draw() {
    background("white");
    fill(0)
    if(check){  
        for(i = 0; i < width; i++ ){
            for(j=0; j<height; j++){
                rect((i*50)+1,(j*50)+1,zoom,zoom)
            }
        }
    }
}

function handleChange(value){
    zoom = value
    redraw()
}  
function handleClick(value){
    check = value
    console.log(check)
    redraw()
}  