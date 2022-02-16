let j;
function setup() {
  // put setup code here
  createCanvas(400,400);
  j = 0;
}
  
function draw() {
  // put drawing code here
  background(200);


  strokeWeight(8)
  stroke(30, 226, 226)
  point(100,100)
  line(0,0,50,180)

  fill(149, 53, 83)
  rect(150,30, 20, 100);

  strokeWeight(3)
  fill(90, 166, 2)
  ellipse(150, 120, 20, 20)
  ellipse(200, 120, 20, 50)

  strokeWeight(0)

  fill(300, 142, 3)
  strokeJoin(ROUND)
  triangle(20, 20, 40, 40, 60, 20)
  arc(70,50, 40, 40, radians(0), radians(270))

  strokeWeight(2)
  fill(255, 255, 255)
  beginShape();
  vertex(300,50)
  vertex(350,100)
  vertex(300,15)
  vertex(250,150)
  endShape(CLOSE);

  strokeWeight(10)
  stroke(24, 41, 154)
  fill(30, 226, 226)
  fill(255, 255, 255)
  for (var i=0; i<=400; i++){
    x = i
    y = 300 + 20*Math.sin(PI*x/20)
    point(x,y)
  }
  var y = 200 + 20*Math.sin(PI*j/20)
  var r = 50 + 20*Math.sin(PI*j/20)
  j += 2
  strokeWeight(2)
  stroke(229, 147, 6)
  fill(107, 246, 0)
  ellipse(300, y, r, r)
}