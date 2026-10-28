let id:string|number ; 
id = 100 ; 
id = "A100 " ; 

function printid(id : string|number ) {
  console.log(id);
}
id =100 ; 
printid(id) ; 
id = "A100" ; 
printid(id) ; 

