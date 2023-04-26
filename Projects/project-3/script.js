let collData =[];
let avgRainfall;
let apiKey = `579b464db66ec23bdd0000015bf2471d25f64b645d6cbc127743dc4d`;
let api = `https://api.data.gov.in/resource/8e0bd482-4aba-4d99-9cb9-ff124f6f1c2f?api-key=${apiKey}&format=json&limit=6000`;
let testFig = [55, 500];



getData().then(response =>
filterAndCollate(response)).then(response => 
setupLanding(response)).then(response => 
// createDivs(response)).then(response => 
// countDivs()).then(response =>

setupYearVisualizer(response)).then(response =>
setupParticleVisualizer(response)).then(response=>
setupComparer(response)).then(response=>
hideInitializer());

async function getData(){
  
  let response = await fetch(api);
  const rawData = await response.json();
  console.log("data fetched");
  return rawData;
};





function filterAndCollate(rawData){
  // create 4 variables which house the array of data for the 4 subdivisions
     let subdivisionsArray = [];
     for(let i = 0; i < rawData.records.length; i++){
      subdivisionsArray.push(rawData.records[i].subdivision);
     }
     subdivisionsArray = new Set(subdivisionsArray);
     subdivisionsArray = Array.from(subdivisionsArray);
     
     subdivsIdArray = [];

     for(let i = 0; i < subdivisionsArray.length; i++){
      let subdiv = subdivisionsArray[i];
      let matches = subdiv.match(/\b(\w)/g);
      let id = matches.join('');
      subdivsIdArray.push(id);
     }

     let collatedSubdivArray = [];
     for(let i = 0; i < subdivisionsArray.length; i++){
         let object = {"id":subdivsIdArray[i] + "Data","name":subdivisionsArray[i]};
         collatedSubdivArray.push(object);
     }
     subdivisionsArray = collatedSubdivArray;

     

     let MData = rawData.records.filter((record) => record.subdivision === "Matathwada");
     let VData = rawData.records.filter((record) => record.subdivision === "Vidarbha");
     let KGData = rawData.records.filter((record) => record.subdivision === "Konkan & Goa");
     let MMData = rawData.records.filter((record) => record.subdivision === "Madhya Maharashtra");



     // Creating Object array with year, months*12;
  for(let i = 0; i < MData.length; i++){
         let collJan = Number(MData[i].jan) + Number(VData[i].jan) + Number(KGData[i].jan) + Number(MMData[i].jan);
         let collFeb = Number(MData[i].feb) + Number(VData[i].feb) + Number(KGData[i].feb) + Number(MMData[i].feb);
         let collMar = Number(MData[i].mar) + Number(VData[i].mar) + Number(KGData[i].mar) + Number(MMData[i].mar);
         let collApr = Number(MData[i].apr) + Number(VData[i].apr) + Number(KGData[i].apr) + Number(MMData[i].apr);
         let collMay = Number(MData[i].may) + Number(VData[i].may) + Number(KGData[i].may) + Number(MMData[i].may);
         let collJun = Number(MData[i].jun) + Number(VData[i].jun) + Number(KGData[i].jun) + Number(MMData[i].jun);
         let collJul = Number(MData[i].jul) + Number(VData[i].jul) + Number(KGData[i].jul) + Number(MMData[i].jul);
         let collAug = Number(MData[i].aug) + Number(VData[i].aug) + Number(KGData[i].aug) + Number(MMData[i].aug);
         let collSep = Number(MData[i].sep) + Number(VData[i].sep) + Number(KGData[i].sep) + Number(MMData[i].sep);
         let collOct = Number(MData[i].oct) + Number(VData[i].oct) + Number(KGData[i].oct) + Number(MMData[i].oct);
         let collNov = Number(MData[i].nov) + Number(VData[i].nov) + Number(KGData[i].nov) + Number(MMData[i].nov);
         let collDec = Number(MData[i].dec) + Number(VData[i].dec) + Number(KGData[i].dec) + Number(MMData[i].dec);
         collJan = Math.round((collJan + Number.EPSILON) * 100) / 100;
         collFeb = Math.round((collFeb + Number.EPSILON) * 100) / 100;
         collMar = Math.round((collMar + Number.EPSILON) * 100) / 100;
         collApr = Math.round((collApr + Number.EPSILON) * 100) / 100;
         collMay = Math.round((collMay + Number.EPSILON) * 100) / 100;
         collJun = Math.round((collJun + Number.EPSILON) * 100) / 100;
         collJul = Math.round((collJul + Number.EPSILON) * 100) / 100;
         collAug = Math.round((collAug + Number.EPSILON) * 100) / 100;
         collSep = Math.round((collSep + Number.EPSILON) * 100) / 100;
         collOct = Math.round((collOct + Number.EPSILON) * 100) / 100;
         collNov = Math.round((collNov + Number.EPSILON) * 100) / 100;
         collDec = Math.round((collDec + Number.EPSILON) * 100) / 100;
  
         let collTotal = collJan + collFeb + collMar + collApr + collMay + collJun + collJul + collAug + collSep + collOct + collNov + collDec;
         collTotal = Math.round((collTotal + Number.EPSILON) * 100) / 100;
         let dataObj = { year: MData[i].year, jan: collJan, feb: collFeb, mar: collMar, apr: collApr, may: collMay, jun: collJun, jul: collJul, aug: collAug, sep: collSep, oct: collOct, nov: collNov, dec: collDec, total: collTotal};
         collData.push(dataObj);
         
    }
    console.log("Maharashtra data filtered and collated");
    return rawData;
}





