const imgs = document.querySelectorAll(".images-grid img")

function scrolling() {
  const viewportHeight = window.innerHeight
  imgs.forEach(img => {
    if (img.getBoundingClientRect().top < viewportHeight) {
      img.style.animationPlayState = "running"
    }
  })
}

scrolling()
window.addEventListener("scroll", scrolling);