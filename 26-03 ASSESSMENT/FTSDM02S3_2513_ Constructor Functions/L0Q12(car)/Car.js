function createCar(make,model,year){
    let obj={};

    obj.make =make;
    obj.model =model;
    obj.year =year;
    obj.describeCar = function(){
        console.log(`This car is a ${this.year} ${this.make} ${this.model} `)
    };
    return obj;
}
const car = createCar("Toyota", "Camry", 2022);
car.describeCar();

