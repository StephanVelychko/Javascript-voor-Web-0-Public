let getalInput = document.getElementById("geradengetal");
let button = document.getElementById("raadknop");
let text = document.getElementById("feedback");
let geheimgetal = Math.floor((Math.random() * 10) + 1);
let guessNumber = 0;
button.addEventListener("click", numberCompare);


function numberCompare(){
  guessNumber += 1;
  text.innerHTML = "";
  console.log(geheimgetal);
  console.log(getalInput);
  if(getalInput.value == geheimgetal){
    text.innerHTML = "You guessed the secret number you have guessed " + guessNumber + " times";
  }
  else{
    if(getalInput.value > geheimgetal){
      text.innerHTML = "te hoog";
    }
    else if(getalInput.value < geheimgetal){
      text.innerHTML = "te laag";
    }
    else{
      text.innerHTML = "?";
    }
  }
}