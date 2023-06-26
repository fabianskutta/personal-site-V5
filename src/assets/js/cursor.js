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
    if (item.dataset.cursor === "pointer3") {
      cursorBorder.style.setProperty("--size", "80px");
      cursorBorder.style.setProperty("box-shadow", "0 0 0 0 var(--text1)");
      cursorBorder.style.setProperty("border-radius", "0");
      cursorBorder.style.setProperty("background-size", "60%");
    }
  });
  item.addEventListener("mouseout", (e) => {
    cursorBorder.style.backgroundColor = "unset";
    cursorBorder.style.mixBlendMode = "unset";
    cursorBorder.style.setProperty("--size", "30px");
    cursorBorder.style.setProperty("box-shadow", "0 0 0 1px var(--text1)");
    cursorBorder.style.setProperty("border-radius", "50%");
    cursorBorder.style.setProperty("background-size", "0");
  });
});

body.addEventListener('mousedown', (event) => {
    if (!item.dataset.cursor === "pointer3") {
      cursorBorder.style.setProperty("--size", "50px");
    }
  });

body.addEventListener('mouseup', (event) => {
    if (!item.dataset.cursor === "pointer3") {
      cursorBorder.style.backgroundColor = "unset";
      cursorBorder.style.mixBlendMode = "unset";
      cursorBorder.style.setProperty("--size", "30px");
    }
  });