//Task 1: Creating an Employees Array of Employee Objects

//Array for employee information
const employees = [

 { name: 'Alicia Ali', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] },
 { name: 'Sarah Lee', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] },
 { name: 'Bob Millers', shifts: [{ day: 'Monday', hours: 8 }] },
 { name: 'Apple Jane', shifts: [{ day: 'Friday', hours: 8 }] }
];

console.log("Employee Shift Details:",(employees));
    
//Task 2: Creating a Function to Display Employee Shift Details
console.log("Employee Shift Details:"); //For better Readibility

//Creating a function that accepts an employee object and logs employee shift info
function displayEmployeeShifts(employees,employeeName){
    employees.forEach(employee => {
        if(employee.name === employeeName){
            console.log(`${employee.name}`);
            employee.shifts.forEach(shift => {
                console.log(`Assigned Shifts: ${shift.day}, Hours Worked: ${shift.hours}`); //Logs the employee’s name and their assigned shifts
            });
        }
    });
}
    
displayEmployeeShifts(employees, `Bob Millers`); //Testing the Function
