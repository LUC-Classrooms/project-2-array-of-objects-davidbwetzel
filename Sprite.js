/**
 * Add code for your class constructor in this file
 */
function Sprite (tempX, tempY){
    this.x = tempX;
    this.y = tempY;
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-2, 2);
  
    this.move = function(){
      this.x += this.xSpeed;
      this.y += this.ySpeed;
      if(this.x > width || this.x < 0){
        this.xSpeed *= -1;
      }
      if(this.y > height || this.y < 0){
        this.ySpeed *= -1;
      }
    }
  
    this.display = function(){
      push();// create a new lyer
      translate(this.x, this.y); // move the layer's origin point on the canvas
      rectMode(CENTER); // center the rectangle
      fill(255, 0, 0, 50); // transparent red
      rect(0, 0, 75); // rectangle
      ellipse(-20, -10, 5, 10)
      ellipse(20, -10, 5, 10)
      pop(); // dispose of the layer
    }
  
  }
  