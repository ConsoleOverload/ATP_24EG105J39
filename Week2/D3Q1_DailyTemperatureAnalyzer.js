/*
Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28
 */
const temperatures = [32, 35, 28, 40, 38, 30, 42];
//1. filter() temperatures above 35
const above35 = temperatures.filter(temp => temp > 35);
console.log('Temperatures above 35:', above35);
//2. map() to convert all temperatures from Celsius → Fahrenheit
const fahrenheit = temperatures.map(temp => (temp * 9/5) + 32);
console.log('Temperatures in Fahrenheit:', fahrenheit);
//3. reduce() to calculate average temperature
const average = temperatures.reduce((acc, temp) => acc + temp) / temperatures.length;
console.log('Average Temperature:', average.toFixed(2));
//4. find() first temperature above 40
const above40 = temperatures.find(temp => temp > 40);
console.log('First temperature above 40:', above40);
//5. findIndex() of temperature 28
const index28 = temperatures.findIndex(temp => temp === 28);
console.log('Index of temperature 28:', index28);