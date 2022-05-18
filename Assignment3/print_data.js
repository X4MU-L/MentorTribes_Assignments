import Students_data from "./class.js";


const samuel = new Students_data("Samuel","Okoli",29,"Male","Grey");
const joseph = new Students_data("Joseph","Okon",45,"Male","Yellow");
const stephanie = new Students_data("Stephanie","Obi",21,"Female","Pink");
const mike = new Students_data("Micheal","Usman",50,"Male","Grey");
const mercy = new Students_data("Mercy","Bright",30,"female","Blue");
const chioma = new Students_data("Chioma","Eze",25,"Female","Purple");
const gloria = new Students_data("Gloria","Ojo",28,"Female","Black");
const stephen = new Students_data("Stephen","Jerry",33,"Male","White");
const chidera = new Students_data("Chidera","Nzenwekwe",28,"Female","Blue");
const arinze = new Students_data("Arinze","Aguiyi",34,"Male","Green");

const students_file = [samuel,joseph,stephanie,mike,mercy,chioma,gloria,stephen,chidera,arinze];

for (let x of students_file){
    const getPronoun = gender =>{
        if(gender === "Female"){
           return "She"
        }else{ return "he"}
    }
    
    console.log(`${x.first_name} ${x.last_name} is a ${x.gender}, ${getPronoun(x.gender)} is ${x.age} years old `)
}