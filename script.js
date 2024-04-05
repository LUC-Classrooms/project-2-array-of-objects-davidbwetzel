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
var blob1;

function setup(){
  // this function will run once
  createCanvas(600, 400); // create a 600 x 400 pixel drawing canvas
  blob1 = new Blob();


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
  blob1.display();
  blob1.move();
}

function Blob(){
  this.x = random(width);
  this.y = random(height);
  this.xSpeed = random(-2, 2);
  this.ySpeed = random(-2, 2);

  this.move = function(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if(this.x < 0 || this.x > width){
      this.xSpeed *= -1;
    }

    if(this.y < 0 || this.y > height){
      this.ySpeed *= -1;
    }
  }

  this.display = function(){
    push();
    translate(this.x, this.y);
    fill (0);
    ellipse(0, 0, 50);
    pop();
  }
}