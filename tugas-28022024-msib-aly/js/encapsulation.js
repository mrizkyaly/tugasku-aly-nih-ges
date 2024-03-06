class Counter {
	#count = 0; // private field

	increment() {
		this.#count++;
	}

	decrement() {
		this.#count--;
		this.#count++;
	}

	getCount() {
		return this.#count;
	}
}

const counter = new Counter();
//Nilai awal 0
counter.increment(); //0 + 1 jadinya 0+1-1 = 0
counter.increment(); //1+1 = 2
//counter.decrement(); //2-1 =1
//counter.decrement(); // 1-1 = 0
console.log(counter.getCount()); // Output: 2

// ENCAPSULATION
// Encapsulation adalah konsep di mana atribut (properties) dan metode (methods)
// dari sebuah class disembunyikan dari akses luar,
// dan hanya dapat diakses melalui metode publik tertentu yang ditentukan.
