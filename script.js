/*
 Project 2 - Array of Objects
 Name: 
 Comments: 
 */

/*** 
 * Please see the full assignment instructions in COMP 125 on Sakai (or under the "Markdown" tab)
 * Make an array of objects of the same type. Start by creating an object constructor funciton. Test it with individual object instances. Then create an array and initialize it with objects created from your constructor.
 * Use the draw() function to display and move your objects independently on the canvas.
***/

// Global Variables go here
var sprites = new Array(10);

function setup(){
  // this function will run once
  createCanvas(600, 400); // create a 600 x 400 pixel drawing canvas

  for(let i = 0; i < sprites.length; i++){
    sprites[i] = new Sprite(random(width), random(height));
    console.log(sprites[i]);
  }
}

function draw(){
  background(200); //light gray background
  for(let i = 0; i < sprites.length; i++){
    sprites[i].display();
    sprites[i].move();
  }
}

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
    pop(); // dispose of the layer
  }

}
