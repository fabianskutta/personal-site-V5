const cursorBorder = document.querySelector("#cursor-border");
const body = document.querySelector('body');
const cursorPos = { x: 0, y: 0 };
const cursorBorderPos = { x: 0, y: 0 };
var timeout;

document.addEventListener("mousemove", (e) => {
    clearTimeout(timeout);
    cursorPos.x = e.clientX;
    cursorPos.y = e.clientY;
});

requestAnimationFrame(function loop() {
  const easting = 8;
  cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
  cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

  cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
  requestAnimationFrame(loop);
});

document.querySelectorAll("[data-cursor]").forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    if (item.dataset.cursor === "pointer") {
      cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .6)";
      cursorBorder.style.setProperty("--size", "10px");
    }
    if (item.dataset.cursor === "pointer2") {
      cursorBorder.style.setProperty("--size", "50px");
    }
  });
  item.addEventListener("mouseout", (e) => {
    cursorBorder.style.backgroundColor = "unset";
    cursorBorder.style.mixBlendMode = "unset";
    cursorBorder.style.setProperty("--size", "30px");
  });
});

body.addEventListener('mousedown', (event) => {
    cursorBorder.style.setProperty("--size", "50px");
  });

body.addEventListener('mouseup', (event) => {
    cursorBorder.style.backgroundColor = "unset";
    cursorBorder.style.mixBlendMode = "unset";
    cursorBorder.style.setProperty("--size", "30px");
  });