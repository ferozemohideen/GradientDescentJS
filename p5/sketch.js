var s = function(p) {
	var points = [];
	var m = 1;
	var b = 0;


	p.setup = function() {
		p.createCanvas(600, 400);		
	}

	p.draw = function() {
		p.background(85);
		for (let point of points) {
			var x = p.map(point.x, 0, 1, 0, p.width);
			var y = p.map(point.y, 1, 0, 0, p.height);
			p.fill(255);
			p.stroke(255);
			p.ellipse(x, y, 10, 10);
		};
		if (points.length > 1) {
			p.linreg();
			p.drawline();
		}
	  	
	}
	p.mousePressed = function() {
		if (p.mouseX < p.width && p.mouseX > 0 && p.mouseY > 0 && p.mouseY < p.height) {
			var x = p.map(p.mouseX, 0, p.width, 0, 1);
			var y = p.map(p.mouseY, 0, p.height, 1, 0);
			var newPoint = {
				x : x,
				y : y
			};
			points.push(newPoint);
		}
	}

	p.drawline = function(){
		var x1 = 0;
		var y1 = m * x1 + b;
		var x2 = 1;
		var y2 = m * x2 + b;

		x1 = p.map(x1, 0, 1, 0, p.width);
		y1 = p.map(y1, 0, 1, p.height, 0);
		x2 = p.map(x2, 0, 1, 0, p.width);
		y2 = p.map(y2, 0, 1, p.height, 0);

		p.stroke(255);
		p.strokeWeight(2);
		p.line(x1, y1, x2, y2);
	}

	p.linreg = function() {
		var sumx = 0;
		var sumy = 0;
		for (let point of points) {
			sumx += point.x;
			sumy += point.y;
		};
		var meanx = sumx/points.length;
		var meany = sumy/points.length;
		var sumnum = 0;
		var sumden = 0;
		for (let point of points) {
			sumnum += (point.x-meanx)*(point.y-meany);
			sumden += Math.pow((point.x-meanx), 2); 
		};
		m = sumnum/sumden;
		b = meany - m*meanx;
	}
	p.reset = function() {
		points = [];
	}
}
var myp5 = new p5(s, 'lcanvas');

var g = function(p) {
	var points = [];
	var learning_rate = 0.01;
	var m = 1;
	var b = 0;


	p.setup = function() {
		p.createCanvas(600, 400);		
	}

	p.draw = function() {
		p.background(85);
		for (let point of points) {
			var x = p.map(point.x, 0, 1, 0, p.width);
			var y = p.map(point.y, 1, 0, 0, p.height);
			p.fill(255);
			p.stroke(255);
			p.ellipse(x, y, 10, 10);
		};
		if (points.length > 1) {
			p.gradientDescent();
			p.drawline();
		}
	  	
	}
	p.mousePressed = function() {
		if (p.mouseX < p.width && p.mouseX > 0 && p.mouseY > 0 && p.mouseY < p.height) {
			var x = p.map(p.mouseX, 0, p.width, 0, 1);
			var y = p.map(p.mouseY, 0, p.height, 1, 0);
			var newPoint = {
				x : x,
				y : y
			};
			points.push(newPoint);
		}
	}

	p.drawline = function(){
		var x1 = 0;
		var y1 = m * x1 + b;
		var x2 = 1;
		var y2 = m * x2 + b;

		x1 = p.map(x1, 0, 1, 0, p.width);
		y1 = p.map(y1, 0, 1, p.height, 0);
		x2 = p.map(x2, 0, 1, 0, p.width);
		y2 = p.map(y2, 0, 1, p.height, 0);

		p.stroke(255);
		p.strokeWeight(2);
		p.line(x1, y1, x2, y2);
	}

	p.gradientDescent = function() {
		for (let point of points) {
			var error = point.y - (m*point.x+b);
			m = m + error*point.x*learning_rate;
			b = b + error*learning_rate;
		}
		
	}
	p.reset = function() {
		points = [];
	}
}
var myp52 = new p5(g, 'rcanvas');