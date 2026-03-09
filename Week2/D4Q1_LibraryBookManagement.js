/*
Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise




  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.


  2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books
*/
class Book {
    title;
    author;
    pages;
    isAvailable;
    constructor(title,author,pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isAvailable = true;
    }
    borrow(){
        this.isAvailable = false;
    }
    returnBook(){
        this.isAvailable = true;
    }
    getInfo(){
        return `${this.title} by ${this.author} (${this.pages} pages)`;
    }
    isLongBook(){
        return this.pages > 300;
    }

}
//Creating book objects
let b1 = new Book('Harry Potter','J.K. Rowling',500);
let b2 = new Book('Harry Potter 2','J.K. Rowling',400);
let b3 = new Book('Harry Potter 3','Kaustubh',200);
let b4 = new Book('Harry Potter 4','Ravi',100);
let b5 = new Book('Harry Potter 5','Bhanu',50);
let books = [b1,b2,b3,b4,b5];
//i. Display info of all books
for(let b of books){
    console.log(b.getInfo());
}
//ii. Borrow 2 books and show their availability status
b1.borrow();
b3.borrow();
console.log(`${b1.title} is available: ${b1.isAvailable}`);
console.log(`${b3.title} is available: ${b3.isAvailable}`);
//iii. Return 1 book and show updated status
b1.returnBook();
console.log(`${b1.title} is available: ${b1.isAvailable}`);
//iv. Count how many books are "long books" (more than 300 pages)
let longCount = books.filter(b => {
    if(b.isLongBook()){
        return b.title
}})
for(let b of longCount){
    console.log('Long Book : ',b.title);
}
/*
why is it returning it as object object instead of title ?
Answer : Because filter returns an array of objects that satisfy the condition. To get the titles, 
we can use map after filter to extract the titles from the filtered books.
 */
//v. List all available books
let availableBooks = books.filter(b => b.isAvailable==true)
console.log('Available Books : ')
for(let b of availableBooks){
    console.log(b.getInfo());
}