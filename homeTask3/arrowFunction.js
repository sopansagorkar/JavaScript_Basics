const employee = [
  { name: "Thomas Edwin", empid: "E111", salary: 10000 },
  { name: "Gregory Mathew", empid: "E555", salary: 12000 },
  { name: "Thomas Edison", empid: "E444", salary: 8000 },
  { name: "GregoryEdwin", empid: "E222", salary: 6000 },
  { name: "Isac Newton", empid: "E666", salary: 20000 },
  { name: "Thomas Gibson", empid: "E333", salary: 4000 },
];

function findName() {
  const getName = employee.map((employee) => {
    console.log(employee.name.match("Edwin"));
  });
}

function totalSal() {
  let totalSalary = 0;
  let empID = new Map();
  const getsal = employee.map((employee) => {
    totalSalary = totalSalary + employee.salary;
    console.log("Employee IDs= " + employee.empid);
  });

  console.log("Total Salary is= " + totalSalary);
}
findName();
totalSal();
