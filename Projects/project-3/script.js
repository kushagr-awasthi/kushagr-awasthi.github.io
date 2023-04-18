let collData =[];
let avgRainfall;
let apiKey = `579b464db66ec23bdd0000015bf2471d25f64b645d6cbc127743dc4d`;
let api = `https://api.data.gov.in/resource/8e0bd482-4aba-4d99-9cb9-ff124f6f1c2f?api-key=${apiKey}&format=json&limit=6000`;
let testFig = [55, 500];



getData().then(response =>
filterAndCollate(response)).then(response => 
calcAVG()).then(response => 
// createDivs(response)).then(response => 
// countDivs()).then(response =>
miscFunction()).then(response =>
droplets()).then(response=>
  setup()).then(response=>
    draw()).then(response=>
hideInitializer());

async function getData(){
  
  let response = await fetch(api);
  const rawData = await response.json();
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
     console.log(subdivisionsArray);
    
     let ANIData = rawData.records.filter((record) => record.subdivision === "Andaman & Nicobar");
     let APData = rawData.records.filter((record) => record.subdivision === "Arunachal Pradesh");
     let AMData = rawData.records.filter((record) => record.subdivision === "Assam & Meghalaya");
     let NMMTData = rawData.records.filter((record) => record.subdivision === "Naga Mani Mizo Tripura");
     let SHWBSData = rawData.records.filter((record) => record.subdivision === "Sub Himalayan West Bengal & Sikkim");
     let GWBData = rawData.records.filter((record) => record.subdivision === "Gangetic West Bengal");
     let OData = rawData.records.filter((record) => record.subdivision === "Orissa");
     let JData = rawData.records.filter((record) => record.subdivision === "Jharkhand");
     let BData = rawData.records.filter((record) => record.subdivision === "Bihar");
     let EUPData = rawData.records.filter((record) => record.subdivision === "East Uttar Pradesh");
     let WUPData = rawData.records.filter((record) => record.subdivision === "West Uttar Pradesh");
     let UData = rawData.records.filter((record) => record.subdivision === "Uttarakhand");
     let PData = rawData.records.filter((record) => record.subdivision === "Punjab");
     let HPData = rawData.records.filter((record) => record.subdivision === "Himachal Pradesh");
     let JKData = rawData.records.filter((record) => record.subdivision === "Jammu & Kashmir");
     let WRData = rawData.records.filter((record) => record.subdivision === "West Rajasthan");
     let ERData = rawData.records.filter((record) => record.subdivision === "East Rajasthan");
     let WMPData = rawData.records.filter((record) => record.subdivision === "West Madhya Pradesh");
     let EMPData = rawData.records.filter((record) => record.subdivision === "East Madhya Pradesh");
     let GRData = rawData.records.filter((record) => record.subdivision === "Gujarat Region");
     let SKData = rawData.records.filter((record) => record.subdivision === "Saurashtra & Kutch");
     let CData = rawData.records.filter((record) => record.subdivision === "Chattisgarh");
     let CAPData = rawData.records.filter((record) => record.subdivision === "Coastal Andhra Pradesh");
     let TData = rawData.records.filter((record) => record.subdivision === "Telangana");
     let RData = rawData.records.filter((record) => record.subdivision === "Rayalseema");
     let TNData = rawData.records.filter((record) => record.subdivision === "Tamil Nadu");
     let CKData = rawData.records.filter((record) => record.subdivision === "Coastal Karnataka");
     let NIKData = rawData.records.filter((record) => record.subdivision === "North Interior Karnataka");
     let SIKData = rawData.records.filter((record) => record.subdivision === "South Interior Karnataka");
     let KData = rawData.records.filter((record) => record.subdivision === "Kerala");
     let LData = rawData.records.filter((record) => record.subdivision === "Lakshadweeo");

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
   
}
function calcAVG(){
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
  return avgRainfall;
}

function miscFunction(){

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
}


// var scrollTrigger;
// var ref = document.querySelector("#landing");
// var refStyle = getComputedStyle(ref);
// var refHeight = (refStyle.height).slice(0, -2)/2;
// var header = document.querySelector("header");
// var body = document.querySelector("#main");
// scrollTrigger = refHeight;


// body.addEventListener("scroll", function() {
//   if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
//     header.style.background = "blue";
//   } else {
//     header.style.background = "red";
//   }
// });




}

function droplets(){
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
  console.log(avgArray);
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

}

function hideInitializer(){
  let initializer = document.querySelector("#initializer");
  initializer.style.opacity = "0";
  initializer.style.visibility = "hidden";
}

// PARTICLE GENERATION

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


