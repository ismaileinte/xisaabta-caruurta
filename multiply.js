const option1 = document.getElementById("option1"),
      option2 = document.getElementById("option2"),
      option3 = document.getElementById("option3"),
      correct = document.getElementById("correct"),
      wrong = document.getElementById("wrong"); 
var answer = 0;

function generate_equation(){ 
  var num1 = Math.floor(Math.random() * 11),
      num2 = Math.floor(Math.random() * 11),
      dummyAnswer1 = Math.floor(Math.random() * 50),
      dummyAnswer2 = Math.floor(Math.random() * 50),
      allAnswers = [],
      switchAnswers = [];

  answer = eval(num1 * num2);
  
  document.getElementById("num1").innerHTML = num1; 
  document.getElementById("num2").innerHTML = num2; 

  allAnswers = [answer, dummyAnswer1, dummyAnswer2];

  for (i = allAnswers.length; i--;){
    switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
  };

  option1.innerHTML = switchAnswers[0];
  option2.innerHTML = switchAnswers[1];
  option3.innerHTML = switchAnswers[2]; 

};

option1.addEventListener("click", function(){
    if(option1.innerHTML == answer){
      correct.play();
      generate_equation();
    }
    else{
      wrong.play();
    }
  });
  
  option2.addEventListener("click", function(){
    if(option2.innerHTML == answer){
      correct.play();
      generate_equation();
    }
    else{
      wrong.play();
    }
  });
  
  option3.addEventListener("click", function(){
    if(option3.innerHTML == answer){
      correct.play();
     generate_equation();
    }
    else{
      wrong.play();
    }
});

generate_equation()

