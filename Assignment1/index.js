//Question 1
const checkPrimeNumbers = (x) =>{
  if (x == 2 || x % 2 === 1){
    console.log(x);
    return x;
    }else {
        console.log(`${x} is not a Prime Number`);  
  }
}

checkPrimeNumbers(6);
console.log("\n");

//Question 2       
const checkTypeOf = (x) => console.log(typeof x);
    
checkTypeOf(undefined);
console.log("\n");

//Question 3
const checkIsArray = (x) => console.log(Array.isArray(x));
  
checkIsArray({});
console.log("\n");

//Question 4
const getFirstArray = (x) => console.log(x[0]);
    
getFirstArray([20,21]);
console.log("\n");

//Question 5
const getEvenAndOddNumbers = () => {
  let x = 0
  while (x <= 15){
    if (x % 2 === 0){
      console.log(`${x} is an even number`);
      x++;
    }else{
      console.log(`${x} is an odd number`);
      x++;
    }
  }
}

getEvenAndOddNumbers()

    

    