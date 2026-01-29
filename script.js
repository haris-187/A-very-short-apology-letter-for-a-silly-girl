const moveRandom = document.querySelector("#move-random");

function moveButton() {
  const windowWidth = window.innerWidth - moveRandom.offsetWidth;
  const windowHeight = window.innerHeight - moveRandom.offsetHeight;

  const randomX = Math.floor(Math.random() * windowWidth);
  const randomY = Math.floor(Math.random() * windowHeight);

  moveRandom.style.position = "absolute";
  moveRandom.style.left = randomX + "px";
  moveRandom.style.top = randomY + "px";
}

moveRandom.addEventListener("mouseenter", moveButton);
moveRandom.addEventListener("touchstart", moveButton);
