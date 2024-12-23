// =======================> Chapter 6-9 

// Question 01
// Answer
let num = 10;

document.write(`<p>
    Result: <br />
    The Value of num : ${num} <br />
    ------------------------<br />
    The Value of ++num : ${++num} <br />
    Now the Value of num : ${num} <br /><br /><br />
    The Value of num++ : ${num++} <br />
    Now the Value of num : ${num} <br /><br /><br />
    The Value of --num : ${--num} <br />
    Now the Value of num : ${num} <br /><br /><br />
    The Value of num-- : ${num--} <br />
    Now the Value of num : ${num} <br />
    </p>`);


// Question 02
// Answer

// let tableNum = +prompt("Enter Table Number");

// PRINT TABLE
if(tableNum == 0) {
    tableNum = 5;
}
document.write(`<p> ${tableNum} X 1 = ${tableNum * 1}</p>`);
document.write(`<p> ${tableNum} X 2 = ${tableNum * 2}</p>`);
document.write(`<p> ${tableNum} X 3 = ${tableNum * 3}</p>`);
document.write(`<p> ${tableNum} X 4 = ${tableNum * 4}</p>`);
document.write(`<p> ${tableNum} X 5 = ${tableNum * 5}</p>`);
document.write(`<p> ${tableNum} X 6 = ${tableNum * 6}</p>`);
document.write(`<p> ${tableNum} X 7 = ${tableNum * 7}</p>`);
document.write(`<p> ${tableNum} X 8 = ${tableNum * 8}</p>`);
document.write(`<p> ${tableNum} X 9 = ${tableNum * 9}</p>`);
document.write(`<p> ${tableNum} X 10 = ${tableNum * 10}</p>`);


// Question 06
// Answer

// let subjectOneName = prompt("Please enter First Subject Name");
// let subjectTwoName = prompt("Please enter Second Subject Name");
// let subjectThreeName = prompt("Please enter Third Subject Name");
// let eachSubjectMarks = 100;

// let subjectOneMarks = +prompt("Please enter Subject One marks");
// let subjectTwoMarks = +prompt("Please enter Subject Two marks");
// let subjectThreeMarks = +prompt("Please enter Subject Three marks");

// // Each subject percentage

// let subjectOnePercentage = (subjectOneMarks / eachSubjectMarks) * 100;
// let subjectTwoPercentage = (subjectTwoMarks / eachSubjectMarks) * 100;
// let subjectThreePercentage = (subjectThreeMarks / eachSubjectMarks) * 100;


// let totalMarks = eachSubjectMarks * 3;

// let totalObtainedMarks = subjectOneMarks + subjectTwoMarks + subjectThreeMarks;

// let percentage = (totalObtainedMarks / totalMarks) * 100;

// // make table for this observation in one template string
// document.write(`
//     <table border='1'>
//         <thead>
//             <tr>
//                 <th>Subject Name</th>
//                 <th>Subject Marks</th>
//                 <th>Percentage</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td>${subjectOneName}</td>
//                 <td>${subjectOneMarks}</td>
//                 <td>${subjectOnePercentage.toFixed(2)}%</td>
//             </tr>
//             <tr>
//                 <td>${subjectTwoName}</td>
//                 <td>${subjectTwoMarks}</td>
//                 <td>${subjectTwoPercentage.toFixed(2)}%</td>
//             </tr>
//             <tr>
//                 <td>${subjectThreeName}</td>
//                 <td>${subjectThreeMarks}</td>
//                 <td>${subjectThreePercentage.toFixed(2)}%</td>
//             </tr>
//         </tbody>
//     </table>
//     <br />
//     <p>Total Marks: ${totalObtainedMarks}</p>
//     <p>Percentage: ${percentage.toFixed(2)}%</p>
//     `);         
//==============================>CHAPTER NO 9-11
// Question 01
// Answer 01
// let cityName = prompt("enter city name")
// if(cityName == "karachi"){
//     alert("karachi is city of light")
// }
// Question 02
// Answer 02
// let gender = prompt("Enter Gender");
// if(gender == "Male"){
//     alert("HI SIR");
// }
// let female = prompt("Enter Gender")
// if(gender == "female"){
//     alert("HI MAAM");
// }
// Question 03
// Answer
// let colorOfSignal = prompt("Enter color of signal")
// if(colorOfSignal=="red"){
//     alert("All stop");
// }
// if(colorOfSignal=="yellow"){
//     alert("All stop")
// }
// if(colorOfSignal=="green"){
//     alert("All stop");
// }

