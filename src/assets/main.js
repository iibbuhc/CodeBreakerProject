let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //alert(input.value);

    //add functionality to guess function here
    if(answer.value == '' ||attempt.value == ''){
        console.log("Empty");
        setHiddenFields();
    }
    if(validateInput(input.value)){
        attempt.value++;
    }else{
        return false;
    }
    if(getResults(input.value)){
        setMessage(1);
    }else{
        if(attempt.value >= 10){
          setMessage(2);
        }else{
          console.log("Attempt:" + attempt.value);
          setMessage(3);
        }
    }
}

//implement new functions here
function setHiddenFields(){
    var tempanswer;
    tempanswer = Math.random()*9999;
    tempanswer = Math.floor(tempanswer);
    tempanswer = tempanswer.toString();
    while(tempanswer.length!=4){
      tempanswer = "0" + answer;
    }
    answer.value = tempanswer;
    attempt.value = 0;
    console.log(answer.value+":"+attempt.value);

}

function setMessage(msg){
    if(msg == 0){
      document.getElementById("message").innerHTML = "Guesses must be exactly 4 characters long.";
    }
    else if(msg == 1){
      document.getElementById("message").innerHTML = "You Win! :)";
      showAnswer(true);
      showReplay();
    }else if(msg == 2){
      document.getElementById("message").innerHTML = "You Lose! :(";
      showAnswer(false);
      showReplay();
    }else if(msg == 3){
      document.getElementById("message").innerHTML = "Incorrect, try again.";
    }
}

function validateInput(guessnumber){
    if(guessnumber.length==4){
        console.log("Correct Length");
        return true;
    }else{
        setMessage(0);
        console.log("Wrong Length");
        return false;
    }
}
//
function getResults (input){
    var divStart = "<div class=\"row\"><span class=\"col-md-6\">";
    var divEnd = "</span><div class=\"col-md-6\">";
    var divCorrectPost = "<span class=\"glyphicon glyphicon-ok\"></span>";
    var divWrongPost ="<span class=\"glyphicon glyphicon-transfer\"></span>";
    var divWrong ="<span class=\"glyphicon glyphicon-remove\"></span>";
    var numberCorrectChar = 0;
    //document.getElementById("results").innerHTML = div1;
    var composeResultInner = "";
    var tempAnswer = answer.value;
    var tempInput = input;
    console.log("In getResults function: "+answer.value);
    console.log("In Input value function: "+input);
    for (let i = 0 ; i < tempInput.length ; i++){
      if(tempInput.charAt(i) == tempAnswer.charAt(i)){
          composeResultInner +=divCorrectPost;
          console.log(tempInput.charAt(i)+": Correct");
          numberCorrectChar++;
      }else if(tempInput.charAt(i)!=tempAnswer.charAt(i)){
          //check whether it is in the answer
            var flag = true;
            var countChar = 0;
            while (flag){
                if(tempInput.charAt(i) == tempAnswer.charAt(countChar) && countChar < tempAnswer.length){
                    composeResultInner +=divWrongPost;
                    console.log(tempInput.charAt(i)+": Wrong Position");
                    flag = false;
                }else if(countChar == tempAnswer.length){
                    composeResultInner +=divWrong;
                    console.log(tempInput.charAt(i)+": Wrong");
                    flag = false;
                }else{
                    countChar++;
                }
            }
      }
    }
    document.getElementById("results").innerHTML = divStart + input + divEnd + composeResultInner;
    if(numberCorrectChar == 4){
        return true;
    }else {
        return false;
    }
}

function showAnswer(finalAnswer){
    if(finalAnswer){
        document.getElementById("answer").className = "success";
    }else {
        document.getElementById("answer").className = "failure";
    }

}

function showReplay() {
    document.getElementById("guessing-div").style.display = "none";
    document.getElementById("replay-div").style.display = "block";
}
