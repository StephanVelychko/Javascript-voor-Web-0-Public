

function myMove() {
  var elem = document.getElementById("animate"); 
  var pos = 0;
  var id = setInterval(frame, 30);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}

function changeColor() {
  let cursiveElements = document.getElementsByTagName("em");
  for (let cursive of cursiveElements){
    cursive.style.color = "red";
  }
  setTimeout(function(){
    for (let cursive of cursiveElements){
      cursive.style.color = "black";
    }
  }, 3000);

}