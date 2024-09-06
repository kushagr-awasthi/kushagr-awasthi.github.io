
const graciousImages = [],
      openImages = [],
      opinionatedImages = [],
      ornamentedImages = [],
      rootedImages = [];

const parentDiv = document.getElementById("parent-div");



const constructImageArray = (arrayName, array, index) => {     
    for (let i = 0; i < index; i++){
    let imageLink = `/Projects/Thesis/256Images/Images/${arrayName}/${arrayName}_${(i+1).toString().padStart(2,"0")}.webp`;
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
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

  shuffle(collatedImages);


  for (let i = 0; i < collatedImages.length; i++){
    let child = document.createElement("div");
    child.classList.add("child-div");
    if (collatedImages[i].facet == "gracious"){
        child.style.backgroundColor = "#d3b9d9";
        child.classList.add("gracious");
    } else if (collatedImages[i].facet == "open"){
        child.style.backgroundColor = "#8cd1ed";
        child.classList.add("open");
    } else if (collatedImages[i].facet == "ornamented"){
        child.style.backgroundColor = "#f4785c";
        child.classList.add("ornamented");
    } else if (collatedImages[i].facet == "opinionated"){
        child.style.backgroundColor = "#ffc430";
        child.classList.add("opinionated");
    } else if (collatedImages[i].facet == "rooted"){
        child.style.backgroundColor = "#b5e78d";
        child.classList.add("rooted");
    };
    child.innerHTML = `<img src="${collatedImages[i].url}">`;
    parentDiv.appendChild(child);
  }

  let childDivs = document.querySelectorAll(".child-div");
  let rtCheckbox = document.getElementById("rt-checkbox"),
      opCheckbox = document.getElementById("op-checkbox"),
      oiCheckbox = document.getElementById("oi-checkbox"),
      orCheckbox = document.getElementById("or-checkbox"),
      grCheckbox = document.getElementById("gr-checkbox");


rtCheckbox.addEventListener("change", function(){
if(rtCheckbox.checked){
    for (let i = 0; i < childDivs.length; i++){
        if (childDivs[i].classList.contains("rooted")){
            childDivs[i].style.display = "block";}
        
}} else {
    for (let i = 0; i < childDivs.length; i++){
        if (childDivs[i].classList.contains("rooted")){
            childDivs[i].style.display = "none";}
}
}});

opCheckbox.addEventListener("change", function(){
    if(opCheckbox.checked){
        for (let i = 0; i < childDivs.length; i++){
            if (childDivs[i].classList.contains("open")){
                childDivs[i].style.display = "block";}
            
    }} else {
        for (let i = 0; i < childDivs.length; i++){
            if (childDivs[i].classList.contains("open")){
                childDivs[i].style.display = "none";}
    }
    }});

    oiCheckbox.addEventListener("change", function(){
        if(oiCheckbox.checked){
            for (let i = 0; i < childDivs.length; i++){
                if (childDivs[i].classList.contains("opinionated")){
                    childDivs[i].style.display = "block";}
                
        }} else {
            for (let i = 0; i < childDivs.length; i++){
                if (childDivs[i].classList.contains("opinionated")){
                    childDivs[i].style.display = "none";}
        }
        }});

        orCheckbox.addEventListener("change", function(){
            if(orCheckbox.checked){
                for (let i = 0; i < childDivs.length; i++){
                    if (childDivs[i].classList.contains("ornamented")){
                        childDivs[i].style.display = "block";}
                    
            }} else {
                for (let i = 0; i < childDivs.length; i++){
                    if (childDivs[i].classList.contains("ornamented")){
                        childDivs[i].style.display = "none";}
            }
            }});

            grCheckbox.addEventListener("change", function(){
                if(grCheckbox.checked){
                    for (let i = 0; i < childDivs.length; i++){
                        if (childDivs[i].classList.contains("gracious")){
                            childDivs[i].style.display = "block";}
                        
                }} else {
                    for (let i = 0; i < childDivs.length; i++){
                        if (childDivs[i].classList.contains("gracious")){
                            childDivs[i].style.display = "none";}
                }
                }});