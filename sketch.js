function setup() {

    createCanvas(667, 1000);
  
    background("black");
  
  }
  
  function draw() {
  
    stroke("yellow");
  
    fill("red");
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
  
      rect(mouseX, mouseY, 20, 35);
  
    }
  
  }
  
  
  
  
