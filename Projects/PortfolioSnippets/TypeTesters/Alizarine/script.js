const testerDefaults = [
    {
        name: "tester1",
        wght: 400,
        size: 200,
        placeholder: `MASTANI`
    },
    {
        name: "tester2",
        wght: 500,
        size: 200,
        placeholder: `Safarnama`
    },
    {
        name: "tester3",
        wght: 600,
        size: 10,
        placeholder: `Nastaliq`
    },
    {
        name: "tester4",
        wght: 700,
        size: 200,
        placeholder: `Tiffinbox`
    },
    {
        name: "tester5",
        wght: 800,
        size: 100,
        placeholder: `GHARANA`
    },
    {
        name: "tester6",
        wght: 900,
        size: 200,
        placeholder: `SOOFIISM`
    }
];
const mediaQuery = window.matchMedia('(max-width: 600px)');
const parentGrid = document.getElementById('AZ-testersGrid');

for (let i = 0; i < testerDefaults.length; i++) {

    //#region Create and Append Tester

    const testerHTML = `    <div id="tester${i}" class="tester" tabindex="${i}">
        <div class="output"></div>
        <textarea class="type-out" type="text">${testerDefaults[i].placeholder} </textarea>
        <div class="controls-wrapper invisible">
            <div class="dropdown-wrapper controls">
                <select class="preWeighter dropdown" name="Weight">
                    <option value="400">Regular</option>
                    <option value="500">Medium</option>
                    <option value="600">SemiBold</option>
                    <option value="700">Bold</option>
                    <option value="800">ExtraBold</option>
                    <option value="900">UltraBold</option>
                </select>
            </div>
            <div class="animator">
                <span class="animatorIcon">⏵︎</span>

            </div>
            <div class="weight-div controls">
                <input type="range" min="400" max="900" value=${testerDefaults[i].wght} class="weighter slider" />
                <label class="weightlabel">WGHT</label>
            </div>
            <div class="sizer-div controls">
                <input type="range" min="30" max="300" value="90" class="sizer slider" step="0.1" />
                <label class="sizelabel">SIZE</label>
            </div>
            <div class="opentype-featurer">
                <div class="opentype-toggle controls">OpenType</div>
                <div class="opentype-menu">
                    <label>
                        <input  class="liga cb" type="checkbox" checked> Common Ligatures
                    </label>
                    <label>
                        <input class="dlig cb" type="checkbox" checked/> Discretionary Ligatures
                    </label>
                    <label>
                        <input  class="ss01 cb" type="checkbox" /> SS01 singlestory a/g
                    </label><label>
                        <input  class="ss02 cb" type="checkbox" /> SS02 Add Dots
                    </label><label>
                        <input class="case cb" type="checkbox" /> Case Sensitive Forms
                    </label>
                    </label><label>
                        <input  class="osFig cb" type="checkbox" checked /> Old-Style Figures
                    </label>
                    </label><label>
                        <input  class="liFig cb" type="checkbox" /> Lining Figures
                    </label>
                    </label><label>
                        <input class="propFig cb" type="checkbox" checked /> Proportional Figures
                    </label>
                    </label><label>
                        <input  class="tabFig cb" type="checkbox" /> Tabular Figures
                    </label>
                    </label><label>
                        <input  class="fractions cb" type="checkbox" /> Fractions
                    </label>
                    </label><label>
                        <input  class="superiors cb" type="checkbox" /> Superiors
                    </label>
                    </label><label>
                        <input  class="inferiors cb" type="checkbox" /> Inferiors
                    </label>
            </div>
            </div>
            <div class="text-optioner">
                <div class="textOption-toggle controls"><i class="fa-solid fa-sliders"></i></div>
                <div class="textOption-menu">
                    <label>
                        <i class="fa-solid fa-arrows-up-down"></i>
                        <input  type="range" step="0.1" value="1" min="0.5" max="2" class="slider leader"> 
                    </label>
                     <label>
                        <i class="fa-solid fa-arrows-left-right"></i>
                        <input type="range" step="0.1" value="0" min="-1" max="1" class="slider tracker"> 
                    </label>
                    <label class="colorLabel">
                        <i class="fa-solid fa-palette"></i>
                        <input  class="colorer" type="color" value="#ade08c" /> 
                    </label>
                    <div class="text-align">
                        <div class="left-align "><i class="fa-solid fa-align-left"></i></div><div class="center-align textalign-selected"><i class="fa-solid fa-align-center"></i></div>
                    </div>
                </div>
            </div>

        </div>
    </div>`;
    let testerWrapper = document.createElement("div");
    testerWrapper.classList.add("tester-wrapper");
    testerWrapper.innerHTML = testerHTML;
    parentGrid.appendChild(testerWrapper);

     //#endregion
    //#region HTML Variable Nodelists
     const controls = parentGrid.querySelectorAll(".controls-wrapper"),
        ligaCB = parentGrid.querySelectorAll(".liga"),
        dligCB = parentGrid.querySelectorAll(".dlig"),
        ss01CB = parentGrid.querySelectorAll(".ss01"),
        ss02CB = parentGrid.querySelectorAll(".ss02"),
        caseCB = parentGrid.querySelectorAll(".case"),
        osFigCB = parentGrid.querySelectorAll(".osFig"),
        liFigCB = parentGrid.querySelectorAll(".liFig"),
        propFigCB = parentGrid.querySelectorAll(".propFig"),
        tabFigCB = parentGrid.querySelectorAll(".tabFig"),
        fractionsCB = parentGrid.querySelectorAll(".fractions"),
        superiorCB = parentGrid.querySelectorAll(".superiors"),
        inferiorCB = parentGrid.querySelectorAll(".inferiors"),
        sizers = parentGrid.querySelectorAll(".sizer"),
        sizeLabels = parentGrid.querySelectorAll(".sizelabel"),
        colorers = parentGrid.querySelectorAll(".colorer"),
        colorLabels = parentGrid.querySelectorAll(".colorlabel"),
        typeOuts = parentGrid.querySelectorAll(".type-out"),
        preWeighters = parentGrid.querySelectorAll(".preWeighter"),
        weighters = parentGrid.querySelectorAll(".weighter"),
        weightLabels = parentGrid.querySelectorAll(".weightlabel"),
        testers = parentGrid.querySelectorAll(".tester"),
        animators = parentGrid.querySelectorAll(".animator"),
        animateIcons = parentGrid.querySelectorAll(".animatorIcon"),
        opentypeToggles = parentGrid.querySelectorAll('.opentype-toggle'),
        openTypeMenus = parentGrid.querySelectorAll('.opentype-menu'),
        textOptionToggles = parentGrid.querySelectorAll('.textOption-toggle'),
        textOptionMenus = parentGrid.querySelectorAll('.textOption-menu'),
        leaders = parentGrid.querySelectorAll('.leader'),
        trackers = parentGrid.querySelectorAll('.tracker'),
        centerAligns = parentGrid.querySelectorAll('.center-align'),
        leftAligns = parentGrid.querySelectorAll('.left-align'),
        outputs = parentGrid.querySelectorAll('.output');
        //#endregion
    //#region HTML Variables
    let thisTester = testers[i],
        thisControl = controls[i],
        thisLiga = ligaCB[i],
        thisDlig = dligCB[i],
        thisOutput = outputs[i],
        thisSs01 = ss01CB[i],
        thisSs02 = ss02CB[i],
        thisCase = caseCB[i],
        thisOsFig = osFigCB[i],
        thisLiFig = liFigCB[i],
        thisPropFig = propFigCB[i],
        thisTabFig = tabFigCB[i],
        thisFractions = fractionsCB[i],
        thisSuperior = superiorCB[i],
        thisInferior = inferiorCB[i],
        thisSizer = sizers[i],
        thisSizeLabel = sizeLabels[i],
        thisColorer = colorers[i],
        thisColorLabel = colorLabels[i],
        thisPreWeighter = preWeighters[i],
        thisAnimator = animators[i],
        thisAI = animateIcons[i],
        thisWeighter = weighters[i],
        thisWeightLabel = weightLabels[i],
        thisTypeOut = typeOuts[i],
        thisOpentypeToggle = opentypeToggles[i],
        thisOpentypeMenu = openTypeMenus[i],
        thisTextOptionToggle = textOptionToggles[i],
        thisTextOptionMenu = textOptionMenus[i],
        thisLeader = leaders[i],
        thisTracker = trackers[i],
        thisCenterAlign = centerAligns[i],
        thisLeftAlign = leftAligns[i];
    //#endregion
    //#region Set Defaults
        thisTypeOut.style.fontVariationSettings = `"wght" ${testerDefaults[i].wght}`;
        thisPreWeighter.selectedIndex = i;
    //#endregion
    //#region Display and Hide Controls

    thisTester.addEventListener("focusin", (event) => {

        thisControl.style.visibility = "visible";
        thisControl.style.opacity = 1;
        thisOutput.style.visibility = "hidden";
        thisOutput.style.opacity = 0;

        if (window.innerWidth < 600) {
        thisTester.style.height = (thisTester.offsetHeight + 81) + "px";
     
} else {
return
}

    });
    thisTester.addEventListener("focusout", (event) => {

        thisControl.style.visibility = "hidden";
        thisControl.style.opacity = 0;
        thisOutput.style.visibility = "visible";
        thisOutput.style.opacity = 1;
                if (window.innerWidth < 600) {
       thisTester.style.height = (thisTester.offsetHeight - 81) +"px";

} else {
return
}
    });

    

    //#endregion



    //#region Colorer Module
    thisColorer.addEventListener("input", (event) => {
        thisTypeOut.style.color = thisColorer.value;
        thisColorLabel.innerHTML = thisColorer.value.toUpperCase();

    });
    //#endregion
    //#region Sizer Module
    thisSizer.addEventListener("input", (event) => {

        thisTypeOut.style.fontSize = thisSizer.value + "px";
        thisSizeLabel.innerHTML = thisSizer.value + "px";
        thisTester.style.height = (thisSizer.value * 2) + "px";

    });
    //#endregion
    //#region Weighter Module
    thisWeighter.addEventListener("input", (event) => {
        thisTypeOut.style.fontVariationSettings = `"wght" ${thisWeighter.value}`;
        thisWeightLabel.innerHTML = thisWeighter.value;
        if (thisWeighter.value >= 400 && thisWeighter.value < 500) {
            thisPreWeighter.selectedIndex = 0;
        } else if (thisWeighter.value >= 500 && thisWeighter.value < 600) {
            thisPreWeighter.selectedIndex = 1;
        } else if (thisWeighter.value >= 600 && thisWeighter.value < 700) {
            thisPreWeighter.selectedIndex = 2;
        } else if (thisWeighter.value >= 700 && thisWeighter.value < 800) {
            thisPreWeighter.selectedIndex = 3;
        } else if (thisWeighter.value >= 800 && thisWeighter.value < 900) {
            thisPreWeighter.selectedIndex = 4;
        } else if (thisWeighter.value >= 900) {
            thisPreWeighter.selectedIndex = 5;
        };


    });
    //#endregion
    //#region Animator
    let min = parseInt(thisWeighter.min);
    let max = parseInt(thisWeighter.max);
    let value = min;
    let direction = 1;
    let isPaused = true;

    thisWeighter.addEventListener("pointerdown", () => {
        isPaused = true;
        thisAI.innerHTML = "⏵︎";
    });
    thisPreWeighter.addEventListener("pointerdown", () => {
        isPaused = true;
        thisAI.innerHTML = "⏵︎";
    });
    thisAnimator.addEventListener("pointerdown", () => {
        if (isPaused === true) {
            isPaused = false;
            thisAI.innerHTML = "⏸︎";
        } else if (isPaused === false) {
            isPaused = true;
            thisAI.innerHTML = "⏵︎";
        }
    })

    function animateSlider() {
        if (!isPaused) {
            value += direction;

            if (value >= max || value <= min) {
                direction *= -1;
            }

            thisWeighter.value = value;
            thisWeighter.dispatchEvent(new Event("input"));
        }

        requestAnimationFrame(animateSlider);
    }
    animateSlider();
    //#endregion
    //#region Preweighter Module

    thisPreWeighter.addEventListener("change", (event) => {
        thisTypeOut.style.fontVariationSettings = `"wght" ${thisPreWeighter.value}`;
        thisWeighter.value = thisPreWeighter.value;
        thisWeightLabel.innerText = thisPreWeighter.value;
    });
    //#endregion
    //#region Opentype Menu
    //#region Open and Close Menu


    thisOpentypeToggle.addEventListener('click', () => {
        thisOpentypeMenu.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.opentype-featurer')) {
            thisOpentypeMenu.classList.remove('open');
        }
    });
    //#endregion
    //#region Ligatures
    //Common Ligatures
    thisLiga.addEventListener("change", (event) => {

        if (thisLiga.checked === true) {
            thisTypeOut.style.fontVariantLigatures = "common-ligatures";
        }

        else if (thisDlig.checked === true && thisLiga.checked === false) {
            thisTypeOut.style.fontVariantLigatures = "none";
            thisDlig.checked = false;
        }


        else thisTypeOut.style.fontVariantLigatures = "none";


    });
    //Discretionary Ligatures
    thisDlig.addEventListener("change", (event) => {

        if (thisDlig.checked === true) {
            thisTypeOut.style.fontVariantLigatures = "discretionary-ligatures";
        }

        else if (thisDlig.checked === false && thisLiga.checked === true) {
            thisTypeOut.style.fontVariantLigatures = "common-ligatures";
        }

        else thisTypeOut.style.fontVariantLigatures = "none";
    });
    //#endregion
    //#region Stylesets and Case
    let selectedFontFeatures = [];
    let selectedFontFeaturesString = "";

    UpdateFontFeatures(thisSs01, ' "ss01"');
    UpdateFontFeatures(thisSs02, ' "ss02"');
    UpdateFontFeatures(thisCase, ' "case"');

    function UpdateFontFeatures(checkbox, tag) {
        checkbox.addEventListener("change", () => {

            checkFontFeatures(checkbox, tag);

            selectedFontFeaturesString = selectedFontFeatures.length ? selectedFontFeatures.join('') : '';

            console.log(selectedFontFeaturesString);
            thisTypeOut.style.fontFeatureSettings = selectedFontFeaturesString;
            return selectedFontFeatures;
        });
    }

    function checkFontFeatures(checkbox, tag) {
        if (checkbox.checked === false) {
            selectedFontFeatures = selectedFontFeatures.filter(item => item !== `${tag}`);

        }
        else if (checkbox.checked === true) {
            selectedFontFeatures.push(`${tag}`);
        }
        console.log(selectedFontFeatures);


        return selectedFontFeatures;
    }
    //#endregion
    //#region Figures
    //#region Oldstyle Checkbox
    thisOsFig.addEventListener("change", () => {
        thisTypeOut.style.fontVariantPosition = "unset";
        if (thisFractions.checked || thisSuperior.checked || thisInferior.checked) {
            thisFractions.checked = false;
            thisInferior.checked = false;
            thisSuperior.checked = false;
        };

        if (thisOsFig.checked === true && thisTabFig.checked === false && thisPropFig.checked === false) {
            thisTypeOut.style.fontVariantNumeric = "oldstyle-nums proportional-nums";
            thisPropFig.checked = true;
        }

        if (thisOsFig.checked === true && thisTabFig.checked === true) {
            thisTypeOut.style.fontVariantNumeric = "oldstyle-nums tabular-nums";
            thisLiFig.checked = false;

        }

        else if (thisOsFig.checked === true && thisPropFig.checked === true) {
            thisTypeOut.style.fontVariantNumeric = "oldstyle-nums proportional-nums";
            thisLiFig.checked = false;
        }

        else if (thisOsFig.checked === false && thisTabFig.checked === true) {
            thisTypeOut.style.fontVariantNumeric = " tabular-nums lining-nums";
            thisLiFig.checked = true;
        }

        else if (thisOsFig.checked === false && thisPropFig.checked === true) {
            thisTypeOut.style.fontVariantNumeric = " proportional-nums lining-nums";
            thisLiFig.checked = true;
        };


    });
