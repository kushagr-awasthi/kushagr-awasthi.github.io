const controlButton = document.getElementById("control-button"),
    controlCenter = document.getElementById("control-center"),
    controlCloseButton = document.getElementById("control-close-button"),
    clearCanvasButton = document.getElementById("clear-canvas-button"),
    brushSizeSlider = document.getElementById("brush-sizer"),
    speedSlider = document.getElementById("speed-slider"),
    coloriseCheckbox = document.getElementById("colorise-checkbox");
    mainCTA = document.getElementById("main-cta");

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
    let imageLink = `/Projects/Thesis/256Images/Images/${arrayName}/${arrayName}_${(i+1).toString().padStart(2,"0")}.webp`;
    array.push(imageLink);
}
}

constructImageArray("Gracious", graciousImages, 43);
constructImageArray("Open", openImages, 50);
constructImageArray("Opinionated", opinionatedImages, 57);
constructImageArray("Ornamented", ornamentedImages, 61);
constructImageArray("Rooted", rootedImages, 40);



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
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

  shuffle(collatedImages);

function setRectColor(facet) {
    if (coloriseCheckbox.checked == true){
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
} else return '#ffffff00';

}

let currentImageIndex = 0;

let imgWidth = brushSizeSlider.value;
brushSizeSlider.addEventListener("input", function(){
    imgWidth = brushSizeSlider.value;
    return imgWidth;
});
let speedFactor = speedSlider.value / 100;
speedSlider.addEventListener("input", function(){
    speedFactor = speedSlider.value / 100;
    return speedFactor;
})
function calculateImageHeight(img, imgWidth) {
    if (img.complete) {
        const naturalWidth = img.naturalWidth;
        const naturalHeight = img.naturalHeight;
        const aspectRatio = naturalHeight / naturalWidth;
        const imgHeight = imgWidth * aspectRatio;
        return imgHeight;
    } else {
        console.log("Image not loaded yet.");
        return null;
    }
}

let particles = [];
let imgHeight = imgWidth;

class Particle{
    constructor( x, y, imgSrc, velocityX, velocityY, facet, lifespan = 1000000) {
        this.x = x;
        this.y = y;
        this.img = new Image();
        this.img.src = imgSrc;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
        this.facet = facet;
        this.lifespan = lifespan;
        this.creationTime = Date.now();
    }

    update() {
        this.x += this.velocityX;
        this.y += this.velocityY;
        let elapsedTime = Date.now() - this.creationTime;
        this.lifespan -= elapsedTime;
    }

    draw() {
        if(this.img.complete) {
            imgHeight = calculateImageHeight(this.img, imgWidth);
            ctx.drawImage(this.img, this.x - imgWidth / 2, this.y - imgHeight / 2, imgWidth, imgHeight);
            ctx.save();
            ctx.globalCompositeOperation = 'color';
            const rectangleColor = setRectColor(this.facet);
            ctx.fillStyle = rectangleColor;
            ctx.fillRect(this.x - imgWidth / 2, this.y - imgHeight / 2, imgWidth, imgHeight);
            ctx.restore();
        }
    }

    isExpired() {
        return this.lifespan <= 0;
    }
}

let prevX = 0;
let prevY = 0;

function createParticle(e) {
    const currentImage = collatedImages[currentImageIndex];
    const imgSrc = currentImage.url;
    let velocityX = (prevX - e.clientX) * speedFactor;
    let velocityY = (prevY - e.clientY) * speedFactor;


    const particle = new Particle(e.clientX, e.clientY, imgSrc, velocityX, velocityY, currentImage.facet, 1000000);
    particles.push(particle);


    currentImageIndex = (currentImageIndex + 1) % collatedImages.length;

    prevX = e.clientX;
    prevY = e.clientY;
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle, index) => {
        particle.update();
        particle.draw();
    });

    for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        particle.update();
        if (particle.isExpired()) {
            particles.splice(i, 1);
        } else {
            particle.draw();
        }
    }
    requestAnimationFrame(animate);
}
canvas.addEventListener('mousemove', (e) => {
    createParticle(e);
});

canvas.addEventListener("click", function () {
    mainCTA.style.opacity = "0";
animate();

});


// --------------WORKING---------------------
// function drawImage(e) {
//     let img = new Image();
//     img.src = collatedImages[currentImageIndex].url;
//     img.onload = function() {
//         const imgHeight = (img.naturalHeight / img.naturalWidth) * imgWidth;
//         ctx.drawImage(img, (e.clientX - (imgWidth/2)), (e.clientY- (imgHeight/2)), imgWidth, imgHeight);
//         ctx.save();
//         ctx.globalCompositeOperation = 'color';
//         const rectangleColor = setRectColor(collatedImages[currentImageIndex].facet);
//         ctx.fillStyle = rectangleColor;
//         ctx.fillRect((e.clientX - (imgWidth/2)), (e.clientY- (imgHeight/2)), imgWidth, imgHeight);
//         ctx.restore();
//         currentImageIndex = currentImageIndex + 1;
//         if (currentImageIndex == 251){
//             currentImageIndex = 0;
//         }
//     };
    
   
    


// }

// function handleMouseEvent(e) {
//     drawImage(e);
// }

// const throttledMouseMove = throttle(handleMouseEvent, 0);
//  canvas.addEventListener("click", function(){
//  canvas.addEventListener("mousemove", throttledMouseMove);
//  clearCanvasButton.style.opacity = "1";
// }, once = true);

// clearCanvasButton.addEventListener("click", function(){
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.save();
//     ctx.restore();
// })

canvas.addEventListener("click", function(){
    if (controlVisible === true){
        controlCenter.style.transform = "translateX(-100%)";
        controlVisible = false;
    } else return;
})

// function throttle(func, limit) {
//     let lastFunc;
//     let lastRan;
//     return function() {
//         const context = this;
//         const args = arguments;
//         if (!lastRan) {
//             func.apply(context, args);
//             lastRan = Date.now();
//         } else {
//             clearTimeout(lastFunc);
//             lastFunc = setTimeout(function() {
//                 if ((Date.now() - lastRan) >= limit) {
//                     func.apply(context, args);
//                     lastRan = Date.now();
//                 }
//             }, limit - (Date.now() - lastRan));
//         }
//     };
// }
