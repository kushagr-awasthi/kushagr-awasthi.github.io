const controlButton = document.getElementById("control-button"),
    controlCenter = document.getElementById("control-center"),
    controlCloseButton = document.getElementById("control-close-button"),
    clearCanvasButton = document.getElementById("clear-canvas-button"),
    brushSizeSlider = document.getElementById("brush-sizer");

let controlVisible = false;

controlButton.addEventListener("click", function(){
    if (controlVisible === false){
        controlCenter.style.transform = "translateX(0)";
        controlVisible = true;
    }
    else if (controlVisible === true){
        controlCenter.style.transform = "translateX(-100%)";
        controlVisible = false;
    } else return;
});

controlCloseButton.addEventListener("click", function(){
    if (controlVisible === false){
        controlCenter.style.transform = "translateX(0)";
        controlVisible = true;
    }
    else if (controlVisible === true){
        controlCenter.style.transform = "translateX(-100%)";
        controlVisible = false;
    } else return;
});






const canvas = document.getElementById("main-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const graciousImages = [],
      openImages = [],
      opinionatedImages = [],
      ornamentedImages = [],
      rootedImages = [];




const constructImageArray = (arrayName, array, index) => {     
    for (let i = 0; i < index; i++){
    let imageLink = `Images/${arrayName}/${arrayName}_${(i+1).toString().padStart(2,"0")}.webp`;
    array.push(imageLink);
}
}

constructImageArray("gracious", graciousImages, 43);
constructImageArray("open", openImages, 50);
constructImageArray("opinionated", opinionatedImages, 57);
constructImageArray("ornamented", ornamentedImages, 61);
constructImageArray("rooted", rootedImages, 40);



const collatedImages = [];

const createObjectArray = (facet, array, index) => {
    
    for (let i = 0; i < index; i++){
        let obj = {};
        obj.url = array[i];
        obj.facet = facet;
        collatedImages.push(obj);
    }
}



createObjectArray("gracious", graciousImages, 43);
createObjectArray("open", openImages, 50);
createObjectArray("opinionated", opinionatedImages, 57);
createObjectArray("ornamented", ornamentedImages, 61);
createObjectArray("rooted", rootedImages, 40);

function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

  shuffle(collatedImages);

function setRectColor(facet) {
    if (facet == "gracious"){
        return '#d3b9d9';
    } else if (facet == "open"){
        return '#8cd1ed'
    } else if (facet == "opinionated"){
        return '#ffc430';
    } else if (facet == "ornamented"){
        return '#f4785c';
    } else if (facet == "rooted"){
        return '#b5e78d';
    } else return '#ffffff';
}

let currentImageIndex = 0;
let imgWidth = brushSizeSlider.value;
brushSizeSlider.addEventListener("input", function(){
    imgWidth = brushSizeSlider.value;
    return imgWidth;
})


function drawImage(e) {
    let img = new Image();
    img.src = collatedImages[currentImageIndex].url;
    img.onload = function() {
        
        const imgHeight = (img.naturalHeight / img.naturalWidth) * imgWidth;
        ctx.drawImage(img, (e.clientX - (imgWidth/2)), (e.clientY- (imgHeight/2)), imgWidth, imgHeight);
        ctx.save();
        ctx.globalCompositeOperation = 'color';
        const rectangleColor = setRectColor(collatedImages[currentImageIndex].facet);
        ctx.fillStyle = rectangleColor;
        ctx.fillRect((e.clientX - (imgWidth/2)), (e.clientY- (imgHeight/2)), imgWidth, imgHeight);
        ctx.restore();
        currentImageIndex = currentImageIndex + 1;
        if (currentImageIndex == 251){
            currentImageIndex = 0;
        }
    };
    
   
    


}

function handleMouseEvent(e) {
    drawImage(e);
}

const throttledMouseMove = throttle(handleMouseEvent, 0);
 canvas.addEventListener("click", function(){
 canvas.addEventListener("mousemove", throttledMouseMove);
 clearCanvasButton.style.opacity = "1";
}, once = true);

clearCanvasButton.addEventListener("click", function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.restore();
})

canvas.addEventListener("click", function(){
    if (controlVisible === true){
        controlCenter.style.transform = "translateX(-100%)";
        controlVisible = false;
    } else return;
})








function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function() {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}
