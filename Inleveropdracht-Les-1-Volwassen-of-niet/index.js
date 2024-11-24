let leeftijd = prompt("Hoe oud ben je?");

if (leeftijd < 12){
  alert("Jij bent jonger dan 12");
}
else if (leeftijd >= 12){
  if (leeftijd < 18){
    alert("Jij bent een jong volwassene");
  }
  
  else if (leeftijd >= 18){
    alert("Jij bent een volwassene");
  }
}