//#endregion
    //#region Lining Checkbox
thisLiFig.addEventListener("change", () => {
        thisTypeOut.style.fontVariantPosition = "unset";
        if (thisFractions.checked || thisSuperior.checked || thisInferior.checked) {
            thisFractions.checked = false;
            thisInferior.checked = false;
            thisSuperior.checked = false;
        };

        if (thisLiFig.checked === true && thisTabFig.checked === false && thisPropFig.checked === false) {
            thisTypeOut.style.fontVariantNumeric = "lining-nums proportional-nums";
            thisPropFig.checked = true;
        }

        if (thisLiFig.checked === true && thisTabFig.checked === true) {
            thisTypeOut.style.fontVariantNumeric = "lining-nums tabular-nums";
            thisOsFig.checked = false;

        }

        else if (thisLiFig.checked === true && thisPropFig.checked === true) {
            thisTypeOut.style.fontVariantNumeric = "lining-nums proportional-nums";
            thisOsFig.checked = false;
        }

        else if (thisLiFig.checked === false && thisTabFig.checked === true) {
            thisTypeOut.style.fontVariantNumeric = " tabular-nums oldstyle-nums";
            thisOsFig.checked === true;
        }

        else if (thisLiFig.checked === false && thisPropFig.checked === true) {
            thisTypeOut.style.fontVariantNumeric = " proportional-nums oldstyle-nums";
            thisOsFig.checked === true;
        }


    });
