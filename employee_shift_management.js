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

//Task 3: Creating a Function to Assign a New Shift

//Creating a function that accepts an employee name, a day, and a number of hours
function assignShift(employeeName,day,hours){
    for(let employee of employees){
        if(employee.name === employeeName){
        const priorshift= employee.shifts.find (shift => shift.day === day);  //Finding the employee by name in the employees array
            if(priorshift){
                console.log(`${employeeName} already has a shift on ${day}`);  //If an employee already has a shift that day
                return;
            }
            employee.shifts.push({day,hours});
            console.log(`${employeeName} scheduled for a shift on ${day} for ${hours} hours`); //Scheduling a shift 
            return;
        }};

        console.log(`Employee ${employeeName} not found`);  //If an employee does not exist in the system
    }
        //Testing the Function
        assignShift("Sarah Lee", "Saturday", 4);
        assignShift("Apple Jane", "Tuesday", 6);
        assignShift("Billy Crap","Thursday",3);
        assignShift("Bob Millers","Monday",7);
        console.log("Updated Shift:",employees);

    //Task 4: Creating a Function to Calculate Total Hours Worked

    //Creating a function that accepts an employee name and calculates total number of hours worked
    function calculateTotalHours(employeeName){
    let employee=employees.find(employee => employee.name === employeeName); 
    return employee.shifts.reduce((total,shift) => total+ shift.hours,0); //sums up hours from all shifts
    }

    //Testing the Function
    let employeeName= "Apple Jane";
    console.log(`${employeeName} worked a total of ${calculateTotalHours(employeeName)} hours`);