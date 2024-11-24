number = document.getElementById("nummer");
knop1 = document.getElementById("1");
knop2 = document.getElementById("2");
knop1.addEventListener("click", rood);

function rood(){
  number.innerHTML = "Je hebt geklikt op nummer: 1";
  number.style.color = "red";
}

knop2.addEventListener("click", blue);

function blue(){
  number.innerHTML = "Je hebt geklikt op nummer: 2";
  number.style.color = "blue";
}