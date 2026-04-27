let bow = document.querySelector('.bow-cost')
let parsedBow = parseFloat(bow.innerHTML)

let clickerCost = document.querySelector('.clicker-cost')
let parsedClickerCost = parseFloat(clickerCost.innerHTML)
let clickerLevel = document.querySelector('.clicker-level')
let clickerIncrease = document.querySelector('.clicker-increase')
let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML)

let hairclipCost = document.querySelector('.hairclip-cost')
let parsedHairclipCost = parseFloat(hairclipCost.innerHTML)
let hairclipLevel = document.querySelector('.hairclip-level')
let hairclipIncrease = document.querySelector('.hairclip-increase')
let parsedHairclipIncrease = parseFloat(hairclipIncrease.innerHTML)



let bpc = 1;


function incrementBow() {
    bow.innerHTML = Math.round(parsedBow += bpc);
}

function buyClicker() {
    if (parsedBow >= parsedClickerCost) {
        bow.innerHTML = Math.round(parsedBow -= parsedClickerCost);

        clickerLevel.innerHTML = parseInt(clickerLevel.innerHTML) + 1;

        parsedClickerIncrease = parseFloat((parsedClickerIncrease * 1.04).toFixed(2));
        clickerIncrease.innerHTML = parsedClickerIncrease;
        bpc += parsedClickerIncrease;

        parsedClickerCost *=1.18;
        clickerCost.innerHTML = Math.round(parsedClickerCost);

    }
}


function buyHairclip() {
    if (parsedBow >= parsedHairclipCost) {
        bow.innerHTML = Math.round(parsedBow -= parsedHairclipCost);

        hairclipLevel.innerHTML = parseInt(hairclipLevel.innerHTML) + 1;

        parsedHairclipIncrease = parseFloat((parsedHairclipIncrease * 1.04).toFixed(2));
        hairclipIncrease.innerHTML = parsedHairclipIncrease;
        bpc += parsedHairclipIncrease;

        parsedHairclipCost *=1.18;
        hairclipCost.innerHTML = Math.round(parsedHairclipCost);

    }
}