let container = document.querySelector(".hero");
    container.addEventListener("animationend", changePosition, true);

    function changePosition(event) {
      let circle = event.target;

      circle.style.animationName = "none";
      var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
      
      requestAnimationFrame(() => {
        circle.style.animationName = "";
      });

      let circleStyle = getComputedStyle(circle);
      let finalX = circleStyle.getPropertyValue("--xB");
      let finalY = circleStyle.getPropertyValue("--yB");

      circle.style.setProperty("--xA", finalX);
      circle.style.setProperty("--yA", finalY);

      circle.style.setProperty("--xB", getRandomNumber(-100, width) + "px");
      circle.style.setProperty("--yB", getRandomNumber(-300, 200) + "px");
    }

    function getRandomNumber(low, high) {
      let r = Math.floor(Math.random() * (high - low + 1)) + low;
      return r;
    }

const tl = gsap.timeline({defaults: {duration: 0.75}})

tl.fromTo('.hero-text h2', {y: 80, opacity:0}, {y: 0, opacity:1});
tl.fromTo('.hero-text p', {y: 50, opacity:0}, {y: 0, opacity:1}, "-=0.40");
tl.fromTo('.hero-text .socials', {y: 50, opacity:0}, {y: 0, opacity:1}, "-=0.40");

