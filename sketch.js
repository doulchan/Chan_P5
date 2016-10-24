var bubbles = [];
var timer;
var gameover = false;

function setup() {
  createCanvas(400, 400);
  addBubbles();
  timer = setInterval(addBubbles, 10000); // addBubbles every 10sec

}

function draw() {
  background(0);
  fill(255);
  rectMode(CENTER);
  rect(mouseX, mouseY, 15, 15);


  if (gameover == false) {
    for (var i = 0; i < bubbles.length; i++) {
      bubbles[i].update();
      bubbles[i].bounce();
      bubbles[i].display();
      if (bubbles[i].checkRect(15)) {
        gameover = true;
      }

      for (var j = 0; j < bubbles.length; j++) {
        if (i != j && bubbles[i].intersects(bubbles[j])) {
          bubbles[i].changeColor();
          bubbles[j].changeColor();
        }
      }
    }
  } else {
    textAlign(CENTER);
    textSize(55);
    text("GAME OVER", width / 2, height / 2);
    fill(0, 102, 153);
    //println("game's over"); 
  }
}

function addBubbles() {
  // println('im adding bubbles ' + frameCount);
  for (var i = 0; i < 5; i++) {
    var temporaryBubble = new Bubble(random(width), random(height), random(2), random(2));
    bubbles.push(temporaryBubble);
  }
}