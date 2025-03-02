let img;

function setup() {
  createCanvas(1400, 975);
  img=loadImage("data/1.jpeg")
  textSize(20)
}

function draw() { 
  text("Press b, g, i and Enter to see the effects. press Esc to reset", 20, 20)
  image(img,5,30)
  keyPressed()
} 

function keyPressed(){
  //blue effect
    if (key ==="b" || key ==="B"){
      tint(58, 109, 140)
      image(img,0,0)
    }
    //crazy effect
    else if (key ==="Enter"){
      for(let x=0; x<width; x+=10){
        for(let y=0; y<height; y+=10){
          let color = img.get(x,y)
          //stroke(color)
          fill(color)
          line(mouseX, mouseY,x+random(-5,5),y+random(-5, 5))          
        }
      }
    }
    //gray filter
    else if(key==="g" || key==="G"){
      img.filter(GRAY)
    } 
    //invert colors   
    else if(key==="i" || key==="I"){
      img.filter(INVERT)
      
    }
    //escape
    else if(key ==="Escape"){
      image(img,0,0)
    }
}








