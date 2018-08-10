var x = 50;
var y = 50;

function setup() {
	createCanvas(640, 480);
	
}

function draw() {
	background(85, 85, 85);
	fill(255);
	ellipse(x,y,20,20);
	x = x+1;
	y = y+1;

  	
}
function mousePressed() {
	x = 50;
	y = 50;
}