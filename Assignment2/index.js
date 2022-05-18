//Question 1

const countries = ["Nigeria","Denmark","Germany","United States Of America","Ghana",'London'];
  
// the function below seems not to do the work properly -- kindly help look at it.
const checkLongestCountry = arry =>{
        let longest = "";
        for(let i = 0; i < arry.length; i++){
            if (arry[i].length > longest.length){
                longest = arry[i]; 
            };
        };
        return longest;
    };
    
console.log(checkLongestCountry(countries))
console.log("\n")

//Seems this does the work but it's quite a long line of code
const CheckLongestCountry = (arry) =>{
        let count =[];
        for(let i = 0; i < arry.length; i++){
            count.push(arry[i].length);
        }
        let max = Math.max(...count);
        let index = count.indexOf(max);
        return console.log(arry[index])
    }
CheckLongestCountry(countries)
console.log("\n")

//Question 2
const getLength = obj => obj.length;

console.log(getLength('kello'));
console.log("\n");

//Question 3
for(let i = 1; i <= 10; i++){
    console.log(i)
};

console.log("\n");

//Question 4
function pow(x, n) {
    let num = 1;
    for (let i = 0; i < n; i++) {
      num *= x;
    }
    return num;
}

console.log(pow(3, 5));
console.log("\n")

//Question 5
function callBackFtn(callback){
    console.log("function called");
    callback();
};

function callCallBack(){
      console.log("This is a callback function")
};
  
callBackFtn(callCallBack);
console.log("\n");

//Question 6
var library = [ 
{
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
},
{
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
},
{
    author: 'Suzanne Collins',
    title:  'Mockingjay: The Final Book of The Hunger Games', 
    readingStatus: false
}];

for(let i = 0; i < library.length; i++){
    console.log(`The book ${library[i].title} was written by ${library[i].author}
    and reading status is ${library[i].readingStatus}`)
}