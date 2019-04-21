class Person {
	constructor(fullName, favColor) {
		this.name = fullName;
		this.favoriteColor = favColor;
	}

	greet()  {
		console.log("Yo!  " + this.name + ", I like " + this.favoriteColor + "!");
	}
}

module.exports = Person;