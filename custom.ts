class Point { // CLASS
	//define the shape of object
	x: number;
	y: number;
	draw() {
		console.log('X: ' + this.x + 'Y: ' + this.y);
	}

	getDistance(another: Point) {}
}

let point = new Point();//point = OBJECT (instance of class)
point.x = 1;
point.y = 2;
point.draw();
