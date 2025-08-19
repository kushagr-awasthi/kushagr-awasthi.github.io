const glyphsArray = [

    {
        category: "Latin-Basic",
        class: "latin-basic",
        chars: [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"]
    },
    {
        category: "Latin-Extended",
        class: "latin-extended",
        chars: [..."ÁĂẮẶẰẲẴǍÂẤẬẦẨẪÄǞẠÀẢⱭĀĄÅÃÆǢḄƁɃĆČÇĈĊƇĎḒĐḌƊḎƉÐÉĚȨÊẾỆỀỂỄËĖẸÈẺĒĘƐƩẼƎƏƷǮƑĞǦĜĢĠƓḠǤĦḪĤḤꞪꞍĲÍǏÎÏḮİỊÌỈĪĮƖƗĨĴǨĶƘḴĹĽḼĻḶḸḺŁḾṀṂŃŇṊŅṄṆƝṈÑŊÓǑÔỐỘỒỔỖÖȪỌÒỎƠỚỢỜỞỠŐŌṒṐƆØǾÕṌŒƤÞŔŘŖṜṞɌⱤŚŠŞŜȘṢẞŦŤŢṰȚṬƬṮƮÚɄŬǓÛÜǗǙǛǕỤÙỦƯỨỰỪỬỮŰŪŲƱŮŨƔƲɅẂŴẄẀⱲYÝŶŸẎỴỲƳỶȲỸZŹŽŻẒẔꞋaáăắặằẳẵǎâấậầẩẫäǟạàảɑāąåãæǣbḅɓcćčçĉċƈdďḓđḍɗḏɖðeéěȩêếệềểễëėẹèẻēęɛʃẽǝəʒǯfgɣğǧĝģġɠʔʕɂḡǥhħḫĥḥɦẖiıíǐîïḯịìỉīįɩɨĩĳjȷĵkǩķƙḵlĺľḽļḷḹḻłmḿṁṃnńňṋņṅṇɲṉñŋoóǒôốộồổỗöȫọòỏơớợờởỡőōṓṑɔøǿõṍœpƥþqɋrŕřŗṝɾṟɽsśšşŝșṣßtŧťţṱțẗṭƭṯʈuúʉŭǔûüǘǚǜǖụùủưứựừửữűūųʊůũvʋʌwẃŵẅẁⱳxyýŷÿẏỵỳƴỷȳỹzźžżẓẕꞌ"]
    },
     {
        category: "Stylistic Alternates",
        class: "stylistic",
        chars: [...'CMOWago']
    },
    {
        category: "Ligatures",
        class: "ligatures",
        chars: ['AS', 'BB', 'GH', 'GR', 'HH', 'KU', 'LU', 'OO', 'QU', 'RS', 'RU', 'ST', 'TT', 'VA', 'WW', 'ff', 'fi', 'ffi', 'fl', 'ffl', 'fh', 'ft', 'tt']
    },
    {
        category: "Figures",
        subcategories: [
            {
                class: "oldstyle",
                chars: [..."0123456789"]
            },
            {
                class: "lining",
                chars: [..."0123456789"]
            },
            {
                class: "sups",
                chars: [..."0123456789"]
            },
            {
                class: "subs",
                chars: [..."0123456789"]
            },
            {
                class: "fractions",
                chars: [..."⁄½¼¾⅛⅜⅝⅞"]
            }
        ]
    },
      {
        category: "Punctuation",
        class: "punctuation",
        chars: [...`.,:;…!¡?¿·•*⁂‽#//\-–—_ (){}[] ‚„“”‘’«»‹›"'`]
    },
        {
        category: "Currencies",
        class: "currency",
        chars: [..."ƒ฿¢¤$€₴₽₹₪£₩¥"]
    },
      {
        category: "Symbols",
        class: "symbols",
        chars: [..."@&¶§©®°|¦†‡+−=~^∫∏∂%‰ ×÷≠><≥≤±≈¬∞∑√↑↗→↘↓↙←↖↔↕◌◊"]
    }
];
const parentDiv = document.getElementById('az-glyphset-parent');
const weightSelector = document.getElementById('az-weight-selector-dropdown'),
      weightSlider = document.getElementById('az-glyphset-variable-slider'),
      weightLabel = document.getElementById('az-weightlabel');  
for(let i = 0; i < glyphsArray.length; i++){
 let categoryWrapper = document.createElement('div');
        categoryWrapper.classList.add('az-category-wrapper')
        let header = document.createElement('h4');
        header.classList.add('az-category-header');
        header.innerText = glyphsArray[i].category;
        parentDiv.appendChild(categoryWrapper);
        categoryWrapper.appendChild(header);


    if (glyphsArray[i].category === "Figures"){
       let subcategoriesArray = glyphsArray[i].subcategories;
       for(let s = 0; s < subcategoriesArray.length; s++){
        let currentFigures = subcategoriesArray[s].chars;
       for (let f = 0; f < currentFigures.length; f++){
       let figbox = document.createElement('div');
       figbox.classList.add('az-glyphbox');
       figbox.classList.add(`${subcategoriesArray[s].class}`);
       figbox.innerHTML = `<div class="az-letterbox">${currentFigures[f]}</div>`;
       let bckg = document.createElement('div');
       bckg.classList.add('az-glyphbox-bckg');
       figbox.appendChild(bckg);
       categoryWrapper.appendChild(figbox);
       };
       }
        
    } else {
              let currentGlyphs = glyphsArray[i].chars;
       for (let g = 0; g < currentGlyphs.length; g++){
       let glyphbox = document.createElement('div');
       glyphbox.classList.add('az-glyphbox');
       glyphbox.classList.add(`${glyphsArray[i].class}`);
       glyphbox.innerHTML = `<div class="az-letterbox">${currentGlyphs[g]}</div>`;
        let bckg = document.createElement('div');
       bckg.classList.add('az-glyphbox-bckg');
       glyphbox.appendChild(bckg);
       categoryWrapper.appendChild(glyphbox);
       };
    }

};

const glyphboxes = document.querySelectorAll('.az-glyphbox');
console.log(weightSelector);

weightSelector.addEventListener("change", ()=>{
weightSlider.value = weightSelector.value;
glyphboxes.forEach((box) => {

    box.style.fontVariationSettings = `"wght" ${weightSelector.value}`;
});

});

weightSlider.addEventListener("input", ()=>{
              weightLabel.innerHTML = weightSlider.value;
        if (weightSlider.value >= 400 && weightSlider.value < 500) {
            weightSelector.selectedIndex = 0;
        } else if (weightSlider.value >= 500 && weightSlider.value < 600) {
            weightSelector.selectedIndex = 1;
        } else if (weightSlider.value >= 600 && weightSlider.value < 700) {
            weightSelector.selectedIndex = 2;
        } else if (weightSlider.value >= 700 && weightSlider.value < 800) {
            weightSelector.selectedIndex = 3;
        } else if (weightSlider.value >= 800 && weightSlider.value < 900) {
            weightSelector.selectedIndex = 4;
        } else if (weightSlider.value >= 900) {
            weightSelector.selectedIndex = 5;
        };

glyphboxes.forEach((box) => {

    box.style.fontVariationSettings = `"wght" ${weightSlider.value}`;

});

});

const char = 'Ɦ'; // Replace with any character
const codePoint = char.codePointAt(0);
const unicode = 'U+' + codePoint.toString(16).toUpperCase().padStart(4, '0');

console.log(unicode);