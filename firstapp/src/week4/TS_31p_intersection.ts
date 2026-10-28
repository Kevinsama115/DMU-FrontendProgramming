type Person = { 
    name : string ; 

}; 
type Employee = { 
    employeeId : number ; 
} ; 
type Worker = Person & Employee ; 
const user: Worker = {
    name : "Kim " , 
    employeeId : 1001 
} ; 
console.log(user); 

