// Plaatjes:
// https://metiscoderclass.github.io/javascript-for-web-0/plaatjes/deserted-station-at-night-1446615.jpg
// https://metiscoderclass.github.io/javascript-for-web-0/plaatjes/pink-lotus-1396744.jpg
// https://metiscoderclass.github.io/javascript-for-web-0/plaatjes/young-golden-retriever-1404848.jpg

// HINT:
// plaatje.addEventListener("mouseover", verander);
let image = document.getElementById("plaatje");
image.addEventListener("mousemove", veranderImage);
image.addEventListener("mouseleave", veranderTerug);
let images = ["https://metiscoderclass.github.io/javascript-for-web-0/plaatjes/deserted-station-at-night-1446615.jpg", "https://metiscoderclass.github.io/javascript-for-web-0/plaatjes/pink-lotus-1396744.jpg", "https://metiscoderclass.github.io/javascript-for-web-0/plaatjes/young-golden-retriever-1404848.jpg"];
function veranderImage(){
  let index = Math.floor(Math.random() * images.length);
  image.src = images[index];
}

function veranderTerug(){
  image.src = images[0];
}