//#endregion
    //#region Tabular checkbox    
thisTabFig.addEventListener("change", () => {
        thisTypeOut.style.fontVariantPosition = "unset";
        if (thisFractions.checked || thisSuperior.checked || thisInferior.checked) {
            thisFractions.checked = false;
            thisInferior.checked = false;
            thisSuperior.checked = false;
        };

        if (thisTabFig.checked === true && thisLiFig.checked === false && thisOsFig.checked === false) {
            thisTypeOut.style.fontVariantNumeric = "oldstyle-nums tabular-nums";
            thisOsFig.checked = true;
        }

        if (thisTabFig.checked === true && thisLiFig.checked === true) {
            thisTypeOut.style.fontVariantNumeric = "lining-nums tabular-nums";
            thisOsFig.checked = false;
            thisPropFig.checked = false;

        }

        else if (thisTabFig.checked === true && thisOsFig.checked === true) {
            thisTypeOut.style.fontVariantNumeric = "oldstyle-nums tabular-nums";
            thisLiFig.checked = false;
            thisPropFig.checked = false;
        }

        else if (thisTabFig.checked === false && thisOsFig.checked === true) {
            thisTypeOut.style.fontVariantNumeric = "oldstyle-nums proportional-nums";
            thisPropFig.checked = true;
        }

        else if (thisTabFig.checked === false && thisLiFig.checked === true) {
            thisTypeOut.style.fontVariantNumeric = "lining-nums proportional-nums";
            thisPropFig.checked = true;
        }


    });
    //#endregion
    //#region Proportional checkbox
    thisPropFig.addEventListener("change", () => {
        thisTypeOut.style.fontVariantPosition = "unset";
        if (thisFractions.checked || thisSuperior.checked || thisInferior.checked) {
            thisFractions.checked = false;
            thisInferior.checked = false;
            thisSuperior.checked = false;
        };


        if (thisPropFig.checked === true && thisLiFig.checked === false && thisOsFig.checked === false) {
            thisTypeOut.style.fontVariantNumeric = "oldstyle-nums proportional-nums";
            thisOsFig.checked = true;
        }


        if (thisPropFig.checked === true && thisLiFig.checked === true) {
            thisTypeOut.style.fontVariantNumeric = "lining-nums proportional-nums";
            thisOsFig.checked = false;
            thisTabFig.checked = false;

        }

        else if (thisPropFig.checked === true && thisOsFig.checked === true) {
            thisTypeOut.style.fontVariantNumeric = "oldstyle-nums proportional-nums";
            thisLiFig.checked = false;
            thisTabFig.checked = false;
        }

        else if (thisPropFig.checked === false && thisOsFig.checked === true) {
            thisTypeOut.style.fontVariantNumeric = "oldstyle-nums";
            thisTabFig.checked = true;
        }

        else if (thisPropFig.checked === false && thisLiFig.checked === true) {
            thisTypeOut.style.fontVariantNumeric = "lining-nums";
            thisTabFig.checked = true;
        }


    });