function setupLanding(rawData){
  let tRainfallArray = [];
  for(let i = 0; i < collData.length; i++){
    tRainfallArray.push(collData[i].total);
  }
  
  let totalRainfall = 0;
  for(let i = 0; i < tRainfallArray.length; i++){
    totalRainfall = totalRainfall + tRainfallArray[i];
  }
  
  avgRainfall = totalRainfall/tRainfallArray.length;
  avgRainfall = Math.round((avgRainfall + Number.EPSILON) * 100) / 100;

  let maxRain = Math.max(...tRainfallArray);
  let minRain = Math.min(...tRainfallArray);



  let avgCallout = document.querySelector("#avg-callout");
  
  // avgCallout.innerHTML = avgRainfall + "mm";
  avgCallout.classList.add("counter");
  avgCallout.dataset.target = avgRainfall;
  const counters = document.querySelectorAll('.counter');
// Main function
for(let n of counters) {
  const updateCount = () => {
    const target = + n.getAttribute('data-target');
    const count = + n.innerText;
    const speed = 500; // change animation speed here
    const inc = target / speed; 
    if(count < target) {
      n.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      n.innerText = target;
    }
  }
  updateCount();
  console.log("landing setup");
  return rawData;
}

}

function setupYearVisualizer(rawData){
  function colorBars(i, newBar){

  let percent8k = (collData[i].total/7800)*100;
  newBar.style.opacity = percent8k + "%";
  newBar.style.background = "var(--primary-color)";
  
  }

  for(let i = 0; i < collData.length; i++){
  let barsCon = document.querySelector("#bars-container");
  let newBar = document.createElement("div");
  // let barContent = `<div class="bar-content">
  //                   <p class="bolded">Year:${collData[i].year}</p>
  //                   <p>Jan: ${collData[i].jan}mm</p>
  //                   <p>Feb: ${collData[i].feb}mm</p>
  //                   <p>Mar: ${collData[i].mar}mm</p>
  //                   <p>Apr: ${collData[i].apr}mm</p>
  //                   <p>May: ${collData[i].may}mm</p>
  //                   <p>Jun: ${collData[i].jun}mm</p>
  //                   <p>Jul: ${collData[i].jul}mm</p>
  //                   <p>Aug: ${collData[i].aug}mm</p>
  //                   <p>Sep: ${collData[i].sep}mm</p>
  //                   <p>Oct: ${collData[i].oct}mm</p>
  //                   <p>Nov: ${collData[i].nov}mm</p>
  //                   <p>Dec: ${collData[i].dec}mm</p>
  //                   <p>Total: ${collData[i].total}mm</p>
  //                   </div>`
  // newBar.innerHTML = barContent
  let yvCallout = document.querySelector("#yv-callout");
  let avgButton = document.querySelector("#view-by-avg-button");
  let scaleButton = document.querySelector("#view-by-scale-button");
  newBar.classList.add("bar");
  newBar.style.animationDelay = (i * 0.02) + "s";
  barsCon.appendChild(newBar);
  
  newBar.addEventListener("mouseover", function(){
    yvCallout.innerHTML = "In " + collData[i].year + " it rained " + collData[i].total + " mm in MH.";
    newBar.style.flexGrow = "5"
    newBar.style.border = "dotted black 2px"
   
  })

  newBar.addEventListener("mouseout", function(){
    yvCallout.innerHTML = "";
    newBar.style.flexGrow =  "1";
    newBar.style.border = "none";
    
  })

  scaleButton.classList.add("btnclicked");
  colorBars(i, newBar);

  avgButton.addEventListener("click", function(){
    
    avgButton.classList.toggle("btnclicked");
    scaleButton.classList.toggle("btnclicked");

    if (collData[i].total >= avgRainfall){
      newBar.style.background = "var(--primary-color)";
      newBar.style.opacity = "1";
      
    }
    else{ newBar.style.background = "var(--primary-color)";
         newBar.style.opacity = "0.5";}

    

  })
  
  scaleButton.addEventListener("click", function(){
    scaleButton.classList.toggle("btnclicked");
    avgButton.classList.toggle("btnclicked");
    colorBars(i, newBar);
    

  })
  }
  console.log("year visualizer setup");
  return rawData

}

