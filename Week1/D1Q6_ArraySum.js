//6.Write a function that recieves an array of numbers and returns the sum of the numbers
function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
let arraySum = sumArray([1,2,3,4,5]);
console.log('The sum of the array is :',arraySum)
