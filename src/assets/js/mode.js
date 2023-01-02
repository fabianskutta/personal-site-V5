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
        if (document.getElementsByTagName( 'html' )[0].classList.contains('devicemode')) {
            lightmode();
        } else {
            if (document.getElementsByTagName( 'html' )[0].classList.contains('darkmode')) {
                devicemode();
            }
        }
    }
})

function lightmode () {
    document.getElementsByTagName( 'html' )[0].classList.remove("devicemode");
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
    document.getElementsByTagName( 'html' )[0].classList.remove("darkmode");
    document.getElementsByTagName( 'html' )[0].classList.add("devicemode");
    document.getElementById('mode').innerHTML = `<i class="fa-solid fa-desktop"></i>`;
    localStorage.setItem("mode", "device");
}