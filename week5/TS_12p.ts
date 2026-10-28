for (let i : number = 0 ; i<100 ; i++ ) { 
 const number : number =  i +1 ; 
 if (number === 50) { 
    break ; 
 }
 if (number % 3 === 0) {
    continue;
 }
 console.log(number);
}