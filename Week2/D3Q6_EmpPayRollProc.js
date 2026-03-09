/*
ASSIGNMENT 3:
-------------
Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"
*/
//1. filter() employees from IT department
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
const itEmployees = employees.filter(employee => employee.department === "IT");
console.log('IT Employees:', itEmployees);
//2. map() to add:
const employeesWithNetSalary = employees.map(employee => ({
    employee,
    netSalary: employee.salary + (employee.salary * 0.10)
}));
console.log('Employees with Net Salary:', employeesWithNetSalary);
//3. reduce() to calculate total salary payout
const totalPayout = employees.reduce((total, employee) => total + employee.salary, 0);
console.log('Total Salary Payout:', totalPayout);
//4. find() employee with salary 30000
const employeeWith30000 = employees.find(employee => employee.salary === 30000);
console.log('Employee with salary 30000:', employeeWith30000);
//5. findIndex() of employee "Neha"
const indexOfNeha = employees.findIndex(employee => employee.name === "Neha");
console.log('Index of employee Neha:', indexOfNeha);
