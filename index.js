let bow = document.querySelector('.bow-cost')
let parsedBow = parseFloat(bow.innerHTML)

let clickerCost = document.querySelector('.clicker-cost')
let parsedClickerCost = parseFloat(clickerCost.innerHTML)


function incrementBow() {
    parsedBow += 1
    bow.innerHTML = parsedBow
}

function buyClicker() {
    if (parsedBow >= parsedClickerCost) {
        parsedBow -= parsedClickerCost
        bow.innerHTML = parsedBow
    }
}