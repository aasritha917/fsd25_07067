function Car(make, model, year, type) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.type = type;
    this.isAvailable = true;
}

function Customer(name) {
    this.name = name;
    this.rentedCars = [];
}

Customer.prototype.rentCar = function(car) {
    if (car.isAvailable) {
        car.isAvailable = false;
        this.rentedCars.push(car);
        console.log(`${this.name} rented a ${car.make} ${car.model}.`);
    } else {
        console.log(`Sorry, the ${car.make} ${car.model} is already rented.`);
    }
};

Customer.prototype.returnCar = function(car) {
    setTimeout(() => {
        car.isAvailable = true;
        this.rentedCars = this.rentedCars.filter(c => c !== car);
        console.log(`${this.name} returned the ${car.make} ${car.model}.`);
    }, 2000);
};

function PremiumCustomer(name, discountRate) {
    Customer.call(this, name);
    this.discountRate = discountRate;
}

PremiumCustomer.prototype = Object.create(Customer.prototype);
PremiumCustomer.prototype.constructor = PremiumCustomer;

function calculateRentalPrice(car, days, customer) {
    const basePricePerDay = 50;
    const typeMultiplier = {
        "SUV": 1.5,
        "Sedan": 1.2,
        "Hatchback": 1.0
    };
    let price = basePricePerDay * days * (typeMultiplier[car.type] || 1);
    
    if (customer instanceof PremiumCustomer) {
        price *= (1 - customer.discountRate / 100);
    }
    return price;
}

function Maintenance(car, delay) {
    console.log(`The ${car.make} ${car.model} is under maintenance.`);
    setTimeout(() => {
        car.isAvailable = true;
        console.log(`The ${car.make} ${car.model} is now available for rent.`);
    }, delay);
}

let car1 = new Car("Toyota", "Corolla", 2020, "Sedan");
let car2 = new Car("Ford", "Explorer", 2021, "SUV");
let customer1 = new Customer("Alice");
let customer2 = new PremiumCustomer("Bob", 10);

customer1.rentCar(car1);
customer2.rentCar(car2);

console.log(`Rental price for Bob: $${calculateRentalPrice(car2, 5, customer2)}`);

customer1.returnCar(car1);
Maintenance(car2, 3000);