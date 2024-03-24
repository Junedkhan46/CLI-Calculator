import inquirer from "inquirer";
let loop = true;
while(loop){

const userInput = await inquirer.prompt([
    {
    type: "number",
    name: "num1",
    message: "Enter First number"
    },
    {
        type: "number",
        name:"num2",
        message: "Enter Second Number"
    },
    {
        type:'list',
        name:"operator",
        choices: ["Addition", "Subtraction","Multiplication", "Division"],
        message: "Select the operation"
    }
]);
const num1 = userInput.num1;
const num2 = userInput.num2;
const operator = userInput.operator
//console.log(num1,num2, operator)
if(num1 && num2) { 
    if(operator === `Addition`) {
        console.log(`\n The answer of ${num1} + ${num2} = ${num1 + num2}`)
    }else if
     (operator === `Subtraction`){
        console.log(`\n The answer of ${num1} - ${num2} = ${num1 - num2}`)
    }else if
    (operator === `Multiplication`){
       console.log(`\n The answer of ${num1} * ${num2} = ${num1 * num2}`)
   }else if
   (operator === `Division`){
      console.log(`\n The answer of ${num1} / ${num2} = ${num1 / num2}`)
  }

} else {
    console.log("Enter a valid number!");
}
const calculateMore = await inquirer.prompt({
    type:"confirm",
    name:"more",
    message: "Do you have more to calculate ?",
    default: false
});
if(!calculateMore.more){
    loop = false
    console.log(`Thank you for using node services!`)
};
}