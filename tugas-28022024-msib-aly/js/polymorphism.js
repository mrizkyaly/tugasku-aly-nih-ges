class Shape {
	area() {
		console.log("Area method from Shape class.");
	}
}

class Rectangle extends Shape {
	constructor(length, width) {
		super();
		this.length = length;
		this.width = width;
	}

	area() {
		console.log("Area of Rectangle: ", this.length * this.width);
	}
}

class Circle extends Shape {
	constructor(radius) {
		super();
		this.radius = radius;
	}

	area() {
		console.log("Area of Circle: ", Math.PI * this.radius ** 2);
	}
}

const shapes = [new Rectangle(4, 5), new Circle(3)];

shapes.forEach((shape) => {
	shape.area(); // Output: Area of Rectangle: 20, Area of Circle: 28.274333882308138
});

// POLYMORPHISM

// Polymorphism adalah konsep di mana objek dapat memiliki banyak bentuk,
// artinya objek dari class tertentu dapat digunakan sebagai instance dari class lain.
