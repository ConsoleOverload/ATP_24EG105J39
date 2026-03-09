//Rest Parameter
//Exercise 3: Create a func that receives any number of args as arguments and return their sum using REST parameter
let sum = (...args) => args.reduce((acc, num) => acc + num)
console.log(sum(1,2,3));
/*What are rest parameters?
Rest parameters allow us to represent an indefinite number of arguments as an array. 
It is denoted by three dots (...) followed by the name of the parameter. 
Rest parameters must be the last parameter in the function definition and can only be used once. 
They provide a way to handle functions with variable numbers of arguments, 
*/