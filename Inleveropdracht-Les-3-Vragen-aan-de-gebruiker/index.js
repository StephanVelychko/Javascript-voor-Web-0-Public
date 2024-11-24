let kopje = document.getElementById("kop");
let kopjeInput = prompt("Wat moet in het kopje staan?");
kopje.innerHTML = (kopjeInput);

kopje.style.color = "red";
kopje.style.font = "50px arial, sans-serif";
kopje.style.fontWeight = "bold";

let paragraaf1 = document.getElementById("p1");
let paragraaf1Input = prompt("Wat moet in de eerste tekst staan?");
paragraaf1.innerHTML = (paragraaf1Input);

paragraaf1.style.font = "15px arial, sans-serif";


let paragraaf2 = document.getElementById("p2");
let paragraaf2Input = prompt("Wat moet in de tweede tekst staan?");
paragraaf2.innerHTML = (paragraaf2Input);

paragraaf2.style.font = "15px arial, sans-serif";