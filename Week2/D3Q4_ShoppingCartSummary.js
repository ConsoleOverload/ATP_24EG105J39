/*
ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.

Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard"

 */
//1. Use filter() to get only inStock products
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
const inStockProducts = cart.filter(product => product.inStock);
console.log('In Stock Products:', inStockProducts);
//2. Use map() to create a new array with:  { name, totalPrice }
const productsWithTotalPrice = cart.map(product => ({
    name: product.name,
    totalPrice: product.price * product.quantity
}));
console.log('Products with Total Price:', productsWithTotalPrice);
//3. Use reduce() to calculate grand total cart value
const grandTotal = cart.reduce((total, product) => total + (product.price * product.quantity), 0);
console.log('Grand Total Cart Value:', grandTotal);
//4. Use find() to get details of "Mouse"
const mouseDetails = cart.find(product => product.name === "Mouse");
console.log('Details of Mouse:', mouseDetails);
//5. Use findIndex() to find the position of "Keyboard"
const keyboardIndex = cart.findIndex(product => product.name === "Keyboard");
console.log('Index of Keyboard:', keyboardIndex);