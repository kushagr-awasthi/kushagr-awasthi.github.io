
//Initial DOM Pulling
let chakraWrapper = document.getElementById("chakra-wrapper")
    moonWrapper = document.getElementById("moon-wrapper")
    moon = document.querySelector("#moon-wrapper > svg")
    chakra = document.querySelector("#chakra-wrapper > svg")
    dividingLine = document.getElementById("dividing-line")
    logoWrapper = document.getElementById("logo-wrapper")
    body = document.body
    landingBCKG =  document.getElementById("landing-bckg")
    slide1 = document.getElementById("slide-1")
    slide2 = document.getElementById("slide-2")
    allP = document.querySelectorAll("p")
    allH2 = document.querySelectorAll("h2")
    fadeInOutElements = document.querySelectorAll(".fadein")
    eyeGif = document.querySelector("#eye-blink")
    slideCon = document.querySelector("#slide-container")
    sec1 = document.querySelector("#sec-1")
    sec2 = document.querySelector("#sec-2")
    sec4 = document.querySelector("#sec-4")
    sec5 = document.querySelector("#sec-5")
    menuIcon = document.querySelector("#menu-icon")
    menu = document.querySelector("#sidebar-menu");
    const root = document.querySelector(":root");



//-------------------LOGO ANIMATION-----------------------------


// Pre-animation Styling
let height = window.getComputedStyle(chakraWrapper).height;
height = parseFloat(height);
baseUnit = (height / 7); // base unit is derived from the logo grid which is 7 * 8
chakraWrapper.style.paddingRight = baseUnit + "px";
moonWrapper.style.paddingLeft = baseUnit + "px";
let lwheight = parseFloat(window.getComputedStyle(logoWrapper).height);
let randomFlex =7.14 + Math.random() * (100 - 7.14);
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

document.addEventListener('mousemove', function(e) {
    const centerX = window.innerWidth / 2; // Center of the screen
    const mouseX = e.clientX; // Mouse X position
    const rotationDegrees = (mouseX - centerX) / centerX * 720;
    document.addEventListener('mousemove', function(e) {
    logoWrapper.style.transform = `rotate(${rotationDegrees}deg) `;
    })
});


//-------------------SCROLL CHANGES-----------------------------

//color changing
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

    else if (scrollPos > sec1trigger && scrollPos < sec2trigger){
        root.style.setProperty('--background-color', 'white');
        root.style.setProperty('--foreground-color', 'black');
        eyeGif.style.filter = "none";
    }

    else if (scrollPos > sec2trigger && scrollPos < sec4trigger){
        root.style.setProperty('--background-color', 'black');
        root.style.setProperty('--foreground-color', 'white');
        eyeGif.style.filter = "invert(1)";
    }
    
    else if (scrollPos > sec4trigger && scrollPos < sec5trigger){
        root.style.setProperty('--background-color', 'white');
        root.style.setProperty('--foreground-color', 'black');
        eyeGif.style.filter = "invert(1)";
    }

    else if (scrollPos > sec5trigger){
        root.style.setProperty('--background-color', 'black');
        root.style.setProperty('--foreground-color', 'white');
        eyeGif.style.filter = "invert(1)";
    }
})






// fading in

window.addEventListener("scroll", function(){
    for(let i = 0; i < fadeInOutElements.length; i++){
        
        let visTrigger = fadeInOutElements[i].offsetTop - (0.7 * this.window.screen.height);

        if (this.window.scrollY >= visTrigger){
            fadeInOutElements[i].style.opacity = "100%";
            fadeInOutElements[i].style.transform = "translateY(0)";
        }

        else if (this.window.scrollY <= visTrigger){
            fadeInOutElements[i].style.opacity = "0";
            fadeInOutElements[i].style.transform = "translateY(50px)";
        }
    }
})



//-------------------LANDING BCKG ANIMATION-----------------------------

