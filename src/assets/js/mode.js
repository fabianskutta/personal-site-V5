var mode = localStorage.getItem("mode");
if (mode == "light") {
    lightmode();
} else {
    if (mode == "dark") {
        darkmode();
    } else {
        devicemode ();
    }
}


document.getElementById('mode').addEventListener('click', event => {
    if (document.getElementsByTagName( 'html' )[0].classList.contains('lightmode')) {
        darkmode();
    } else {
        if (document.getElementsByTagName( 'html' )[0].classList.contains('darkmode')) {
            lightmode();
        }
    }
})

function lightmode () {
    document.getElementsByTagName( 'html' )[0].classList.remove("darkmode");
    document.getElementsByTagName( 'html' )[0].classList.add("lightmode");
    document.getElementById('mode').innerHTML = `<i class="fa-solid fa-lightbulb"></i>`;
    localStorage.setItem("mode", "light");
}

function darkmode () {
    document.getElementsByTagName( 'html' )[0].classList.remove("lightmode");
    document.getElementsByTagName( 'html' )[0].classList.add("darkmode");
    document.getElementById('mode').innerHTML = `<i class="fa-solid fa-moon"></i>`;
    localStorage.setItem("mode", "dark");
}

function devicemode () {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.getElementsByTagName( 'html' )[0].classList.add("lightmode");
        document.getElementById('mode').innerHTML = `<i class="fa-solid fa-lightbulb"></i>`;
    } else {
        document.getElementsByTagName( 'html' )[0].classList.add("darkmode");
        document.getElementById('mode').innerHTML = `<i class="fa-solid fa-moon"></i>`;
    }
    localStorage.setItem("mode", "device");
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    mode = localStorage.getItem("mode");
    if (mode == "device") {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            document.getElementsByTagName( 'html' )[0].classList.remove("darkmode");
            document.getElementsByTagName( 'html' )[0].classList.add("lightmode");
            document.getElementById('mode').innerHTML = `<i class="fa-solid fa-lightbulb"></i>`;
        } else {
            document.getElementsByTagName( 'html' )[0].classList.remove("lightmode");
            document.getElementsByTagName( 'html' )[0].classList.add("darkmode");
            document.getElementById('mode').innerHTML = `<i class="fa-solid fa-moon"></i>`;
        }
    }
});