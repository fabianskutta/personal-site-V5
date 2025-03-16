// CSS
import '../css/main.scss';

// JS
import '../js/cursor';
import '../js/heroAnimation';
import '../js/bar';
import '../js/mode';
import '../js/footer';
import '../js/nav';
import '../js/images-grid';

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 50) {
    document.getElementById("nav").classList.add("nav-bg");
  } else {
    document.getElementById("nav").classList.remove("nav-bg");
  }
}