const container = document.querySelector("#container");
const imagesArray = [];
let i;

for (i = 0; i < 149; i++) {

    let imgConstructor = `Initials Image Sequence/B Caligraphy_${String(i).padStart(5, '0')}.png`;
    imagesArray.push(imgConstructor);

}

for (let i = 0; i < 149; i++) {
    let child = document.createElement("div");
    let img = document.createElement("img");
    img.src = imagesArray[i];
    child.appendChild(img);
    child.classList.add("scroll-children");
    child.id = `scroll-child-${i}`;
    container.appendChild(child);
}

let imageDivs = document.querySelectorAll(".scroll-children");


let n;
n = 0;
let lastScrollY = window.scrollY;
let direction = true;
document.addEventListener("DOMContentLoaded", function(){
    n = 0;
    window.scroll = 0;
})
window.addEventListener("scroll", function () {

    const currentScrollY = window.scrollY;
    direction = currentScrollY > lastScrollY;
    lastScrollY = currentScrollY;


    if (direction === true && this.window.scrollY > 0) {
        imageDivs[n].style.visibility = "visible";


        if (n > 0) {
            imageDivs[n - 1].style.visibility = "hidden";
        }
        if (n < 149) {
            n = n + 1;
        }

        if (n == 149) {
            n = 148;
        }

    }

    else if (direction === false && this.window.scrollY > 0) {
        imageDivs[n].style.visibility = "hidden";


        if (n > 0) {
            imageDivs[n - 1].style.visibility = "visible";
        }

        if (n > 0) {
            n = n - 1;
        }

        if (n == 0) {
            n = 0;
        }

    }

    

})