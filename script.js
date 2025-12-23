// script.js
let popup = document.getElementById("popupBox");
let openBtn = document.getElementById("openPopup");
let closeBtn = document.getElementById("closePopup");

openBtn.onclick = function() {
  popup.style.display = "flex";
}

closeBtn.onclick = function() {
  popup.style.display = "none";
}
