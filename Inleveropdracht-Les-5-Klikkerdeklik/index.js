let aantalKlikken = document.getElementById("aantalkliks");
aantalKlikken.innerHTML = 0;
let knop = document.getElementById("knop1");
knop.addEventListener("click", klikTeller);
let clickNumber  = 0;
function klikTeller(){
  clickNumber += 1;
  aantalKlikken.innerHTML = (clickNumber);
}