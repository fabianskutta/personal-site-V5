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