//#endregion
    //#region Fractions
thisFractions.addEventListener("change", () => {
        thisTypeOut.style.fontVariantPosition = "unset";


        if (thisFractions.checked === false) {
            thisTypeOut.style.fontVariantNumeric = "oldstyle-nums proportional-nums";
            thisOsFig.checked = true;
            thisPropFig.checked = true;
        }

        else if (thisFractions.checked === true) {
            if (thisOsFig.checked || thisLiFig.checked || thisTabFig.checked || thisPropFig.checked || thisSuperior.checked || thisInferior.checked) {
                thisPropFig.checked = false;
                thisLiFig.checked = false;
                thisOsFig.checked = false;
                thisTabFig.checked = false;
                thisSuperior.checked = false;
                thisInferior.checked = false;
            };
            thisTypeOut.style.fontVariantNumeric = "diagonal-fractions";
        }

    });
//#endregion
    //#region Superiors
thisSuperior.addEventListener("change", () => {



        if (thisSuperior.checked === false) {
            thisTypeOut.style.fontVariantNumeric = "oldstyle-nums proportional-nums";
            thisTypeOut.style.fontVariantPosition = "unset";
            thisOsFig.checked = true;
            thisPropFig.checked = true;
        }

        else if (thisSuperior.checked === true) {
            if (thisOsFig.checked || thisLiFig.checked || thisTabFig.checked || thisPropFig.checked || thisFractions.checked || thisInferior.checked) {
                thisPropFig.checked = false;
                thisLiFig.checked = false;
                thisOsFig.checked = false;
                thisTabFig.checked = false;
                thisFractions.checked = false;
                thisInferior.checked = false;
                thisTypeOut.style.fontVariantNumeric = "oldstyle-nums proportional-nums";
            };
            thisTypeOut.style.fontVariantPosition = "super";
        }

    });
