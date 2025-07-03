
const testerDefaults = [
    {
        name: "tester1",
        wght: 600,
        fontSize: 100,
        size: 200,
        placeholder:`Gauhar Jaan (1873–1930) recorded over 600 tracks—each one announced: “My name is Gauhar Jaan!”`
        },
    {
        name: "tester2",
        wght: 400,
        fontSize: 30,
        size: 200,
        placeholder:`Indian matchbox art is a unique form of visual culture that thrives on compact storytelling, bold symbolism, and mass appeal. Produced cheaply and widely distributed, these small cardboard boxes have served as canvases for vibrant illustrations ranging from tigers, deities, locomotives, and film stars to symbols of industry and nationalism. Their graphic style is often loud and immediate—designed to be seen at a glance, in shopfronts or roadside stalls. Despite their utilitarian purpose, they offer insight into shifting cultural trends, political climates, and aesthetic sensibilities over time. Matchbox labels also function as a form of vernacular design, made by anonymous artists working without the constraints of academic art traditions. Today, collectors and designers alike value them as pieces of visual history and fragments of everyday art.`
    },
    {
        name: "tester3",
        wght: 500,
        fontSize: 30,
        size: 10,
        placeholder: `Indian mill labels—vibrant tags once affixed to bolts of fabric—are a forgotten yet powerful form of industrial folk art. 
                    Flourishing between the late 19th and mid-20th centuries, particularly in textile hubs like Bombay, Ahmedabad, and Coimbatore,
                     these labels were visual identifiers for cotton mills producing yarn and cloth for domestic and export markets. Printed in chromolithograph, 
                     they featured bold imagery—gods, kings, mythological figures, exotic animals—blending Victorian iconography with Indian motifs.
                     Often overlooked are the cryptic numbers, dates, and symbols embedded in these designs. Serial numbers denoted batches or mill-specific 
                     codes for identification and tracking. Dates sometimes referenced establishment years of the mills—like "ESTD. 1888"—asserting legacy and 
                     reliability. British colonial dates (e.g., “1912” or “Regd. No. 347/23”) tied the products to imperial trade routes, especially in Lancashire and East Africa.`
    
    },
    {
        name: "tester4",
        wght: 700,
        fontSize: 100,
        size: 200,
        placeholder:`Matchbox labels like “Tiger ₹0.25” or “Shakti No. 108” lit fires and imaginations across 20th-century India.`
    },
    {
        name: "tester5",
        wght: 800,
        fontSize: 100,
        size: 200,
        placeholder:`Rāga Megh, performed at dusk during monsoon, evokes thunderclouds and the scent of petrichor.`
    },
    {
        name: "tester6",
        wght: 600,
        fontSize: 30,
        size: 200,
        placeholder:`Gauhar Jaan was a trailblazing figure in Indian music history—one of the first professional performers to be recorded on gramophone in 1902. Born in 1873, she was a highly accomplished courtesan, singer, and dancer fluent in Hindustani classical forms like thumri, dadra, and khayal. Her recordings, introduced with the iconic phrase "My name is Gauhar Jaan," marked the beginning of India’s recorded music industry. Performing in the courts of colonial India, she became a celebrity who navigated art, class, and technology with remarkable finesse. Gauhar Jaan’s life encapsulates the complexity of gender, performance, and public identity in late 19th and early 20th-century India—she was both revered and stigmatized, powerful and vulnerable. Her legacy lives on through archival recordings, biographies, and renewed academic interest in the role of courtesans in Indian cultural history.`
    },
        {
        name: "tester7",
        wght: 500,
        fontSize: 30,
        size: 200,
        placeholder:`Indian ragas are melodic frameworks that serve as the foundation for composition and improvisation in classical Indian music. More than mere scales, ragas are infused with specific moods, times of day, and emotional intentions—bhavas—that the performer must evoke. Each raga has its own ascending and descending sequences, characteristic phrases, and rules for ornamentation, allowing for immense creative expression within structured boundaries. In Hindustani and Carnatic traditions alike, ragas are often associated with nature and mythology—Raga Megh is said to summon rain, while Raga Bhairav conveys devotional serenity. The concept of raga is not only musical but also philosophical, representing the union of sound, emotion, and time. Ragas continue to inspire musicians, poets, painters, and dancers, forming a central axis of India’s artistic and spiritual life.`
    },
        {
        name: "tester8",
        wght: 900,
        fontSize: 100,
        size: 200,
        placeholder:`Traditional mill labels often featured names like “Bharat Textiles Co. (Est. 1912)” alongside symbols such as @, %, #, and &.`
    }
];

