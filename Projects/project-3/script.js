let collData =[];
let avgRainfall;
let apiKey = `579b464db66ec23bdd0000015bf2471d25f64b645d6cbc127743dc4d`;
let api = `https://api.data.gov.in/resource/8e0bd482-4aba-4d99-9cb9-ff124f6f1c2f?api-key=${apiKey}&format=json&limit=6000`;


getData().then(response =>
filterAndCollate(response)).then(response => 
calcAVG()).then(response => 
// createDivs(response)).then(response => 
// countDivs()).then(response =>
miscFunction()).then(response =>
droplets()).then(response=> 
hideInitializer());

async function getData(){
  
  let response = await fetch(api);
  const rawData = await response.json();
  return rawData;
};
function filterAndCollate(rawData){
  // create 4 variables which house the array of data for the 4 subdivisions
     let mtData = rawData.records.filter((record) => record.subdivision === "Matathwada");
     let vbData = rawData.records.filter((record) => record.subdivision === "Vidarbha");
     let kkData = rawData.records.filter((record) => record.subdivision === "Konkan & Goa");
     let mmData = rawData.records.filter((record) => record.subdivision === "Madhya Maharashtra");
  
     // Creating Object array with year, months*12;
  for(let i = 0; i < mtData.length; i++){
         let collJan = Number(mtData[i].jan) + Number(vbData[i].jan) + Number(kkData[i].jan) + Number(mmData[i].jan);
         let collFeb = Number(mtData[i].feb) + Number(vbData[i].feb) + Number(kkData[i].feb) + Number(mmData[i].feb);
         let collMar = Number(mtData[i].mar) + Number(vbData[i].mar) + Number(kkData[i].mar) + Number(mmData[i].mar);
         let collApr = Number(mtData[i].apr) + Number(vbData[i].apr) + Number(kkData[i].apr) + Number(mmData[i].apr);
         let collMay = Number(mtData[i].may) + Number(vbData[i].may) + Number(kkData[i].may) + Number(mmData[i].may);
         let collJun = Number(mtData[i].jun) + Number(vbData[i].jun) + Number(kkData[i].jun) + Number(mmData[i].jun);
         let collJul = Number(mtData[i].jul) + Number(vbData[i].jul) + Number(kkData[i].jul) + Number(mmData[i].jul);
         let collAug = Number(mtData[i].aug) + Number(vbData[i].aug) + Number(kkData[i].aug) + Number(mmData[i].aug);
         let collSep = Number(mtData[i].sep) + Number(vbData[i].sep) + Number(kkData[i].sep) + Number(mmData[i].sep);
         let collOct = Number(mtData[i].oct) + Number(vbData[i].oct) + Number(kkData[i].oct) + Number(mmData[i].oct);
         let collNov = Number(mtData[i].nov) + Number(vbData[i].nov) + Number(kkData[i].nov) + Number(mmData[i].nov);
         let collDec = Number(mtData[i].dec) + Number(vbData[i].dec) + Number(kkData[i].dec) + Number(mmData[i].dec);
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
         let dataObj = { year: mtData[i].year, jan: collJan, feb: collFeb, mar: collMar, apr: collApr, may: collMay, jun: collJun, jul: collJul, aug: collAug, sep: collSep, oct: collOct, nov: collNov, dec: collDec, total: collTotal};
         collData.push(dataObj);
         
    }
  return collData;  
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
// function createDivs(avg){
//     for (let i = 0; i < collData.length; i++) {
//       let newDiv = document.createElement("div");
//       let content = `
//                    <p><strong>${collData[i].year}</strong></p>
//                    <p>January Rainfall: ${collData[i].jan + " mm/m<sup>2</sup>"}</p>
//                    <p>February Rainfall: ${collData[i].feb + " mm/m<sup>2</sup>"}</p>
//                    <p>March Rainfall: ${collData[i].mar + " mm/m<sup>2</sup>"}</p>
//                    <p>April Rainfall: ${collData[i].apr + " mm/m<sup>2</sup>"}</p>
//                    <p>May Rainfall: ${collData[i].may + " mm/m<sup>2</sup>"}</p>
//                    <p>June Rainfall: ${collData[i].jun + " mm/m<sup>2</sup>"}</p>
//                    <p>July Rainfall: ${collData[i].jul + " mm/m<sup>2</sup>"}</p>
//                    <p>August Rainfall: ${collData[i].aug + " mm/m<sup>2</sup>"}</p>
//                    <p>September Rainfall: ${collData[i].sep + " mm/m<sup>2</sup>"}</p>
//                    <p>October Rainfall: ${collData[i].oct + " mm/m<sup>2</sup>"}</p>
//                    <p>November Rainfall: ${collData[i].nov + " mm/m<sup>2</sup>"}</p>
//                    <p>December Rainfall: ${collData[i].dec + " mm/m<sup>2</sup>"}</p>
//                    <p>Total Rainfall: ${collData[i].total + " mm/m<sup>2</sup>"}</p>
                   
//                    `;
//       let textCon = document.querySelector("#text");
//       newDiv.innerHTML = content;
//       newDiv.classList.add("data");
//       newDiv.classList.add("data-" + [i]);
//       textCon.appendChild(newDiv);
//       if (collData[i].total > avg){
//         newDiv.style.background = "green";
//         newDiv.classList.add("abvAvg");
//       }
      
//       else if (collData[i].total < avg){
//         newDiv.style.background = "red";
//         newDiv.classList.add("belAvg");
//       }
      
//        else newDiv.style.background = "blue";
//      }
//     return collData;}
// function countDivs(){
// let abvAvgDivs = document.querySelectorAll(".abvAvg");
// let belAvgDivs = document.querySelectorAll(".belAvg");
// let red = document.querySelector("#red");
// let green = document.getElementById("green");
// let greenButton = document.getElementById("greenbutton");
// let redButton = document.getElementById("redbutton");
// green.addEventListener("click", function(){
//   for(let i = 0; i < belAvgDivs.length; i++){
//   if (belAvgDivs[i].style.display == "block"){  
//   belAvgDivs[i].style.display = "none";
//   greenButton.style.display = "block";}
//   else belAvgDivs[i].style.display = "block";
//         greenButton.style.display = "none";
//   }  
// });
// red.addEventListener("click", function(){
//   for(let i = 0; i < abvAvgDivs.length; i++){
//   if (abvAvgDivs[i].style.display == "block"){  
//   abvAvgDivs[i].style.display = "none";
//   redButton.style.visibility = "visible";}
//   else abvAvgDivs[i].style.display = "block";
//     redButton.style.visibility = "hidden";
        
//   }  
// });
// }
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
let avgCon = document.querySelector("#month-avgs-grid");
for(let i = 0; i<avgArray.length; i++){

    let newDiv = document.createElement("div");
    newDiv.classList.add("month-avg-button");
    newDiv.classList.add(avgArray[i].month + "-avg");
    newDiv.innerHTML = `<h3>${avgArray[i].month}</h3>
                        <p>${avgArray[i].average}</p>`;
    avgCon.appendChild(newDiv);
}

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

  for(let i = 0;i< 1800;i++){
    particles.push(new Particle());
  }
}

function draw() {

  background('white');

  for(let i = 0;i< 1800;i++) {
    particles[i].createParticle();
    particles[i].moveParticle();

  }

}

  // PARTICLE GENERATION ENDS


