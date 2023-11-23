const trucks = ['F-450', 'F-350', 'F-250']; //array literal 

const names = [];

console.log(trucks[0]);

console.log(trucks[2]);

trucks.length;

console.log(trucks[trucks.length - 1]);

0 = "F-450"
1 = "F-350"
2 = "F-250"
3 = undefined

const cars = ["Chevy Malibu"];

for (let vehicle of trucks) {
    let output = `Ford ${vehicle}`;
    cars.push(output);
}