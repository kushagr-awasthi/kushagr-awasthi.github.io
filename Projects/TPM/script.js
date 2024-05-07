



//-------------------LOGOMAKER-----------------------------

let chakraWrapper = document.getElementById("chakra-wrapper")
    moonWrapper = document.getElementById("moon-wrapper");
    dividingLine = document.getElementById("dividing-line");
    logoWrapper = document.getElementById("logo-wrapper");
    sizeSlider = document.getElementById("size-ranger");
    header = document.querySelector("header");

header.style.height = sizeSlider.value + "px";

sizeSlider.addEventListener("input", function(){
    header.style.height = sizeSlider.value + "px";
})  
//Set Padding of Moon and Chakra to % of height

let height = window.getComputedStyle(chakraWrapper).height;
     height = parseFloat(height);

baseUnit = (height/7);
chakraWrapper.style.paddingRight = baseUnit + "px";
moonWrapper.style.paddingLeft = baseUnit + "px";
let lwheight = parseFloat(window.getComputedStyle(logoWrapper).height);

    let randomFlex = 14.28 + Math.random() * (80 - 14.28);
    let randomWidth = lwheight + Math.random() * (window.screen.width/2);
console.log(randomWidth);
console.log("this is the width: " + randomWidth, "this is the flex of the divline: " + randomFlex);

logoWrapper.style.minWidth = logoWrapper.style.height;
dividingLine.style.flex= randomFlex + "%";
logoWrapper.style.width=randomWidth + "px";

function divideRandom() {


}