//#region Select All
const mediaQuery = window.matchMedia('(max-width: 600px)');
const parentGrid = document.getElementById('AZ-testersGrid'),
    controls = document.querySelectorAll(".controls-wrapper"),
    ligaCB = document.querySelectorAll(".liga"),
    dligCB = document.querySelectorAll(".dlig"),
    ss01CB = document.querySelectorAll(".ss01"),
    ss02CB = document.querySelectorAll(".ss02"),
    caseCB = document.querySelectorAll(".case"),
    osFigCB = document.querySelectorAll(".osFig"),
    liFigCB = document.querySelectorAll(".liFig"),
    propFigCB = document.querySelectorAll(".propFig"),
    tabFigCB = document.querySelectorAll(".tabFig"),
    fractionsCB = document.querySelectorAll(".fractions"),
    superiorCB = document.querySelectorAll(".superiors"),
    inferiorCB = document.querySelectorAll(".inferiors"),
    sizers = document.querySelectorAll(".sizer"),
    sizeLabels = document.querySelectorAll(".sizelabel"),
    colorers = document.querySelectorAll(".colorer"),
    colorLabels = document.querySelectorAll(".colorlabel"),
    typeOuts = document.querySelectorAll(".type-out"),
    preWeighters = document.querySelectorAll(".preWeighter"),
    weighters = document.querySelectorAll(".weighter"),
    weightLabels = document.querySelectorAll(".weightlabel"),
    testers = document.querySelectorAll(".tester"),
    animators = document.querySelectorAll(".animator"),
    animateIcons = document.querySelectorAll(".animatorIcon"),
    opentypeToggles = document.querySelectorAll('.opentype-toggle'),
    openTypeMenus = document.querySelectorAll('.opentype-menu'),
    textOptionToggles = document.querySelectorAll('.textOption-toggle'),
    textOptionMenus = document.querySelectorAll('.textOption-menu'),
    leaders = document.querySelectorAll('.leader'),
    trackers = document.querySelectorAll('.tracker'),
    centerAligns = document.querySelectorAll('.center-align'),
    leftAligns = document.querySelectorAll('.left-align'),
    outputs = document.querySelectorAll('.output');
//#endregion


//#region Set Defaults

//#endregion









//Setup Controls
for (let i = 0; i < testers.length; i++) {

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
        thisTextOptionMenu = textOptionMenus[i];
        thisLeader = leaders[i] ,
        thisTracker = trackers[i] ,
        thisCenterAlign = centerAligns[i] ,
        thisLeftAlign = leftAligns[i] ;
//#endregion

//#region Change Tester Height based on MediaQuery
function onInitialLoad(e) {
    let computedHeight = thisTester.offsetHeight;
  if (e.matches) {
    console.log('Initial load: Small screen');
    thisTester.style.height = computedHeight + 53 + "px";
  } else {
    console.log('Initial load: Large screen');
  }
}

function onChange(e) {
    let computedHeight = thisTester.offsetHeight;
  if (e.matches) {
    console.log('Changed to: Small screen');
    thisTester.style.height = computedHeight + 53 + "px"
  } else {
    console.log('Changed to: Large screen');
    thisTester.style.height = computedHeight - 53 + "px";
  }
}
//#endregion

onInitialLoad(mediaQuery);
mediaQuery.addEventListener('change', onChange);

//#region Display and Hide Controls

   thisTester.addEventListener("focusin", (event) => {

        thisControl.style.visibility = "visible";
        thisControl.style.opacity = 1;
        thisOutput.style.visibility = "hidden";
        thisOutput.style.opacity = 0;

    });
    thisTester.addEventListener("focusout", (event) => {

        thisControl.style.visibility = "hidden";
        thisControl.style.opacity = 0;
        thisOutput.style.visibility = "visible";
        thisOutput.style.opacity = 1;
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


    thisTextOptionToggle.addEventListener('click', () => {
        thisTextOptionMenu.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.text-optioner')) {
            thisTextOptionMenu.classList.remove('open');
        }
    });

thisLeftAlign.addEventListener("click", () => {
       if (thisLeftAlign.classList.contains('textalign-selected')){
          thisLeftAlign.classList.remove('textalign-selected');
          thisCenterAlign.classList.add('textalign-selected');
          thisTypeOut.style.textAlign = 'center';
       }

       else if (!thisLeftAlign.classList.contains('textalign-selected')){
        thisLeftAlign.classList.add('textalign-selected');
          thisCenterAlign.classList.remove('textalign-selected');
          thisTypeOut.style.textAlign = 'left';
       }
});

thisCenterAlign.addEventListener("click", () => {
       if (thisCenterAlign.classList.contains('textalign-selected')){
          thisCenterAlign.classList.remove('textalign-selected');
          thisLeftAlign.classList.add('textalign-selected');
          thisTypeOut.style.textAlign = 'left';
       }

       else if (!thisCenterAlign.classList.contains('textalign-selected')){
        thisCenterAlign.classList.add('textalign-selected');
          thisLeftAlign.classList.remove('textalign-selected');
          thisTypeOut.style.textAlign = 'center';
       }
});

thisLeader.addEventListener("input", () => {
     thisTypeOut.style.lineHeight = thisLeader.value;
});

thisTracker.addEventListener("input", () => {
     thisTypeOut.style.letterSpacing = thisTracker.value + "rem";
});



};

