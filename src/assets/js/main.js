// CSS
import '../css/main.scss';

// JS
import '../js/heroAnimation';
import '../js/bar';
import '../js/mode';
import '../js/nav';
import '../js/footer';
import '../js/cursor';

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 50) {
    document.getElementById("nav").classList.add("nav-bg");
  } else {
    document.getElementById("nav").classList.remove("nav-bg");
  }
}

function getRandom (list) {
  return list[Math.floor((Math.random()*list.length))];
}


// change title when another tab is opened (inspired by https://bitpunk.de/)
document.addEventListener("visibilitychange", function() {
  if (document.visibilityState === 'hidden') {
    var randomElement = getRandom(['😭 I miss you...', '(4) Matches 🔥', '🤔 Where are you?'])
    var newtitle = `${randomElement} • Fabian`;
    document.title = newtitle;
  } else {
    document.title = 'Fabian Skutta'; 
  }
})