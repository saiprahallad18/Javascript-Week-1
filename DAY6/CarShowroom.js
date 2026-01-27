let cars = [
    {brand:"bmw", price: 800000, isAvailable:true},
    {brand:"virtus", price: 300000, isAvailable:true},
    {brand:"hyndai", price: 200000, isAvailable:false},
    { brand: "Tata", price: 550000, isAvailable: true }
];

cars.forEach(car => {
    console.log(`Brand: ${car.brand},Price: ${car.price}, isAbailable: ${car.isAvailable}`);
});

let availableCars = cars.filter(car => {
    return car.isAvailable === true;
});

availableCars.forEach(car => {
    console.log(`${car.brand} - ${car.price}`);
});

let budget = 500000;

let affordableCars = availableCars.filter(car => {
    return car.price <= budget;
});

console.log(`Cars within budget (${budget}):`);
affordableCars.forEach(car => {
    console.log(`${car.brand} - ${car.price}`);
});