let collData =[];
let avgRainfall;
let apiKey = `579b464db66ec23bdd0000015bf2471d25f64b645d6cbc127743dc4d`;
let api = `https://api.data.gov.in/resource/8e0bd482-4aba-4d99-9cb9-ff124f6f1c2f?api-key=${apiKey}&format=json&limit=6000`;



getData().then(response =>
filterAndCollate(response)).then(response => 
setupLanding(response)).then(response => 
setupSubdivVisualizer(response)).then(response =>
// createDivs(response)).then(response => 
// countDivs()).then(response =>

setupYearVisualizer(response)).then(response =>
setupParticleVisualizer(response)).then(response=>
setupComparer(response)).then(response=>
misc(response)).then(response=>
hideInitializer());

async function getData(){
  
  let response = await fetch(api);
  const rawData = await response.json();
  console.log(rawData);
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

function setupSubdivVisualizer(rawData){
  
  let MData = rawData.records.filter((record) => record.subdivision === "Matathwada");
  let VData = rawData.records.filter((record) => record.subdivision === "Vidarbha");
  let KGData = rawData.records.filter((record) => record.subdivision === "Konkan & Goa");
  let MMData = rawData.records.filter((record) => record.subdivision === "Madhya Maharashtra");
  let callout = document.querySelector("#sv-callout");

  let MTotal = [];
  let VTotal = [];
  let KGTotal = [];
  let MMTotal = [];

  for(let i = 0;i < MData.length; i++){
          
       MTotal.push(Number(MData[i].annual));
       VTotal.push(Number(VData[i].annual));
       KGTotal.push(Number(KGData[i].annual));
       MMTotal.push(Number(MMData[i].annual));

  }
  
  let MAvg = 0;
  let VAvg = 0;
  let MMAvg = 0;
  let KGAvg = 0;

  for(let i = 0; i < MTotal.length; i++){
    MAvg += MTotal[i];
    VAvg += VTotal[i];
    MMAvg += MMTotal[i];
    KGAvg += KGTotal[i];
  }

   MAvg = Math.round(((MAvg/MTotal.length) + Number.EPSILON) * 100) / 100;
   VAvg = Math.round(((VAvg/MTotal.length) + Number.EPSILON) * 100) / 100;
   MMAvg = Math.round(((MMAvg/MTotal.length) + Number.EPSILON) * 100) / 100;
   KGAvg = Math.round(((KGAvg/MTotal.length) + Number.EPSILON) * 100) / 100;

   let MMap = document.querySelector("#mt-map");
   let VMap = document.querySelector("#vd-map");
   let MMMap = document.querySelector("#mm-map");
   let KGMap = document.querySelector("#kk-map");
   
   let MPercent = MAvg/avgRainfall * 100;
   let VPercent = VAvg/avgRainfall * 100;
   let MMPercent = MMAvg/avgRainfall * 100;
   let KGPercent = KGAvg/avgRainfall * 100;


   MMap.style.fill = `rgba(75, 81, 94, ${MPercent}%)`;
   VMap.style.fill = `rgba(75, 81, 94, ${VPercent}%)`;
   MMMap.style.fill = `rgba(75, 81, 94, ${MMPercent}%)`;
   KGMap.style.fill = `rgba(75, 81, 94, ${KGPercent}%)`;
  

  

  KGMap.addEventListener("mousedown", function(){
      callout.innerHTML = `On Average, <span class="bolded">${Math.round(KGPercent)}%</span> of Annual MH Rainfall occurs in <span class="bolded">Konkan & Goa</span>: ${KGAvg}mm.`;
  })
  KGMap.addEventListener("mouseup", function(){
    callout.innerHTML = `Select a subdivision below <i class="fa-solid fa-arrow-down"></i>`;
})
MMMap.addEventListener("mousedown", function(){
  callout.innerHTML = `On Average, <span class="bolded">${Math.round(MMPercent)}%</span> of Annual MH Rainfall occurs in <span class="bolded">Madhya Maharashtra</span>: ${MMAvg}mm.`;
})
MMMap.addEventListener("mouseup", function(){
callout.innerHTML = `Select a subdivision below <i class="fa-solid fa-arrow-down"></i>`;
})
MMap.addEventListener("mousedown", function(){
  callout.innerHTML = `On Average, <span class="bolded">${Math.round(MPercent)}%</span> of Annual MH Rainfall occurs in <span class="bolded">Marathwada</span>: ${MAvg}mm.`;
})
MMap.addEventListener("mouseup", function(){
callout.innerHTML = `Select a subdivision below <i class="fa-solid fa-arrow-down"></i>`;
})
VMap.addEventListener("mousedown", function(){
  callout.innerHTML = `On Average, <span class="bolded">${Math.round(VPercent)}%</span> of Annual MH Rainfall occurs in <span class="bolded">Vidarbha</span>: ${VAvg}mm.`;
})
VMap.addEventListener("mouseup", function(){
callout.innerHTML = `Select a subdivision below <i class="fa-solid fa-arrow-down"></i>`;
})

KGMap.addEventListener("touchstart", function(){
  callout.innerHTML = `On Average, <span class="bolded">${Math.round(KGPercent)}%</span> of Annual MH Rainfall occurs in <span class="bolded">Konkan & Goa</span>: ${KGAvg}mm.`;
})
KGMap.addEventListener("touchend", function(){
callout.innerHTML = `Select a subdivision below <i class="fa-solid fa-arrow-down"></i>`;
})
MMMap.addEventListener("touchstart", function(){
callout.innerHTML = `On Average, <span class="bolded">${Math.round(MMPercent)}%</span> of Annual MH Rainfall occurs in <span class="bolded">Madhya Maharashtra</span>: ${MMAvg}mm.`;
})
MMMap.addEventListener("touchend", function(){
callout.innerHTML = `Select a subdivision below <i class="fa-solid fa-arrow-down"></i>`;
})
MMap.addEventListener("touchstart", function(){
callout.innerHTML = `On Average, <span class="bolded">${Math.round(MPercent)}%</span> of Annual MH Rainfall occurs in <span class="bolded">Marathwada</span>: ${MAvg}mm.`;
})
MMap.addEventListener("touchend", function(){
callout.innerHTML = `Select a subdivision below <i class="fa-solid fa-arrow-down"></i>`;
})
VMap.addEventListener("touchstart", function(){
callout.innerHTML = `On Average, <span class="bolded">${Math.round(VPercent)}%</span> of Annual MH Rainfall occurs in <span class="bolded">Vidarbha</span>: ${VAvg}mm.`;
})
VMap.addEventListener("touchend", function(){
callout.innerHTML = `Select a subdivision below <i class="fa-solid fa-arrow-down"></i>`;
})


  console.log("Sub-Division Visualizer Setup");
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
  newBar.style.background = `rgba(75, 81, 94, ${percent8k})`;
  
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
  // newBar.innerHTML = barContent;
  let yvCallout = document.querySelector("#yv-callout");
  let avgButton = document.querySelector("#view-by-avg-button");
  let scaleButton = document.querySelector("#view-by-scale-button");
  let avgKey = document.querySelector("#avg-key");
  let scaleKey = document.querySelector("#scale-key");

  avgKey.style.display = "none";
  newBar.classList.add("bar");
  newBar.style.animationDelay = (i * 0.02) + "s";
  barsCon.appendChild(newBar);
  
  newBar.addEventListener("mousedown", function(){
    yvCallout.innerHTML = "In " + collData[i].year + " it rained " + collData[i].total + " mm in MH.";
    newBar.style.flexGrow = 5;
    newBar.style.borderLeft = " dotted white 2px";
    newBar.style.borderRight = " dotted white 2px";
   
  })

  newBar.addEventListener("mouseup", function(){
    yvCallout.innerHTML = `Click+Hold one of the year bars below <i class="fa-solid fa-arrow-down"></i>`;
    newBar.style.flexGrow = 1;
    newBar.style.border = "none";
    
  })

  newBar.addEventListener("touchstart", function(){
    yvCallout.innerHTML = "In " + collData[i].year + " it rained " + collData[i].total + " mm in MH.";
    newBar.style.flexGrow = 5;
    newBar.style.borderLeft = " dotted white 2px";
    newBar.style.borderRight = " dotted white 2px";
   
  })

  newBar.addEventListener("touchend", function(){
    yvCallout.innerHTML = `Click+Hold one of the year bars below <i class="fa-solid fa-arrow-down"></i>`;
    newBar.style.flexGrow = 1;
    newBar.style.border = "none";
    
  })

  scaleButton.classList.add("btnclicked");
  colorBars(i, newBar);

  avgButton.addEventListener("click", function(){
    
    avgButton.classList.toggle("btnclicked");
    scaleButton.classList.toggle("btnclicked");
    scaleKey.style.display = "none";
    avgKey.style.display = "flex";
    if (collData[i].total >= avgRainfall){
      newBar.style.background = "var(--primary-color)";
      newBar.style.opacity = "1";
      
    }
    else{ newBar.style.background = "var(--primary-color)";
         newBar.style.opacity = "0.5";}
    
    
    console.log("Years colored by +/- Average");

  })
  
  scaleButton.addEventListener("click", function(){
    scaleKey.style.display = "flex";
    avgKey.style.display = "none";
    scaleButton.classList.toggle("btnclicked");
    avgButton.classList.toggle("btnclicked");
    colorBars(i, newBar);
    console.log("Years colored by data");

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
updateCallout();

dropDownA.addEventListener("change", function(){
    let oldDOM = document.querySelector(".result-A");
      let currentAValue = dropDownA.value;
      let currentBValue = dropDownB.value;
      let resultA;
      let resultB;
      let percent6k;
      let yearCall = document.querySelector("#cp-dd-A-cpt");
      let mainCall = document.querySelector("#comparer-callout");
      let comparison;
  
      if (currentAValue == "Maharashtra & Goa"){
         resultA = avgRainfall;

      }
      else {resultA = calcComparison(currentAValue);}
      
      
       
      if (currentBValue == "Maharashtra & Goa"){
        resultB = avgRainfall;
      }
      else {resultB = calcComparison(currentBValue);}

      if (resultA >= resultB){
        comparison = Math.round((resultA - resultB)/resultB * 100);
        mainCall.innerHTML = `It rains ${comparison}% more in ${currentAValue} than in ${currentBValue}.<br><span class="caption">It rains an avg ${resultA}mm every year in ${currentAValue}. It rains an avg ${resultB}mm every year in ${currentBValue}.</span>`;
      }

      else if (resultB >= resultA){
        comparison = Math.round((resultB - resultA)/resultA * 100);
        mainCall.innerHTML = `It rains ${comparison}% more in ${currentBValue} than in ${currentAValue}.<br><span class="caption">It rains an avg ${resultA}mm every year in ${currentAValue}. It rains an avg ${resultB}mm every year in ${currentBValue}.</span>`;
      }
    
      
      percent6k = (resultA/6000);
      oldDOM.style.height = (percent6k * 100) + "%";
      oldDOM.style.background = `rgba(75, 81, 94, ${percent6k})`;
      yearCall.innerHTML = getYearCount(currentAValue);
      console.log("Now Comparing: " + currentAValue + " with " + currentBValue);

  })

dropDownB.addEventListener("change", function(){
    let oldDOM = document.querySelector(".result-B");
      let currentAValue = dropDownA.value;
      let currentBValue = dropDownB.value;
      let resultB;
      let percent6k;
      let yearCall = document.querySelector("#cp-dd-B-cpt");
      let mainCall = document.querySelector("#comparer-callout");
      let comparison;
  
      if (currentAValue == "Maharashtra & Goa"){
         resultA = avgRainfall;
         
      }
      else resultA = calcComparison(currentAValue);
           
      
       
      if (currentBValue == "Maharashtra & Goa"){
        resultB = avgRainfall;
        

      }
      else resultB = calcComparison(currentBValue);
      
      if (resultA >= resultB){
        comparison = Math.round((resultA - resultB)/resultB * 100);
        mainCall.innerHTML = `It rains ${comparison}% more in ${currentAValue} than in ${currentBValue}.<br><span class="caption">It rains an avg ${resultA}mm every year in ${currentAValue}. It rains an avg ${resultB}mm every year in ${currentBValue}.</span>`;
      }

      else if (resultB >= resultA){
        comparison = Math.round((resultB - resultA)/resultA * 100);
        mainCall.innerHTML = `It rains ${comparison}% more in ${currentBValue} than in ${currentAValue}.<br><span class="caption">It rains an avg ${resultA}mm every year in ${currentAValue}. It rains an avg ${resultB}mm every year in ${currentBValue}.</span>`;
      }
     
      percent6k = (resultB/6000);
      oldDOM.style.height = (percent6k * 100) + "%";
      oldDOM.style.background = `rgba(75, 81, 94, ${percent6k})`;
      yearCall.innerHTML = getYearCount(currentBValue);
      console.log("Now Comparing: " + currentAValue + " with " + currentBValue);
  })

function createA(){
    let currentAValue = dropDownA.value;
    let resultA;
    let percent6k;
    let resultCon = document.querySelector("#comparison-result-A");
    let resultDOM = document.createElement("div");

    if (currentAValue == "Maharashtra & Goa"){
       resultA = avgRainfall;}
    else resultA = calcComparison(currentAValue);

    percent6k = (resultA/6000);
    resultDOM.classList.add("result");
    resultDOM.classList.add("result-A");
    resultDOM.style.height = (percent6k * 100) + "%";
    resultDOM.style.background = `rgba(75, 81, 94, ${percent6k})`;
    resultCon.appendChild(resultDOM);
    }
function createB(){

      let currentBValue = dropDownB.value;
      let resultB;
      let percent6k;
      let resultCon = document.querySelector("#comparison-result-B");
      let resultDOM = document.createElement("div");
       
      if (currentBValue == "Maharashtra & Goa"){
        resultB = avgRainfall;}
      else resultB = calcComparison(currentBValue);
  
      percent6k = (resultB/6000);
      resultDOM.classList.add("result");
      resultDOM.classList.add("result-B");
      resultDOM.style.height = (percent6k * 100) + "%";
      resultDOM.style.background = `rgba(75, 81, 94, ${percent6k})`;
      resultCon.appendChild(resultDOM);
      }
      
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


return thisAvg;

}
function getYearCount(subdiv){
  let thisYearCount 
  if (subdiv == "Maharashtra & Goa"){
    thisYearCount = collData.length;
  }
  else{
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
  thisYearCount = thisArray.length;}
  

  return thisYearCount;
}
function updateCallout(){
  let currentAValue = dropDownA.value;
  let currentBValue = dropDownB.value;
  let resultA;
  let resultB;
  let comparison;
  let mainCall = document.querySelector("#comparer-callout");

  if (currentAValue == "Maharashtra & Goa"){
    resultA = avgRainfall;
    
 }
 else resultA = calcComparison(currentAValue);
      
 
  
 if (currentBValue == "Maharashtra & Goa"){
   resultB = avgRainfall;
   

 }
 else resultB = calcComparison(currentBValue);

  if (resultA >= resultB){
    comparison = Math.round((resultA - resultB)/resultB * 100);
    mainCall.innerHTML = `It rains ${comparison}% more in ${currentAValue} than in ${currentBValue}.<br><span class="caption">It rains an avg ${resultA}mm every year in ${currentAValue}. It rains an avg ${resultB}mm every year in ${currentBValue}.</span>`;
  }

  else if (resultB >= resultA){
    comparison = Math.round((resultB - resultA)/resultA * 100);
    mainCall.innerHTML = `It rains ${comparison}% more in ${currentBValue} than in ${currentAValue}.<br><span class="caption">It rains an avg ${resultA}mm every year in ${currentAValue}. It rains an avg ${resultB}mm every year in ${currentBValue}.</span>`;
}}

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
  let percentCallout = document.querySelector("#pv-percent-callout");
  let asPercent = Math.round(avgArray[0].average/avgRainfall * 100);
  percentCallout.innerHTML = asPercent;
  monthCallout.innerHTML = "January";
  averageCallout.innerHTML = avgArray[0].average + "mm";
  createParticles(Math.round(avgArray[0].average/2));

  monthDD.addEventListener("change", function(){
    let cycleCount;
    for(let i = 0; i < avgArray.length; i++){
      if (monthDD.value == avgArray[i].month){
        asPercent = Math.round(avgArray[i].average/avgRainfall * 100);
        monthCallout.innerHTML = avgArray[i].month;
        averageCallout.innerHTML = avgArray[i].average + "mm";
        percentCallout.innerHTML = asPercent;
        cycleCount = Math.round(avgArray[i].average/2);
      }
    }
    
    updateParticles(cycleCount);
    console.log("Now Visualizing " + monthDD.value);
})

function createParticles(cycleCount){
  let particleCon = document.querySelector("#particle-visualizer-bckg");

  for(let i = 0; i < cycleCount; i++){
    let leftOffset = Math.round((Math.random() * 100)) + "%";
    let topOffset = Math.round((Math.random() * 100)) + "%";
    let timeFunction = (3 + (Math.random() * 8)) + "s";
    let size = 10 + (Math.round((Math.random() * 50))) + "px";
    let opacity = Math.round(10 + (Math.random() * 100)) + "%";
    
    let particle = document.createElement("div");
    particle.classList.add("particle");
    //particle.style.width = "4px";
    particle.style.height = size;
    particle.style.left = leftOffset;
    particle.style.top = topOffset;
    particle.style.opacity = opacity;
    particle.style.animationDuration = timeFunction;
    
    particleCon.appendChild(particle);
      
      
      
    }
}
function updateParticles(cycleCount){
  let particleCon = document.querySelector("#particle-visualizer-bckg");
  let allParticles = document.querySelectorAll(".particle");
 allParticles.forEach((particle) => {
  particle.remove();
 })
createParticles(cycleCount);
}





console.log("particle visualizer setup");
return rawData;
}

function hideInitializer(){
  let initializer = document.querySelector("#initializer");
  initializer.style.opacity = "0";
  initializer.style.visibility = "hidden";
  console.log("initializer hidden and site loaded succesfully");
}

function misc(){


  
  let scrollCon = document.querySelector("#main");
  let logoBckg = document.querySelector("#logomark");
  let header = document.querySelector("header");
  
  
  scrollCon.addEventListener("scroll", function() {
    
    // We add pageYOffset for compatibility with IE.
    logoBckg.style.background = "var(--primary-color)";
    logoBckg.style.right = "5vw";
    logoBckg.style.border = "solid var(--primary-color) 1px";
    header.classList.add("color-header");
   


   
  })

}