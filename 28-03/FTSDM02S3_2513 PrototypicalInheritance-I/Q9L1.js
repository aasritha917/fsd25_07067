// Constructor function for Person
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding introduce method to Person prototype
Person.prototype.introduce = function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
};

// Constructor function for Employee, inheriting from Person
function Employee(name, age, jobTitle) {
    Person.call(this, name, age); 
    this.jobTitle = jobTitle;
}

// Setting up prototype inheritance
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;


// Adding work method to Employee prototype
Employee.prototype.work = function() {
    console.log(`${this.name} is working as a ${this.jobTitle}.`);
};

const person1 = new Person("Alice", 30);
const employee1 = new Employee("Bob", 25, "Software Engineer");

person1.introduce(); 
employee1.introduce(); 
employee1.work(); 
