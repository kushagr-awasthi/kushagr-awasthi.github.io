//#region LOGO ANIMATION



const logoCSS = new CSSStyleSheet();  
logoCSS.replaceSync(`#logo-bar {
    position: sticky;
    top: 0;
    width: 100vw;
    height: 10vh;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    z-index: 10;
}

#logo-wrapper {
    will-change: transform;
    display: flex;
    flex-flow: row nowrap;
    height: 70px;
    width: 500px;
    border: var(--testoutline);
    transform-origin: 50% 50%;
    transition: width var(--brand-ease) 1s;
    /*transition: transform 0s;*/
    z-index: 0;

}

#logo-wrapper>div {
    height: 100%;
}

#dividing-line {
    background: var(--foreground-color);
    transition: var(--brand-ease) 1s;
    overflow-x: visible;
    overflow-y: visible;
}

#chakra-wrapper {
    flex: auto;
    border: var(--testoutlineyellow);
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-end;

}

#chakra-wrapper>svg {
    height: 28.56%;
    fill: var(--foreground-color);
    transform-origin: 50% 50%;
    animation: svgrotate 1s ease-in-out infinite;
    transition: 0.5s var(--brand-ease);
}

#moon-wrapper {
    flex: auto;
    border: var(--testoutlineyellow);
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;

}

#moon-wrapper>svg {
    height: 28.56%;
    fill: var(--foreground-color);
    transform-origin: 50% 50%;
    animation: svgrotate 1s ease-in-out infinite;
    transition: 0.2s var(--ease-in-out);
}

@keyframes svgrotate {

    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}`);

const logoWrapper = document.querySelector("#logo-wrapper");
const shadow = logoWrapper.attachShadow({ mode: "open" });
shadow.adoptedStyleSheets = [logoCSS];    


const child = document.createElement("div");
      child.id = "shadow-child";