//#endregion
    //#region Inferiors
    thisInferior.addEventListener("change", () => {

        if (thisInferior.checked === false) {
            thisTypeOut.style.fontVariantNumeric = "oldstyle-nums proportional-nums";
            thisTypeOut.style.fontVariantPosition = "unset";
            thisOsFig.checked = true;
            thisPropFig.checked = true;
        }

        else if (thisInferior.checked === true) {
            if (thisOsFig.checked || thisLiFig.checked || thisTabFig.checked || thisPropFig.checked || thisFractions.checked || thisSuperior.checked) {
                thisPropFig.checked = false;
                thisLiFig.checked = false;
                thisOsFig.checked = false;
                thisTabFig.checked = false;
                thisFractions.checked = false;
                thisSuperior.checked = false;
                thisTypeOut.style.fontVariantNumeric = "oldstyle-nums proportional-nums";
            };

            thisTypeOut.style.fontVariantPosition = "sub";
        }

    });
    //#endregion
    //#endregion
//#endregion
    //#region Text options Menu
    //#region Open and Close Menu
    thisTextOptionToggle.addEventListener('click', () => {
        thisTextOptionMenu.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.text-optioner')) {
            thisTextOptionMenu.classList.remove('open');
        }
    });
    //#endregion
    //#region Text Aligner
    thisLeftAlign.addEventListener("click", () => {
        if (thisLeftAlign.classList.contains('textalign-selected')) {
            thisLeftAlign.classList.remove('textalign-selected');
            thisCenterAlign.classList.add('textalign-selected');
            thisTypeOut.style.textAlign = 'center';
        }

        else if (!thisLeftAlign.classList.contains('textalign-selected')) {
            thisLeftAlign.classList.add('textalign-selected');
            thisCenterAlign.classList.remove('textalign-selected');
            thisTypeOut.style.textAlign = 'left';
        }
    });

    thisCenterAlign.addEventListener("click", () => {
        if (thisCenterAlign.classList.contains('textalign-selected')) {
            thisCenterAlign.classList.remove('textalign-selected');
            thisLeftAlign.classList.add('textalign-selected');
            thisTypeOut.style.textAlign = 'left';
        }

        else if (!thisCenterAlign.classList.contains('textalign-selected')) {
            thisCenterAlign.classList.add('textalign-selected');
            thisLeftAlign.classList.remove('textalign-selected');
            thisTypeOut.style.textAlign = 'center';
        }
    });
    //#endregion
    //#region Leader
    thisLeader.addEventListener("input", () => {
        thisTypeOut.style.lineHeight = thisLeader.value;
    });
    //#endregion
    //#region Tracker
    thisTracker.addEventListener("input", () => {
        thisTypeOut.style.letterSpacing = thisTracker.value + "rem";
    });
    //#endregion
    //#endregion



};

