let labourSelector = document.querySelector("#labour");
let otherLabour = document.querySelector("#othlab");
let othlabLabel = document.querySelector(`label[for="othlab"]`);
let materialOneRateSelector = document.querySelector("#m1-rate");
let materialOneQtySelector = document.querySelector("#m1-qty");
let materialTwoRateSelector = document.querySelector("#m2-rate");
let materialTwoQtySelector = document.querySelector("#m2-qty");
let materialThreeRateSelector = document.querySelector("#m3-rate");
let materialThreeQtySelector = document.querySelector("#m3-qty");
let materialFourRateSelector = document.querySelector("#m4-rate");
let materialFourQtySelector = document.querySelector("#m4-qty");
let addCostSelector = document.querySelector("#addcost");
let gstSelector = document.querySelector("#gst");
let boxSelector = document.querySelector("#addbox");
let markupMultiplier = document.querySelector("#markupmultiplier");

let taggingSurcharge = 35;
let packagingSurcharge = 48;
// let boxSurcharge = 39;
let OAR = 0.875;

console.log(othlabLabel);
labourSelector.addEventListener("change", function(){
    if(labourSelector.value === "other"){
        otherLabour.style.display = "block";
        othlabLabel.style.display = "block";
     }
    
     else {otherLabour.style.display = "none";
     othlabLabel.style.display = "none";}

})









document.querySelector("#submit").addEventListener("click", function(){
calcPrice();
})
function calcPrice(){

if (markupMultiplier.value === "" && materialOneRateSelector.value !== ""){
    window.alert("Please Specify Markup Multiplier Value")
}   
else if (materialOneRateSelector.value === "" || materialOneQtySelector.value === "" && markupMultiplier.value !== ""){
         window.alert("Please add details for atleast one material");
        }
else if (materialOneRateSelector.value === "" || materialOneQtySelector.value === "" && markupMultiplier.value === ""){ window.alert("One or more required fields are missing")}
else { 
let materialOneCost = +materialOneRateSelector.value * +materialOneQtySelector.value;
let materialTwoCost = +materialTwoRateSelector.value * +materialTwoQtySelector.value;
let materialThreeCost = +materialThreeRateSelector.value * +materialThreeQtySelector.value;
let materialFourCost = +materialFourRateSelector.value * +materialFourQtySelector.value;
let labourCost;
let result = document.querySelector("#result");
if(labourSelector.value === "other"){
    labourCost = parseInt(otherLabour.value);
}
else labourCost = parseInt(labourSelector.value);
let addCost;
if(addCostSelector.value === ""){
    addCost = 0;}
else addCost = parseInt(addCostSelector.value);
let boxSurcharge
if(boxSelector.checked) {
    boxSurcharge = 39;
}
else boxSurcharge = 0;
let primeCost = materialOneCost + materialTwoCost + materialThreeCost + materialFourCost + labourCost;
let overheadAbsorbed = parseInt(primeCost * OAR);
let cost = primeCost + addCost + overheadAbsorbed;
let markup = (cost * (1 + markupMultiplier.value/100)) - cost;
let markedup = cost * (1 + markupMultiplier.value/100);
let pretaxprice = parseInt(markedup + taggingSurcharge + boxSurcharge + packagingSurcharge);
let gst = parseInt(pretaxprice * (gstSelector.value/100));
let gatewayCharges = parseInt((pretaxprice + gst) * 0.03);
let price = parseInt(pretaxprice + gst + gatewayCharges);



result.style.display = "block";
result.innerHTML = `<p>Prime Cost: ₹${primeCost}</p><p>Additional Costs: ₹${addCost}</p><p>Overhead: ₹${overheadAbsorbed}</p><hr class="total-line"><p><b>Total Cost: ₹${cost}</b></p><hr class="total-line"><p>Markup: ₹${parseInt(markup)}</p><p>Surcharges: Tagging- ₹${taggingSurcharge} | Packaging- ₹${packagingSurcharge + boxSurcharge}<hr class="total-line"> <p><b>Sub Price: ₹${pretaxprice}</b></p><hr class="total-line"></p><p>GST: ₹${gst}<p>Gateway Charges: ₹${gatewayCharges} </p></p><hr class="total-line"><p id="price">Price: ₹${price}</p>`;
document.querySelector("#submit").innerHTML = "Update Price";
}}
markupMultiplier.addEventListener("change", function(){
    if(markupMultiplier.value < 15){
        markupMultiplier.style.background = "red";
    }
    else if (markupMultiplier.value > 15){
        markupMultiplier.style.background = "green";
    }
    else markupMultiplier.style.background = "var(--body-light)";
})