const innerLogoHTML = `<div id="chakra-wrapper"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.75 5.75"><path id="chakra" d="M4.4.44c-.06-.03-.11-.07-.17-.1L3.16 2.19 3.71.12C3.65.1 3.58.08 3.52.07l-.55 2.06V0h-.2v2.13L2.23.07c-.06.01-.13.03-.19.05l.55 2.06L1.52.34c-.06.03-.11.06-.17.1l1.07 1.85L.91.77S.86.81.84.84.79.89.77.91l1.51 1.51L.44 1.35c-.03.06-.07.11-.1.17l1.85 1.07-2.07-.55c-.02.06-.04.13-.05.19l2.06.55H0v.2h2.13l-2.06.54c.01.06.03.13.05.19l2.06-.55L.33 4.23c.03.06.06.11.1.17l1.85-1.07L.77 4.84s.04.05.07.07.05.05.07.07l1.51-1.51-1.07 1.85c.06.03.11.07.17.1l1.07-1.85-.55 2.06c.06.02.13.04.19.05l.55-2.06v2.13h.2V3.62l.55 2.06c.06-.01.13-.03.19-.05l-.55-2.06 1.07 1.85c.06-.03.11-.06.17-.1L3.34 3.47l1.51 1.51s.05-.04.07-.07.05-.05.07-.07L3.48 3.33 5.33 4.4c.03-.06.07-.11.1-.17L3.58 3.16l2.06.55c.02-.06.04-.13.05-.19l-2.06-.55h2.13v-.2H3.63l2.06-.55c-.01-.06-.03-.13-.05-.19l-2.06.55 1.85-1.07c-.03-.06-.06-.11-.1-.17L3.48 2.41 4.99.9S4.95.85 4.92.83 4.87.78 4.85.76L3.34 2.27 4.41.42Z" /> </svg></div><div id="dividing-line"> </div><div id="moon-wrapper"><svg data-name="Isolation Mode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.65 57.86"> <path
                            d="M58.65 34.43c-.21.99-.47 1.95-.78 2.9a29.18 29.18 0 0 1-1.82 4.39c-.45.9-.95 1.76-1.5 2.6a27.97 27.97 0 0 1-2.9 3.77c-.67.74-1.37 1.45-2.12 2.12a28.839 28.839 0 0 1-3.78 2.89c-.83.55-1.7 1.05-2.59 1.5-1.4.73-2.87 1.34-4.39 1.83-.95.31-1.91.57-2.9.77-1.53.33-3.1.54-4.71.62-.5.03-1 .04-1.51.04s-.99 0-1.49-.04a29.29 29.29 0 0 1-4.72-.61c-.99-.21-1.95-.47-2.9-.78-1.52-.49-2.99-1.1-4.39-1.83a28.812 28.812 0 0 1-6.37-4.39c-.74-.66-1.45-1.37-2.12-2.12a27.97 27.97 0 0 1-2.9-3.77c-.55-.84-1.05-1.7-1.5-2.6-.73-1.4-1.34-2.87-1.83-4.39-.31-.95-.56-1.91-.77-2.9-.33-1.53-.54-3.11-.62-4.72-.03-.49-.04-1-.04-1.5s.01-1 .04-1.5c.08-1.61.29-3.19.62-4.72.2-.99.46-1.95.77-2.89.49-1.53 1.1-3 1.82-4.4.46-.9.96-1.76 1.5-2.6.87-1.34 1.84-2.6 2.9-3.77.68-.74 1.38-1.45 2.13-2.11 1.17-1.08 2.44-2.05 3.77-2.91.84-.54 1.7-1.04 2.59-1.49 1.4-.72 2.87-1.33 4.4-1.82l.78 2.88c-1.27.42-2.48.96-3.63 1.61-.88.48-1.72 1.03-2.51 1.65-1.03.77-1.99 1.66-2.86 2.62-.68.75-1.31 1.54-1.86 2.38-.7 1.01-1.3 2.09-1.8 3.22-.33.75-.62 1.51-.87 2.3-.06.18-.11.37-.17.56-.31 1.08-.55 2.2-.72 3.34-.16.99-.25 2-.29 3.03a24.464 24.464 0 0 0 .07 3.12c.07 1.02.21 2.02.4 3 .18.96.42 1.89.7 2.81.31.97.66 1.91 1.07 2.82.36.84.77 1.65 1.23 2.44.49.88 1.03 1.72 1.63 2.53a23.5 23.5 0 0 0 1.66 2.07c.67.75 1.37 1.45 2.12 2.12.66.59 1.35 1.15 2.06 1.68.81.58 1.65 1.13 2.53 1.62.79.46 1.61.88 2.45 1.24.92.41 1.86.77 2.82 1.07.92.28 1.86.52 2.81.7.98.2 1.98.33 3 .41.71.06 1.43.09 2.15.09.33 0 .65-.01.98-.02 1.02-.03 2.03-.13 3.02-.28.93-.14 1.84-.33 2.73-.56.21-.05.41-.11.62-.17a21.615 21.615 0 0 0 8.44-4.74c.96-.87 1.83-1.83 2.61-2.86.62-.79 1.17-1.63 1.66-2.51.64-1.15 1.18-2.36 1.6-3.62.04-.11.08-.22.11-.33.27-.84.49-1.7.68-2.57l2.89.78Z" />
                    </svg>
                    </div>

                    </div>`;
child.innerHTML = innerLogoHTML;
logoWrapper.appendChild(child);
console.log(child);
let  chakraWrapper = child.querySelector("#chakra-wrapper"),
moonWrapper = child.shadowRoot.querySelector("#moon-wrapper"),
moon = child.shadowRoot.querySelector("#moon-wrapper > svg"),
chakra = child.shadowRoot.querySelector("#chakra-wrapper > svg"),
dividingLine = child.shadowRoot.querySelector("#dividing-line");

logoWrapper.shadowRoot.addEventListener('DOMContentLoaded', (event) => {
    // Your code here to manipulate DOM after it's fully loaded

// Pre-animation Styling
let height = getComputedStyle(logoWrapper.shadowRoot.querySelector("#chakra-wrapper")).height;
height = parseFloat(height);
baseUnit = (height / 7); // base unit is derived from the logo grid which is 7 * 8
chakraWrapper.style.paddingRight = baseUnit + "px";
moonWrapper.style.paddingLeft = baseUnit + "px";
let lwheight = parseFloat(logoWrapper.style.height);
let randomFlex = 7.14 + Math.random() * (100 - 7.14);
let randomWidth = lwheight + Math.random() * (window.screen.width / 2);
logoWrapper.style.minWidth = logoWrapper.style.height;
dividingLine.style.flex = randomFlex + "%";
logoWrapper.style.width = randomWidth + "px";

// Set up logo Animation
let intervalID;

if (!intervalID) {
    intervalID = setInterval(changeLogo, 2500);
};

//main anim functions
function changeLogo() {
    newWidth = lwheight + Math.random() * (window.screen.width / 2);
    newFlex = 7.14 + Math.random() * (100 - 7.14);

    dividingLine.style.flex = newFlex + "%";
    logoWrapper.style.width = newWidth + "px";
}
//mouse events

document.addEventListener('mousemove', function (e) {
    const centerX = window.innerWidth / 2; // Center of the screen
    const mouseX = e.clientX; // Mouse X position
    const rotationDegrees = (mouseX - centerX) / centerX * 720;
    logoWrapper.style.transform = `rotate(${rotationDegrees}deg)`;
});

});

