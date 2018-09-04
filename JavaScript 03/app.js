const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  ,
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];

var userIn;

function printUser() {
  employeeList.forEach(element => {
    render(element.name);
    render(element.officeNum);
    render(element.phoneNum);
  });
}

function verifyUser(){
  const empName = prompt("Name to verify");
  var found = "false";

  for (let i = 0; i < employeeList.length; i++){
    
    if (employeeList[i].name == empName){
      found = "true";
    }
  }

  render(found);
}

function lookupUser(){
  const empName = prompt("Name to lookup");
  
  for (let i = 0; i < employeeList.length; i++){
    if (employeeList[i].name == empName){
      render(employeeList[i].name);
      render(employeeList[i].officeNum);
      render(employeeList[i].phoneNum);
    }
  }
}

function containsUser(){
  const userString = prompt("String to include");

  for (let i = 0; i < employeeList.length; i++){
    if (employeeList[i].name.contains(userString)){
      render(employeeList[i].name);
      render(employeeList[i].officeNum);
      render(employeeList[i].phoneNum);
    }
  }
}

function updateUser(){
  const empName = prompt("Employee Name");  
  const feild = prompt("What would you like to update: 1. name , 2. office number, 3. phone number");
  const change = prompt("new info");

  if (feild == 1){
    for (let i = 0; i < employeeList.length; i++){
      if (employeeList[i].name === empName){
        employeeList[i].name = change;
        render(employeeList[i].name);
        render(employeeList[i].officeNum);
        render(employeeList[i].phoneNum);
      }
    }
  } else if (feild == 2) {
    for (let i = 0; i < employeeList.length; i++){
      if (employeeList[i].name === empName){
        employeeList[i].officeNum = change;
        render(employeeList[i].name);
        render(employeeList[i].officeNum);
        render(employeeList[i].phoneNum);
      }
    }
  } else if (feild == 3) {
    for (let i = 0; i < employeeList.length; i++){
      if (employeeList[i].name === empName){
        employeeList[i].feild = change;
        render(employeeList[i].name);
        render(employeeList[i].officeNum);
        render(employeeList[i].phoneNum);
      }
    }
  }
}

function addUser() {
  const empName = prompt("new empoyee name");
  const empOffice = prompt("new empoyee office number");
  const empPhone = prompt("new empoyee phone number");

  employeeList.push(name, officeNum, phoneNum);

  printUser();
}

function deleteUser(){
  const empName = prompt("empoyee name");

  for (let i = 0; i < employeeList.length; i++){
    if (employeeList[i].name === empName){
      employeeList.splice(index, 1);
    }
  }

  printUser();
}

//while(true){

  userIn = prompt("enter command");

  if (userIn === "print"){

    printUser();

  } else if (userIn === "verify"){
    
    verifyUser();

  } else if (userIn === "lookup"){
    
    lookupUser();
    
  } else if (userIn === "contains"){
    
    containsUser();

  } else if (userIn === "update"){
    
    updateUser();

  } else if (userIn === "add"){
    
    addUser();

  } else if (userIn === "delete"){
    
    deleteUser ();

  }



//}