function setupComparer(rawData){

  let dropDownA = document.querySelector("#state-dropdown-A");
  let dropDownB = document.querySelector("#state-dropdown-B");

  createA();
  createB();


  dropDownA.addEventListener("change", function(){
    let oldDOM = document.querySelector(".result-A");
      let currentAValue = dropDownA.value;
      let currentBValue = dropDownB.value;
      let resultA;
      let resultB;
      let percent6k;
      let resultCon = document.querySelector("#comparison-result-A");
  
      if (currentAValue == "Maharashtra & Goa"){
         resultA = avgRainfall;
      }
      else resultA = calcComparison(currentAValue);
      
       
      if (currentBValue == "Maharashtra & Goa"){
        resultB = avgRainfall;
      }
      else resultB = calcComparison(currentBValue);
    
     
      percent6k = (resultA/6000) * 100;
      oldDOM.style.height = percent6k + "%";
      oldDOM.style.opacity = percent6k + "%";

  })

  dropDownB.addEventListener("change", function(){
    let oldDOM = document.querySelector(".result-B");
      let currentAValue = dropDownA.value;
      let currentBValue = dropDownB.value;
      let resultA;
      let resultB;
      let percent6k;
      let resultCon = document.querySelector("#comparison-result-A");
  
      if (currentAValue == "Maharashtra & Goa"){
         resultA = avgRainfall;
      }
      else resultA = calcComparison(currentAValue);
      
       
      if (currentBValue == "Maharashtra & Goa"){
        resultB = avgRainfall;
      }
      else resultB = calcComparison(currentBValue);
    
     
      percent6k = (resultB/6000) * 100;
      oldDOM.style.height = percent6k + "%";
      oldDOM.style.opacity = percent6k + "%";
  })


  function createA(){let currentAValue = dropDownA.value;
    let currentBValue = dropDownB.value;
    let resultA;
    let resultB;
    let percent6k;
    let resultCon = document.querySelector("#comparison-result-A");

    if (currentAValue == "Maharashtra & Goa"){
       resultA = avgRainfall;
    }
    else resultA = calcComparison(currentAValue);
    
     
    if (currentBValue == "Maharashtra & Goa"){
      resultB = avgRainfall;
    }
    else resultB = calcComparison(currentBValue);
  
    percent6k = (resultA/6000) * 100;
    
   
   
    let resultDOM = document.createElement("div");
    resultDOM.classList.add("result");
    resultDOM.classList.add("result-A");
    resultDOM.style.height = percent6k + "%";
    resultDOM.style.opacity = percent6k + "%";
    resultCon.appendChild(resultDOM);
    };
function createB(){
      let currentAValue = dropDownA.value;
      let currentBValue = dropDownB.value;
      let resultA;
      let resultB;
      let percent6k;
      let resultCon = document.querySelector("#comparison-result-B");
      
      if (currentAValue == "Maharashtra & Goa"){
         resultA = avgRainfall;
      }
      else resultA = calcComparison(currentAValue);
      
       
      if (currentBValue == "Maharashtra & Goa"){
        resultB = avgRainfall;
      }
      else resultB = calcComparison(currentBValue);
  
      percent6k = (resultB/6000) * 100;
      let oldDOM = document.querySelector(".result-B");
      if(oldDOM !== null){
      oldDOM.remove();}
      let resultDOM = document.createElement("div");
      resultDOM.classList.add("result");
      resultDOM.classList.add("result-B");
      resultDOM.style.height = percent6k + "%";
      resultDOM.style.opacity = percent6k + "%";
      resultCon.appendChild(resultDOM);
      };


function calcComparison(subdiv){

  let thisData = rawData.records.filter((record) => record.subdivision == subdiv);
let thisArray = [];


for (let i = 0; i < thisData.length; i++){

  thisArray.push(thisData[i].annual);
}

thisArray = thisArray.filter((x) => x !== 'NA');
let numberArray = [];
for (let i = 0; i < thisArray.length; i++){
  numberArray.push(parseInt(thisArray[i]));
}
thisArray = numberArray;
thisTotal = 0;
for(let i = 0; i < thisArray.length; i++){
  thisTotal += thisArray[i];
}

thisAvg = thisTotal/thisArray.length;
thisAvg = Math.round((thisAvg + Number.EPSILON) * 100) / 100;

return thisAvg

}
console.log("comparer setup");
}


