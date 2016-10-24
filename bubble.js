function Bubble(x, y, xSpeed, ySpeed) {
  this.x = x;
  this.y = y;
  this.r = 4;
  this.col = color(255);

  this.xSpeed = xSpeed;
  this.ySpeed = ySpeed;
  

  this.changeColor = function() {
    this.col = color(random(255), random(255), random(255));
  };


  this.intersects = function(other) {
    var d = dist(this.x, this.y, other.x, other.y);
    if (d < this.r + other.r) {
      return (true);
    } else {
      return (false);
    }
  };

  this.checkRect = function(size){
    var d2 = dist(this.x, this.y, mouseX, mouseY);
    if (d2 < this.r + size/2) {
      return (true);
    } else {
      return (false);
    }
  };
  
  
  
  this.update = function() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  };


  this.bounce = function() {
    if (this.x < 0 || this.x > width) {
      this.xSpeed *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.ySpeed *= -1;
    }
  };

  
  this.display = function() {
    noStroke();
    fill(this.col);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  };
}