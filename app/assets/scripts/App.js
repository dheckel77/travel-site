var $ = require('jquery');
var Person = require('./modules/Person');

class Adult extends Person {
	payTaxes() {
		console.log(this.name + " now owes $0.");
	}
}

alert("TEsting 123!");

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith","green");
jane.greet();
jane.payTaxes();

$("h1").remove();