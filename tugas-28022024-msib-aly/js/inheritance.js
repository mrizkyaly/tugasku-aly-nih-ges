// Base class
//bikin 2 class
class Animal {
	constructor(name) {
		this.name = name;
	}

	speak() {
		console.log(`${this.name} makes a noise.`);
	}
}

// Derived class (inherit from Animal)
class Dog extends Animal {
	constructor(name) {
		super(name); // Call the super constructor
	}

	speak() {
		console.log(`${this.name} barks.`);
	}
}

const dog = new Dog("Buddy");
dog.speak(); // Output: Buddy barks.

// INHERITANCE

// Inheritance adalah konsep di mana sebuah class dapat mewarisi properti dan metode dari class lain.
// Ini memungkinkan untuk membuat hierarki class yang memungkinkan untuk mengorganisir dan memanage kode dengan lebih baik.
