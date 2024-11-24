let zwartKnop = document.getElementById("zwart");
zwartKnop.addEventListener("click", blackFunction);
let blauwKnop = document.getElementById("blauw");
blauwKnop.addEventListener("click", blueFunction);

let cursiveItems = document.getElementsByTagName("em");

function blackFunction(){
  for (var i = 0; i < cursiveItems.length; i++) {                                             
    cursiveItems[i].style.color = "black";
  }
}

function blueFunction(){
  for (var i = 0; i < cursiveItems.length; i++) {                                             
    cursiveItems[i].style.color = "blue";
  }
}