/*Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"*/
//1.filter() courses with name length > 5
const courses = ["javascript", "react", "node", "mongodb", "express"];
const lessThan5 = courses.filter((element)=> element.length>5)
console.log(lessThan5)
//2.map() to convert course names to uppercase
const UpperCase = courses.map((element)=> element.toUpperCase())
console.log(UpperCase)
//3. reduce() to generate a single string:
              //"JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
const singleStr = courses.reduce((accumulator,element)=> accumulator +' | '+element)
console.log(singleStr.toUpperCase())
//4
const findCourse = courses.find((element)=> element ==='react')
console.log(findCourse)
//5. 
const findCourseIndex = courses.findIndex((element)=> element ==='node')
console.log(findCourseIndex)