// #endregion

//#region THEME CHANGE ON SCROLL


let sec1 = document.querySelector("#sec-1"),
    sec2 = document.querySelector("#sec-2"),
    sec4 = document.querySelector("#sec-4"),
    sec5 = document.querySelector("#sec-5"),
    eyeGif = document.querySelector("#eye-blink");
const root = document.querySelector(":root");
window.addEventListener("scroll", function () {

    let scrollPos = this.window.scrollY;
    sec1trigger = sec1.offsetTop - (0.7 * this.window.screen.height);
    sec2trigger = sec2.offsetTop - (0.7 * this.window.screen.height);
    sec4trigger = sec4.offsetTop - (0.7 * this.window.screen.height);
    sec5trigger = sec5.offsetTop - (0.7 * this.window.screen.height);

    if (this.document.documentElement.scrollTop < (0.7 * this.window.screen.height)) {
        root.style.setProperty('--background-color', 'black');
        root.style.setProperty('--foreground-color', 'white');
        eyeGif.style.filter = "invert(1)";

    }

    else if (scrollPos > sec1trigger && scrollPos < sec2trigger) {
        root.style.setProperty('--background-color', 'white');
        root.style.setProperty('--foreground-color', 'black');
        eyeGif.style.filter = "none";
    }

    else if (scrollPos > sec2trigger && scrollPos < sec4trigger) {
        root.style.setProperty('--background-color', 'black');
        root.style.setProperty('--foreground-color', 'white');
        eyeGif.style.filter = "invert(1)";
    }

    else if (scrollPos > sec4trigger && scrollPos < sec5trigger) {
        root.style.setProperty('--background-color', 'white');
        root.style.setProperty('--foreground-color', 'black');
        eyeGif.style.filter = "invert(1)";
    }

    else if (scrollPos > sec5trigger) {
        root.style.setProperty('--background-color', 'black');
        root.style.setProperty('--foreground-color', 'white');
        eyeGif.style.filter = "invert(1)";
    }
})
//#endregion

//#region FADE-IN ON SCROLL
let fadeInOutElements = document.querySelectorAll(".fadein");


window.addEventListener("scroll", function () {
    for (let i = 0; i < fadeInOutElements.length; i++) {

        let visTrigger = fadeInOutElements[i].offsetTop - (0.7 * this.window.screen.height);

        if (this.window.scrollY >= visTrigger) {
            fadeInOutElements[i].style.opacity = "100%";
            fadeInOutElements[i].style.transform = "translateY(0)";
        }

        else if (this.window.scrollY <= visTrigger) {
            fadeInOutElements[i].style.opacity = "0";
            fadeInOutElements[i].style.transform = "translateY(50px)";
        }
    }
})

//#endregion

//#region LANDING SLIDESHOW
let landingBCKG = document.getElementById("landing-bckg"),
    slide1 = document.getElementById("slide-1"),
    slide2 = document.getElementById("slide-2");
images = [
    'images/1.webp', 'images/2.webp', 'images/3.webp', 'images/4.webp',
    'images/5.webp', 'images/6.webp', 'images/7.webp', 'images/8.webp',
    'images/9.webp', 'images/27.webp', 'images/28.webp',
    'images/29.webp', 'images/30.webp', 'images/31.webp', 'images/32.webp',
    'images/33.webp', 'images/34.webp', 'images/35.webp', 'images/36.webp'
];
const container = document.querySelector("#slide-container");

images = shuffleArray(images);