// Question 04
// Answer
// let yourFeul = +prompt("PLEASE ENTER FUEL");
// if(yourFeul < 0.25){
//     alert("PLEASE REFUAL IN YOUR CAR THANKS");
// }

// Question 05
// Answer

// var a = 4;
// if(++a == 5){
//     alert("The Given Condition for a is true!");
// }

// var b = 82;
// if(b++ == 83){
//     alert("The Given Condition for b is true!");
// }

// var c = 12;
// if(c++ == 13){
//     alert("Condition 1 is true!");
// }
// if(c == 13){
//     alert("Condition 2 is true!");
// }
// if(++c < 14){
//     alert("Condition 3 is true!");
// }
// if(c == 14){
//     alert("Condition 4 is true!");
// }

// var materialCost = 70000;
// var laborCost = 5000;
// var totalCOst = materialCost + laborCost;
// if(totalCOst == materialCost + laborCost){
//     alert("The Cost equal");
// }
// if(true){
//     alert("True");
// }

// if(false){
//     alert("False");
// }
// Question 06
// Answer
// let totalMarks = +prompt("Enter Total Marks");
// let obtainedMarks = +prompt("Enter Obtained Marks");
// let percentage = (obtainedMarks / totalMarks)*100;
// let grade;
// let remarks;
// if(percentage >= 90){
//     grade="A+";
//     remarks="good";
// }
// document.write(`
//     <h1>Mark Sheet</h1>
//     <br/>
//     <h2>total Marks: ${totalMarks}</h2>
//     <h2>obtainedMarks: ${obtainedMarks}</h2>
//     <h2>percentage: ${percentage}%</h2>
//     <h2>grade: ${grade}</h2>
//     <h2>remarks: ${remarks}</h2>
// `);

// Question 07
// Answer

// let secretNum = 8;
// let guess = +prompt("Guess a number between 1 and 10");
// if(guess === secretNum) {
//     alert("Bingo! Correct Answer!");
// }
// if((guess + 1) === secretNum) {
//     alert("Close enough to correct answer!");
// }


// Question 08
// Answer

// let num = +prompt("Enter your number...");
// if(num % 3 === 0) {
//     alert("The number is divisible by 3!");
// }
// if(num % 3 !== 0) {
//     alert("The number is not divisible by 3!");
// }

// Question 09
// Answer

// let num = +prompt("Enter your number...");

// if(num % 2 === 0) {
//     alert("The number is even!");
// }

// if(num % 2 !== 0) {
//     alert("The number is odd!");
// }

// Question 10
// Answer

// let temperature = prompt("Enter Temperature");

// if(temperature >= 40){
//     alert("It's too hot outside!");
// }

// if(temperature >= 30 && temperature < 40){
//     alert("The Weather today is normal!");
// }

// if(temperature >= 20 && temperature < 30){
//     alert("Today's Weather is Cool!");
// }
// if(temperature <10){
//     alert("OMG! Today's Weather is so Cool");
// }

//=======================>CHAPTER NO 12-13


// let num1 = +prompt("Enter First Number");
// let num2 = +prompt("Enter Second Number");

// if(num1 > num2) {
//     console.log(num1 + " is greater than " + num2);
// }
// if(num1 < num2) {
//     console.log(num1 + " is less than " + num2);
// }
// if(num1 == num2) {
//     console.log(num1 + " is equal to " + num2);
// }

let num1 = +prompt("Enter a number");

if(num1 < 0) {
    alert("Your Number is Nagetive");
}

if(num1 > 0) {
    alert("Your Number is Positive");
}

if(num1 == 0) {
    alert("Your Number is Zero");
}

//==============>ASSIGMENT DONE