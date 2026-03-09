/*
💡 Exercise 1: Copy & Extend an Array

                        Goal: Learn array copying with spread
                        
                        You are given:
                                let fruits = ["apple", "banana"];
                        
                        
                        Tasks
                              -> Create a new array moreFruits
                              
                              -> Copy all fruits from fruits
                              
                              -> Add "orange" at the end using spread
                              
                              -> Print both arrays
                        
                        
                        ✅ Expected Output
                              ["apple", "banana"]
                              ["apple", "banana", "orange"]
                        
                        👉 Original array should NOT change.
*/
let fruits = ['apple', 'banana'];
let morefruits = [...fruits]
//Adding orange at the end of morefruits using spread operator
morefruits.push('orange');
console.log(fruits);
console.log(morefruits);
