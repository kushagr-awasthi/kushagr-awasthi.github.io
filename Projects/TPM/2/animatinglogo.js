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
menuItems = document.querySelectorAll(".menu-item");
let images = ["testimg.jpg", "testimg2.jpg", "testimg3.jpg", "testimg4.jpg"]; // only if images in divideline background desired


// Pre-animation Styling
let height = window.getComputedStyle(chakraWrapper).height;
height = parseFloat(height);
baseUnit = (height / 7); // base unit is derived from the logo grid which is 7 * 8
chakraWrapper.style.paddingRight = baseUnit + "px";
moonWrapper.style.paddingLeft = baseUnit + "px";
let lwheight = parseFloat(window.getComputedStyle(logoWrapper).height);
let randomFlex = 14.28 + Math.random() * (100 - 14.28);
let randomWidth = lwheight + Math.random() * (window.screen.width / 2);
logoWrapper.style.minWidth = logoWrapper.style.height;
dividingLine.style.flex = randomFlex + "%";
logoWrapper.style.width = randomWidth + "px";

// Set up Animation
let intervalID;

if (!intervalID) {
    intervalID = setInterval(changeLogo, 2500);
};



//main anim functions
function changeLogo() {
    newWidth = lwheight + Math.random() * (window.screen.width / 2);
    newFlex = 14.28 + Math.random() * (100 - 14.28);

    dividingLine.style.flex = newFlex + "%";
    logoWrapper.style.width = newWidth + "px";
}


document.addEventListener('mousemove', function(e) {

    const centerX = window.innerWidth / 2; // Center of the screen
    const mouseX = e.clientX; // Mouse X position

    // Calculate rotation angle based on the difference between mouse X and center X
    const rotationDegrees = (mouseX - centerX) / centerX * 90; // Scale rotation: +/- 90 degrees

    // Update the CSS transform property to rotate element
    document.addEventListener('mousemove', function(e) {
    logoWrapper.style.transform = `rotate(${rotationDegrees}deg) scale(${100 + rotationDegrees}%)`;
    })
});

// Listen for the device orientation event and handle the device's rotation
window.addEventListener('deviceorientation', function(event) {
    const alpha = event.alpha; // Device rotation around the y-axis in degrees

    // You can scale the rotation to your needs, here assuming -90 to 90 degrees
    const rotationDegrees = alpha; // Direct use of gamma for rotation

    // Update the CSS transform property to rotate and scale the element
    logoWrapper.style.transform = `rotate(${rotationDegrees}deg) scale(${100 + rotationDegrees}%)`;
});


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




  