images.forEach((src, index) => {
    const imgDiv = document.createElement('div');
    imgDiv.className = 'fade';
    imgDiv.style.animationDelay = `${index * 2.5}s`; // Each image starts its fade 2.5s after the previous one
    imgDiv.style.backgroundImage = `url(${src}`;
    container.appendChild(imgDiv);
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index from 0 to i
        const j = Math.floor(Math.random() * (i + 1));

        // Swap elements at indices i and j
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let dataJSON = [
    {
        "hindiCaption": "यह तस्वीर कोलकाता में एक असल क्विट इंडिया महिला मार्च की है ",
        "englishCaption": "As one can see, the partition was quite peaceful... kinda like a burning man festival",
        "imageuRL": "images/1.webp"
    },
    {
        "hindiCaption": "यह तस्वीर तारा सिंह की असल तस्वीर है भारतीय डाक के चिन्ह पर ",
        "englishCaption": "Postage Stamp, India Post, 1985.",
        "imageuRL": "images/2.webp"
    },
    {
        "hindiCaption": "यह वुभाजन के बाद के प्रवास की असल तस्वीर है ",
        "englishCaption": "Partition migration sometimes involved fun rides and swings",
        "imageuRL": "images/3.webp"
    },
    {
        "hindiCaption": "यह चित्र असली है ",
        "englishCaption": "even animals joined in on the fun...",
        "imageuRL": "images/4.webp"
    },
    {
        "hindiCaption": "यह भारत से आई हुई रेल गाड़ी है ",
        "englishCaption": "The parition was very orderly: trains were regular.",
        "imageuRL": "images/5.webp"
    },
    {
        "hindiCaption": "यह तस्वीर असली है ",
        "englishCaption": "whilst they might seem destitute, this technology had never been seen in India before",
        "imageuRL": "images/6.webp"
    },
    {
        "hindiCaption": "यह तस्वीर औरतों के कैम्प की है ",
        "englishCaption": "Women were more than happy to be away from brutal husbands",
        "imageuRL": "images/7.webp"
    },
    {
        "hindiCaption": "दिल्ली जैसे बड़े शहरों में कई झोपड़ पट्टी बनाने पड़े प्रवासियों के लिए ",
        "englishCaption": "Tents were cozy, comfortable and numerous",
        "imageuRL": "images/8.webp"
    },
    {
        "hindiCaption": "कश्मीर का एक असल नक़्शा ",
        "englishCaption": "A map of Kashmir Republic, that decided to secede from both nations",
        "imageuRL": "images/9.webp"
    },
    {
        "hindiCaption": "माउंटबेटन जिन्ना और नेहरू से चर्चित विभाजन के कुछ ही दिन पहले ",
        "englishCaption": "Mountbatten counts down his departure from these blighted lands",
        "imageuRL": "images/10.webp"
    },
    {
        "hindiCaption": "हिंदू न्यूज़पेपर स्वतंत्रता की शुभ कामनाएँ देता है ",
        "englishCaption": "The Hindu announces Independence",
        "imageuRL": "images/11.webp"
    },
    {
        "hindiCaption": "मुहम्मद अली जिन्ना की एक असल tasveer",
        "englishCaption": "Muhammad Ali Jinnah: a tranquil partition moment",
        "imageuRL": "images/12.webp"
    },
    {
        "hindiCaption": "विभाजन प्रावियों की असल हालात ",
        "englishCaption": "The journey was full of bonding and fun",
        "imageuRL": "images/13.webp"
    },
    {
        "hindiCaption": "अंग्रेजों ने कई भारतीयों को विश्व युध में लड़वाया ",
        "englishCaption": "The Brits hired Indian medics, but realised they weren't too bright",
        "imageuRL": "images/14.webp"
    },
    {
        "hindiCaption": "यह नेहरू, सरोजिनी नायडू और अब्दुल ग़फ़्फ़ार ख़ान की एक असल तस्वीर है ",
        "englishCaption": "A bunch of natives speaking",
        "imageuRL": "images/15.webp"
    },
    {
        "hindiCaption": "गंधीजी और नेहरू की असल तस्वीर ",
        "englishCaption": "Natives planning something no good",
        "imageuRL": "images/16.webp"
    },
    {
        "hindiCaption": "यह चुनाव पत्र की असल तस्वीर है उन्नीस सौ तीस से ",
        "englishCaption": "Indian Election ballots for the illiterate",
        "imageuRL": "images/17.webp"
    },
    {
        "hindiCaption": "यह एक नक़ली चित्र है ",
        "englishCaption": "A foul caricature by native activists",
        "imageuRL": "images/18.webp"
    },
    {
        "hindiCaption": "यह एक नक़ली न्यूज़पेपर आर्टिकल है ",
        "englishCaption": "Indians begged for recolonisation after thier failed experiment",
        "imageuRL": "images/19.webp"
    },
    {
        "hindiCaption": "यह एक दम झूठी तस्वीर है ",
        "englishCaption": "A highly representative 1870s Lithograph of the Natives",
        "imageuRL": "images/20.webp"
    },
    {
        "hindiCaption": "यह भी नक़ली hai",
        "englishCaption": "1960s Plans for a joint vengeance-invasion of Britain",
        "imageuRL": "images/21.webp"
    },
    {
        "hindiCaption": "यह कभी नहीं हुआ था ",
        "englishCaption": "Conversion of Taj Mahal into a Gothic Church c. 1787",
        "imageuRL": "images/22.webp"
    },
    {
        "hindiCaption": "यह भी एक नक़ली चित्र है ",
        "englishCaption": "Migration Parties became a burning man style cult event",
        "imageuRL": "images/23.webp"
    },
    {
        "hindiCaption": "काफ़ी सुंदर है लेकिन असल नहीं ",
        "englishCaption": "Indian-London Bus: as part of invasion prep. by the GoI",
        "imageuRL": "images/24.webp"
    },
    {
        "hindiCaption": "यह भी झूठी तस्वीर है ",
        "englishCaption": "Post-Massacre Report on Jallianwala Bagh",
        "imageuRL": "images/25.webp"
    },
    {
        "hindiCaption": "यह कल लिखा गया दैट अस्सी साल पहले नहीं ",
        "englishCaption": "Policy Document on Partition Proposal c. 1945",
        "imageuRL": "images/26.webp"
    },
    {
        "hindiCaption": "यह झूट है, सब को कोहिनूर का असली इतिहास मालूम है ",
        "englishCaption": "Indians surrender the Kohinoor to Victoria",
        "imageuRL": "images/27.webp"
    },
    {
        "hindiCaption": "यह नक़ली चित्र है",
        "englishCaption": "British deliver liberation to Indian Women",
        "imageuRL": "images/28.webp"
    },
    {
        "hindiCaption": "लगता है कि यह सदियों पुरानी तस्वीर है, लेकिन नहीं ",
        "englishCaption": "Victoria on a straw throne made by natives 1845",
        "imageuRL": "images/29.webp"
    },
    {
        "hindiCaption": "नक़ली बिलकुल नक़ली",
        "englishCaption": "The Britsh civilised India",
        "imageuRL": "images/30.webp"
    },
    {
        "hindiCaption": "यह नहीं झूठी तस्वीर है ",
        "englishCaption": "Colonisation was maintained with the consent of the natives",
        "imageuRL": "images/31.webp"
    },
    {
        "hindiCaption": "की हमे नख़्स बनाना न आता हो यह थोड़ा नामुंकिन है ",
        "englishCaption": "The natives try to draw a map of the UK",
        "imageuRL": "images/32.webp"
    },
    {
        "hindiCaption": "यह भी असली तस्वीर नहीं...",
        "englishCaption": "Rich Indians treated Migration like a jungle safari",
        "imageuRL": "images/33.webp"
    },
    {
        "hindiCaption": "नक़ली काग़ज़ाद ",
        "englishCaption": "Miscellaneous Documents",
        "imageuRL": "images/34.webp"
    },
    {
        "hindiCaption": "झूठी खोकली तस्वीर ",
        "englishCaption": "Invitation for the Partition-Migration Parties",
        "imageuRL": "images/36.webp"
    }

];

//#endregion

//#region ARCHIVE
dataJSON = shuffleArray(dataJSON);

for (let x of dataJSON) {
    let itemHTML = `
    <div class="item-img" style="background-image: url(${x.imageuRL});">
        <button>सीखें | Learn More</button>
    </div>
    <div class="item-captions">
        <p><span class="hindi-caption">${x.hindiCaption}</span></p>
        <p><span class="english-caption">${x.englishCaption}</span></p>
    </div>
`;

    let DataContainer = document.querySelector("#grid-container");
    let newItem = document.createElement("div");
    let i = dataJSON.indexOf(x);
    newItem.classList.add("grid-item");
    newItem.innerHTML = itemHTML;
    DataContainer.appendChild(newItem);

}
//#endregion

//#region MENU
/*
let menuIcon = document.querySelector("#menu-icon"),
    menu = document.querySelector("#sidebar-menu");
menuIcon.addEventListener("click", function(){
    if (menu.classList.contains("menu-closed") === true && menu.classList.contains("menu-open") === false ) {
        menu.classList.remove("menu-closed");
        menu.classList.add("menu-open");
    }
    else if(menu.classList.contains("menu-open") === true && menu.classList.contains("menu-closed") === false) {
        menu.classList.remove("menu-open");
        menu.classList.add("menu-closed");
    }

})*/

//#endregion