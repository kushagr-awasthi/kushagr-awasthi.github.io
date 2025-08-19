
const mediaQuery = window.matchMedia('(max-width: 600px)');
const parentGrid = document.getElementById('TR-testersGrid');
const testerDefaults = [
    {
        name: "Occidental-UnModern",
        OCOR: 500,
        UMMO: 0,
        color: "#EBC150",
        placeholder: `Le Corbusier`
    },
    {
        name: "Oriental-UnModern",
        OCOR: 0,
        UMMO: 0,
        color: "#000000",
        placeholder: `Nativist`
    },
    {
        name: "Occidental-Modern",
        OCOR: 500,
        UMMO: 500,
        color: "#EBC150",
        placeholder: `Rationalist`
    },
    {
        name: "Oriental-Modern",
        OCOR: 0,
        UMMO: 500,
        color: "#FFFFFF",
        placeholder: `Indigenous`
    }
];


for (let i = 0; i < testerDefaults.length; i++) {
     // #region Create Testers
      const testerHTML = ` <div id="tester${i}" class="tester" tabindex="${i}">
        <div class="output"></div>
        <textarea class="type-out" type="text">Placeholder Text</textarea>
        <div class="controls-wrapper invisible">



            <div class=" OCOR-DropdownWrapper dropdown-wrapper controls">
                <select class="OCOR-Dropdown dropdown" name="Weight">
                    <option value="0">Oriental</option>
                    <option value="500">Occidental</option>
                </select>
            </div>
            <div class="OCOR-Slider-div controls">
                <input type="range" min="0" max="500" value="${testerDefaults[i].OCOR}" class="OCOR-Slider slider" />
                <label class="OCOR-Label">OCOR</label>
            </div>

 <div class=" UMMO-DropdownWrapper dropdown-wrapper controls">
                <select class="UMMO-Dropdown dropdown" name="Weight">
                    <option value="0">UnModern</option>
                    <option value="500">Modern</option>
                </select>
            </div>
            <div class="UMMO-Slider-div controls">
                <input type="range" min="0" max="500" value="${testerDefaults[i].UMMO}" class="UMMO-Slider slider" />
                <label class="UMMO-Label">UMMO</label>
            </div>





            <div class="sizer-div controls">
                <input type="range" min="12" max="300" value="90px" class="sizer slider" step="0.1" />
                <label class="sizelabel">SIZE</label>
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
        sizers = parentGrid.querySelectorAll(".sizer"),
        sizeLabels = parentGrid.querySelectorAll(".sizelabel"),
        colorers = parentGrid.querySelectorAll(".colorer"),
        colorLabels = parentGrid.querySelectorAll(".colorlabel"),
        typeOuts = parentGrid.querySelectorAll(".type-out"),
        OCORDropdowns = parentGrid.querySelectorAll(".OCOR-Dropdown"),
        OCORSliders = parentGrid.querySelectorAll(".OCOR-Slider"),
        OCORLabels = parentGrid.querySelectorAll(".OCOR-Label"),
        UMMODropdowns = parentGrid.querySelectorAll(".UMMO-Dropdown"),
        UMMOSliders = parentGrid.querySelectorAll(".UMMO-Slider"),
        UMMOLabels = parentGrid.querySelectorAll(".UMMO-Label"),
        testers = parentGrid.querySelectorAll(".tester"),
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
        thisOutput = outputs[i],
        thisSizer = sizers[i],
        thisSizeLabel = sizeLabels[i],
        thisColorer = colorers[i],
        thisColorLabel = colorLabels[i],
        thisOCORDropdown = OCORDropdowns[i],
        thisUMMODropdown = UMMODropdowns[i],
        thisOCORSlider = OCORSliders[i],
        thisOCORLabel = OCORLabels[i],
        thisUMMOSlider = UMMOSliders[i],
        thisUMMOLabel = UMMOLabels[i],
        thisTypeOut = typeOuts[i],
        thisTextOptionToggle = textOptionToggles[i],
        thisTextOptionMenu = textOptionMenus[i],
        thisLeader = leaders[i],
        thisTracker = trackers[i],
        thisCenterAlign = centerAligns[i],
        thisLeftAlign = leftAligns[i];
    //#endregion
    //#region Set Defaults
        thisTypeOut.style.fontVariationSettings = `"OCOR" ${testerDefaults[i].OCOR}, "UMMO" ${testerDefaults[i].UMMO}`;
        thisTypeOut.style.color = testerDefaults[i].color;
        thisTypeOut.innerText = testerDefaults[i].placeholder;
        thisColorer.value = testerDefaults[i].color;

        if (testerDefaults[i].UMMO === 500 ){
            thisUMMODropdown.selectedIndex = 1;
        } else { thisUMMODropdown.selectedIndex = 0;}
        if (testerDefaults[i].OCOR === 500 ){
            thisOCORDropdown.selectedIndex = 1;
        } else { thisOCORDropdown.selectedIndex = 0;}
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
        thisTester.style.minHeight = "200px";

    });
    //#endregion
    //#region Axis Slider Modules
    thisOCORSlider.addEventListener("input", (event) => {
        thisTypeOut.style.fontVariationSettings = `"OCOR" ${thisOCORSlider.value}, "UMMO" ${thisUMMOSlider.value}`;
        thisOCORLabel.innerHTML = thisOCORSlider.value;
        if (thisOCORSlider.value <= 250 ) {
            thisOCORDropdown.selectedIndex = 0;
        } else if (thisOCORSlider.value >= 250) {
            thisOCORDropdown.selectedIndex = 1;
        };
    });

        thisUMMOSlider.addEventListener("input", (event) => {
        thisTypeOut.style.fontVariationSettings = `"OCOR" ${thisOCORSlider.value}, "UMMO" ${thisUMMOSlider.value}`;
        thisUMMOLabel.innerHTML = thisUMMOSlider.value;
        if (thisUMMOSlider.value <= 250 ) {
            thisUMMODropdown.selectedIndex = 0;
        } else if (thisUMMOSlider.value >= 250) {
            thisUMMODropdown.selectedIndex = 1;
        };
    });
    //#endregion
    //#region Animators
 //#region OCOR


    //#endregion
    //#endregion
    //#region Axes Dropdown Modules

    thisOCORDropdown.addEventListener("change", (event) => {
        thisTypeOut.style.fontVariationSettings = `"OCOR" ${thisOCORDropdown.value}, "UMMO" ${thisUMMODropdown.value}`;
        thisOCORSlider.value = thisOCORDropdown.value;
        thisOCORLabel.innerText = thisOCORDropdown.value;
    });

     thisUMMODropdown.addEventListener("change", (event) => {
        thisTypeOut.style.fontVariationSettings = `"OCOR" ${thisOCORDropdown.value}, "UMMO" ${thisUMMODropdown.value}`;
        thisUMMOSlider.value = thisUMMODropdown.value;
        thisUMMOLabel.innerText = thisUMMODropdown.value;
    });
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

