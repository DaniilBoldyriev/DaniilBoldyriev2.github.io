const marker = document.getElementById("marker");
const promoVideo = document.getElementById("vid");
const videoButton = document.querySelector(".play-video-button-wrapper");
const videoEntity = document.querySelector("a-video");
console.log('Worker');
console.log('Marker',marker);

function hideVideoButton() {
  videoButton.style.display = "none";
}

function showVideoButton() {
  videoButton.style.removeProperty("display");
}

videoButton.addEventListener("click", () => {
  hideVideoButton();
  promoVideo.play();
  videoEntity.setAttribute("visible", true);
});

marker.addEventListener("markerFound", () => {
  showVideoButton();
});

marker.addEventListener("markerLost", () => {
  hideVideoButton();
  promoVideo.pause();
});
