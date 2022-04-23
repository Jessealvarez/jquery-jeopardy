//get jeopardy data first from jeopardy.json
async function readJeopardyData(){


    let rawJeopardyData = await fetch('jeopardy.json');
    let jeopardyData = await rawJeopardyData.json();
    //console.log(jeopardyData);

    let groupedData = _.groupBy(jeopardyData, "value");
    //console.log(groupedData);


    //variables for functionality

let button = document.querySelector('#final-answer');




//html inner text value variables to display questions 

let question = document.querySelector('#question');

let filterbyValue = _.filter(jeopardyData, {'value': "$100"});
let filterbyValueTwo = _.filter(jeopardyData, {'value': "$200"});
let filterbyValueThree = _.filter(jeopardyData, {'value': "$300"});
let filterbyValueFour = _.filter(jeopardyData, {'value': "$400"});
let filterbyValueFive = _.filter(jeopardyData, {'value': "$500"});




//lots of variables incoming for the $$$ boxes

let oneHundred = document.querySelectorAll(".first-row");
let twoHundred = document.querySelectorAll(".second-row");
let threeHundred = document.querySelectorAll(".third-row");
let fourHundred = document.querySelectorAll(".fourth-row");
let fiveHundred = document.querySelectorAll(".fifth-row");

let storeValue=0;

//$100

oneHundred.forEach(element => {
    element.addEventListener('click',(e)=>{
        let questionRandomizer = _.sample(filterbyValue);
        
        let parseThis = questionRandomizer.value;

        
        //console.log(questionRandomizer.question);
        //console.log(parseThis);
        newStr = parseThis.substr(1, parseThis.length);
        storeValue = parseInt(newStr, 10);
        

        question.innerHTML = questionRandomizer.question;

        let storeThis = questionRandomizer.answer;
        
       
        
        //console.log('testing storevalue: ' +storeValue);

        localStorage.setItem("answer", storeThis);


})
})
//$200
twoHundred.forEach(element => {
    element.addEventListener('click',(e)=>{
        let questionRandomizer = _.sample(filterbyValueTwo);
        
        let parseThis = questionRandomizer.value;

        
       
        newStr = parseThis.substr(1, parseThis.length);

        question.innerHTML = questionRandomizer.question;

        let storeThis = questionRandomizer.answer;
        storeValue = parseInt(newStr, 10);
        
        
       

        localStorage.setItem("answer", storeThis);
})
})
//$300
threeHundred.forEach(element => {
    element.addEventListener('click',(e)=>{
        let questionRandomizer = _.sample(filterbyValueThree);
        
        let parseThis = questionRandomizer.value;

        
        
        newStr = parseThis.substr(1, parseThis.length);

        question.innerHTML = questionRandomizer.question;

        let storeThis = questionRandomizer.answer;
        storeValue = parseInt(newStr, 10);
        
        
        

        localStorage.setItem("answer", storeThis);
})
})
//$400
fourHundred.forEach(element => {
    element.addEventListener('click',(e)=>{
        let questionRandomizer = _.sample(filterbyValueFour);
        
        let parseThis = questionRandomizer.value;

        
       
        newStr = parseThis.substr(1, parseThis.length);

        question.innerHTML = questionRandomizer.question;

        let storeThis = questionRandomizer.answer;
        storeValue = parseInt(newStr, 10);
        
        
      

        localStorage.setItem("answer", storeThis);
})
})
//$500
fiveHundred.forEach(element => {
    element.addEventListener('click',(e)=>{
        let questionRandomizer = _.sample(filterbyValueFive);
        
        let parseThis = questionRandomizer.value;

       
        newStr = parseThis.substr(1, parseThis.length);

        question.innerHTML = questionRandomizer.question;

        let storeThis = questionRandomizer.answer;
        storeValue = parseInt(newStr, 10);
        
        
       

        localStorage.setItem("answer", storeThis);
})
})

//CHECK ANSWER

let totalScore = 0;
let scoreBoard = document.querySelector('#money');

button.addEventListener('click', function(){

    let answer = document.querySelector('#user-input');

    
    
   storeThis = localStorage.getItem("answer");

    if(answer.value == storeThis){
        alert("Correct!")
        console.log(storeValue);
        totalScore = totalScore + storeValue;
        localStorage.setItem("Score:", totalScore);
        console.log("total score: " + totalScore);
        scoreBoard.innerHTML =  "$" + totalScore;
    }
    
    else{
        alert("Incorrect.")
        //console.log();
    }


    storeThis = '';
    answer.value = '';
})

}
readJeopardyData();













// const gridWidth = 5;     <--- nevermind-couldn't make this work 
// let count = 0;
// while (count <= gridWidth * gridWidth) {
//   let box = document.querySelector('.jeopardy-box');
//   let div = document.createElement('div');
//   div.className = 'panel';
//   box.appendChild(div);
//   count++;
// }
