



//-------------------LOGOMENUMAKER-----------------------------

//Initial DOM Pulling
let chakraWrapper = document.getElementById("chakra-wrapper")
moonWrapper = document.getElementById("moon-wrapper");
moon = document.querySelector("#moon-wrapper > svg");
chakra = document.querySelector("#chakra-wrapper > svg");
dividingLine = document.getElementById("dividing-line");
logoWrapper = document.getElementById("logo-wrapper");
body = document.body;
menu = document.getElementById("menu");
let images = ["testimg.jpg", "testimg2.jpg", "testimg3.jpg", "testimg4.jpg"]; // only if images in divideline background desired


// Pre-animation Styling
let height = window.getComputedStyle(chakraWrapper).height;
height = parseFloat(height);
baseUnit = (height / 7); // base unit is derived from the logo grid which is 7 * 8
chakraWrapper.style.paddingRight = baseUnit + "px";
moonWrapper.style.paddingLeft = baseUnit + "px";
let lwheight = parseFloat(window.getComputedStyle(logoWrapper).height);
let randomFlex = 14.28 + Math.random() * (80 - 14.28);
let randomWidth = lwheight + Math.random() * (window.screen.width / 2);
logoWrapper.style.minWidth = logoWrapper.style.height;
dividingLine.style.flex = randomFlex + "%";
logoWrapper.style.width = randomWidth + "px";

// Set up Animation
let intervalID;

if (!intervalID) {
    intervalID = setInterval(changeLogo, 2500);
};

//anim starts/stops based on mouse events
dividingLine.addEventListener("mouseenter", animstopstart);
dividingLine.addEventListener("mouseout", animstopstart);

//main anim functions
function changeLogo() {
    newWidth = lwheight + Math.random() * (window.screen.width / 2);
    newFlex = 14.28 + Math.random() * (80 - 14.28);

    dividingLine.style.flex = newFlex + "%";
    logoWrapper.style.width = newWidth + "px";
}

function stopAnim() {

    clearInterval(intervalID);
    intervalID = null;
    dividingLine.style.flex = "80%";
    logoWrapper.style.width = "60vw";

}

function animstopstart() {
    if (logoWrapper.classList.contains("stopped") == true) {
        intervalID = setInterval(changeLogo, 2500);
        console.log("started");
    }

    else if (logoWrapper.classList.contains("stopped") == false) {
        stopAnim();
        console.log("stopped");
    }
    logoWrapper.classList.toggle("stopped")
}

//-------------------SCROLL CHANGES-----------------------------

window.addEventListener("scroll", function () {
    if (this.document.documentElement.scrollTop == 0) {
        body.style.backgroundColor = "black";
        dividingLine.style.backgroundColor = "white";
        menu.style.backgroundColor = "white";
        moon.style.fill = "white";
        chakra.style.fill = "white";
    }

    else {
        body.style.backgroundColor = "white";
        dividingLine.style.backgroundColor = "black";
        menu.style.backgroundColor = "black";
        moon.style.fill = "black";
        chakra.style.fill = "black";
    }

})