function setupParticleVisualizer(rawData){
    let janArray = [];
    let febArray = [];
    let marArray = [];
    let aprArray = [];
    let mayArray = [];
    let junArray = [];
    let julArray = [];
    let augArray = [];
    let sepArray = [];
    let octArray = [];
    let novArray = [];
    let decArray = [];
// adding annual month data to respective month arrays
for(let i = 0; i < collData.length; i++){
    janArray.push(collData[i].jan);
    febArray.push(collData[i].feb);
    marArray.push(collData[i].mar);
    aprArray.push(collData[i].apr);
    mayArray.push(collData[i].may);
    junArray.push(collData[i].jun);
    julArray.push(collData[i].jul);
    augArray.push(collData[i].aug);
    sepArray.push(collData[i].sep);
    octArray.push(collData[i].oct);
    novArray.push(collData[i].nov);
    decArray.push(collData[i].dec);
}

let avgJan = janArray.reduce((a, b) => a + b, 0) / janArray.length;
let avgFeb = febArray.reduce((a, b) => a + b, 0) / febArray.length;
let avgMar = marArray.reduce((a, b) => a + b, 0) / marArray.length;
let avgApr = aprArray.reduce((a, b) => a + b, 0) / aprArray.length;
let avgMay = mayArray.reduce((a, b) => a + b, 0) / mayArray.length;
let avgJun = junArray.reduce((a, b) => a + b, 0) / junArray.length;
let avgJul = julArray.reduce((a, b) => a + b, 0) / julArray.length;
let avgAug = augArray.reduce((a, b) => a + b, 0) / augArray.length;
let avgSep = sepArray.reduce((a, b) => a + b, 0) / sepArray.length;
let avgOct = octArray.reduce((a, b) => a + b, 0) / octArray.length;
let avgNov = novArray.reduce((a, b) => a + b, 0) / novArray.length;
let avgDec = decArray.reduce((a, b) => a + b, 0) / decArray.length;
  

let avgArray = [{month: "January", average: avgJan}, {month: "February", average: avgFeb}, {month: "March", average: avgMar}, {month: "April", average: avgApr},{month: "May", average: avgMay},{month: "June", average: avgJun},{month: "July", average: avgJul},{month: "August", average: avgAug},{month: "September", average: avgSep}, {month: "October", average: avgOct},{month: "November", average: avgNov},{month: "December", average: avgDec}];
for(let i = 0; i < avgArray.length; i++){
    avgArray[i].average = Math.round((avgArray[i].average + Number.EPSILON) * 100) / 100;
}

  let monthDD = document.querySelector("#monthDropDown");
  let monthCallout = document.querySelector("#pv-month-callout");
  let averageCallout = document.querySelector("#pv-avg-callout");

  monthCallout.innerHTML = "January";
  averageCallout.innerHTML = avgArray[0].average + "mm";

  monthDD.addEventListener("change", function(){

    for(let i = 0; i < avgArray.length; i++){
      if (monthDD.value == avgArray[i].month){
        monthCallout.innerHTML = avgArray[i].month;
        averageCallout.innerHTML = avgArray[i].average + "mm";
      }
    }
})
console.log("particle visualizer setup");
return rawData;
}

function hideInitializer(){
  let initializer = document.querySelector("#initializer");
  initializer.style.opacity = "0";
  initializer.style.visibility = "hidden";
  console.log("initializer hidden and site loaded succesfully");
}









































// P5

class Particle {

  constructor(){
    this.x = random(0,width);
    this.y = random(0,height);
    this.r = random(1,8);
    this.xSpeed = random(0,0);
    this.ySpeed = random(0.5,4.5);
  }

  createParticle() {
    noStroke();
    fill('rgba(106,114,132,0.5)');
    circle(this.x,this.y,this.r);
  }

  moveParticle() {
    if(this.x < 0 || this.x > width)
      this.xSpeed*=-1;
    if(this.y < 0 || this.y > height)
      this.ySpeed*=-1;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }


}

let particles = [];

function setup() {
  var canvasDiv = document.getElementById("particle-visualizer-bckg");
  var width = canvasDiv.offsetWidth;
  var height = canvasDiv.offsetheight;
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('particle-visualizer-bckg');

  for(let i = 0;i< testFig[1];i++){
    particles.push(new Particle());
  }
}

function draw() {

  background('white');

  for(let i = 0;i< testFig[1];i++) {
    particles[i].createParticle();
    particles[i].moveParticle();

  }

}

  // PARTICLE GENERATION ENDS


