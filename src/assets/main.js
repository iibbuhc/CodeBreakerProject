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