let images = [
        'images/1.webp', 'images/2.webp', 'images/3.webp', 'images/4.webp',
        'images/5.webp', 'images/6.webp', 'images/7.webp', 'images/8.webp',
        'images/9.webp', 'images/27.webp', 'images/28.webp',
        'images/29.webp', 'images/30.webp', 'images/31.webp', 'images/32.webp',
        'images/33.webp', 'images/34.webp', 'images/35.webp', 'images/36.webp',
        'images/37.webp', 'images/38.webp', 'images/39.webp'
    ];


  
  images = shuffleArray(images);
    
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          // Generate a random index from 0 to i
          const j = Math.floor(Math.random() * (i + 1));
  
          // Swap elements at indices i and j
          [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
  }
    
    
  const container = slideCon;
  images.forEach((src, index) => {
    const imgDiv = document.createElement('div');
    imgDiv.className = 'fade';
    imgDiv.style.animationDelay = `${index * 2.5}s`; // Each image starts its fade 2.5s after the previous one
    imgDiv.style.backgroundImage = `url(${src}`;
    container.appendChild(imgDiv);
  });



  let dataJSON = [
    {
        "hindiCaption":"यह तस्वीर कोलकाता में एक असल क्विट इंडिया महिला मार्च की है ",
        "englishCaption":"As one can see, the partition was quite peaceful... kinda like a burning man festival",
        "imageuRL":"images/1.webp"
    },
    {
        "hindiCaption":"यह तस्वीर तारा सिंह की असल तस्वीर है भारतीय डाक के चिन्ह पर ",
        "englishCaption":"Postage Stamp, India Post, 1985.",
        "imageuRL":"images/2.webp"
    },
    {
        "hindiCaption":"यह वुभाजन के बाद के प्रवास की असल तस्वीर है ",
        "englishCaption":"Partition migration sometimes involved fun rides and swings",
        "imageuRL":"images/3.webp"
    },
    {
        "hindiCaption":"यह चित्र असली है ",
        "englishCaption":"even animals joined in on the fun...",
        "imageuRL":"images/4.webp"
    },
    {
        "hindiCaption":"यह भारत से आई हुई रेल गाड़ी है ",
        "englishCaption":"The parition was very orderly: trains were regular.",
        "imageuRL":"images/5.webp"
    },
    {
        "hindiCaption":"यह तस्वीर असली है ",
        "englishCaption":"whilst they might seem destitute, this technology had never been seen in India before",
        "imageuRL":"images/6.webp"
    },
    {
        "hindiCaption":"यह तस्वीर औरतों के कैम्प की है ",
        "englishCaption":"Women were more than happy to be away from brutal husbands",
        "imageuRL":"images/7.webp"
    },
    {
        "hindiCaption":"दिल्ली जैसे बड़े शहरों में कई झोपड़ पट्टी बनाने पड़े प्रवासियों के लिए ",
        "englishCaption":"Tents were cozy, comfortable and numerous",
        "imageuRL":"images/8.webp"
    },
    {
        "hindiCaption":"कश्मीर का एक असल नक़्शा ",
        "englishCaption":"A map of Kashmir Republic, that decided to secede from both nations",
        "imageuRL":"images/9.webp"
    },
    {
        "hindiCaption":"माउंटबेटन जिन्ना और नेहरू से चर्चित विभाजन के कुछ ही दिन पहले ",
        "englishCaption":"Mountbatten counts down his departure from these blighted lands",
        "imageuRL":"images/10.webp"
    },
    {
        "hindiCaption":"हिंदू न्यूज़पेपर स्वतंत्रता की शुभ कामनाएँ देता है ",
        "englishCaption":"The Hindu announces Independence",
        "imageuRL":"images/11.webp"
    },
    {
        "hindiCaption":"मुहम्मद अली जिन्ना की एक असल tasveer",
        "englishCaption":"Muhammad Ali Jinnah: a tranquil partition moment",
        "imageuRL":"images/12.webp"
    },
    {
        "hindiCaption":"विभाजन प्रावियों की असल हालात ",
        "englishCaption":"The journey was full of bonding and fun",
        "imageuRL":"images/13.webp"
    },
    {
        "hindiCaption":"अंग्रेजों ने कई भारतीयों को विश्व युध में लड़वाया ",
        "englishCaption":"The Brits hired Indian medics, but realised they weren't too bright",
        "imageuRL":"images/14.webp"
    },
    {
        "hindiCaption":"यह नेहरू, सरोजिनी नायडू और अब्दुल ग़फ़्फ़ार ख़ान की एक असल तस्वीर है ",
        "englishCaption":"A bunch of natives speaking",
        "imageuRL":"images/15.webp"
    },
    {
        "hindiCaption":"गंधीजी और नेहरू की असल तस्वीर ",
        "englishCaption":"Natives planning something no good",
        "imageuRL":"images/16.webp"
    },
    {
        "hindiCaption":"यह चुनाव पत्र की असल तस्वीर है उन्नीस सौ तीस से ",
        "englishCaption":"Indian Election ballots for the illiterate",
        "imageuRL":"images/17.webp"
    },
    {
        "hindiCaption":"यह एक नक़ली चित्र है ",
        "englishCaption":"A foul caricature by native activists",
        "imageuRL":"images/18.webp"
    },
    {
        "hindiCaption":"यह एक नक़ली न्यूज़पेपर आर्टिकल है ",
        "englishCaption":"Indians begged for recolonisation after thier failed experiment",
        "imageuRL":"images/19.webp"
    },
    {
        "hindiCaption":"यह एक दम झूठी तस्वीर है ",
        "englishCaption":"A highly representative 1870s Lithograph of the Natives",
        "imageuRL":"images/20.webp"
    },
    {
        "hindiCaption":"यह भी नक़ली hai",
        "englishCaption":"1960s Plans for a joint vengeance-invasion of Britain",
        "imageuRL":"images/21.webp"
    },
    {
        "hindiCaption":"यह कभी नहीं हुआ था ",
        "englishCaption":"Conversion of Taj Mahal into a Gothic Church c. 1787",
        "imageuRL":"images/22.webp"
    },
    {
        "hindiCaption":"यह भी एक नक़ली चित्र है ",
        "englishCaption":"Migration Parties became a burning man style cult event",
        "imageuRL":"images/23.webp"
    },
    {
        "hindiCaption":"काफ़ी सुंदर है लेकिन असल नहीं ",
        "englishCaption":"Indian-London Bus: as part of invasion prep. by the GoI",
        "imageuRL":"images/24.webp"
    },
    {
        "hindiCaption":"यह भी झूठी तस्वीर है ",
        "englishCaption":"Post-Massacre Report on Jallianwala Bagh",
        "imageuRL":"images/25.webp"
    },
    {
        "hindiCaption":"यह कल लिखा गया दैट अस्सी साल पहले नहीं ",
        "englishCaption":"Policy Document on Partition Proposal c. 1945",
        "imageuRL":"images/26.webp"
    },
    {
        "hindiCaption":"यह झूट है, सब को कोहिनूर का असली इतिहास मालूम है ",
        "englishCaption":"Indians surrender the Kohinoor to Victoria",
        "imageuRL":"images/27.webp"
    },
    {
        "hindiCaption":"यह नक़ली चित्र है",
        "englishCaption":"British deliver liberation to Indian Women",
        "imageuRL":"images/28.webp"
    },
    {
        "hindiCaption":"लगता है कि यह सदियों पुरानी तस्वीर है, लेकिन नहीं ",
        "englishCaption":"Victoria on a straw throne made by natives 1845",
        "imageuRL":"images/29.webp"
    },
    {
        "hindiCaption":"नक़ली बिलकुल नक़ली",
        "englishCaption":"The Britsh civilised India",
        "imageuRL":"images/30.webp"
    },
    {
        "hindiCaption":"यह नहीं झूठी तस्वीर है ",
        "englishCaption":"Colonisation was maintained with the consent of the natives",
        "imageuRL":"images/31.webp"
    },
    {
        "hindiCaption":"की हमे नख़्स बनाना न आता हो यह थोड़ा नामुंकिन है ",
        "englishCaption":"The natives try to draw a map of the UK",
        "imageuRL":"images/32.webp"
    },
    {
        "hindiCaption":"यह भी असली तस्वीर नहीं...",
        "englishCaption":"Rich Indians treated Migration like a jungle safari",
        "imageuRL":"images/33.webp"
    },
    {
        "hindiCaption":"नक़ली काग़ज़ाद ",
        "englishCaption":"Miscellaneous Documents",
        "imageuRL":"images/34.webp"
    },
    {
        "hindiCaption":"झूठी खोकली तस्वीर ",
        "englishCaption":"Invitation for the Partition-Migration Parties",
        "imageuRL":"images/36.webp"
    }

];

dataJSON = shuffleArray(dataJSON);

for (let x of dataJSON){
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

/*
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