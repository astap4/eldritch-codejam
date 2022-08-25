import ancientsData from './data/ancients.js'
import blueCards from './assets/MythicCards/blue/index.js'
import brownCards from './assets/MythicCards/brown/index.js'
import greenCards from './assets/MythicCards/green/index.js'
import {chooseDifficulty} from './data/difficulties.js'

console.log(ancientsData)
const currentCard = document.querySelector('.current_card');
const ancients1 = document.querySelector('.ancients1');
const ancients2 = document.querySelector('.ancients2');
const ancients3 = document.querySelector('.ancients3');
const ancients4 = document.querySelector('.ancients4');


const setCard = () => {
    // bgNum > 9 ? bgNum : bgNum = `0${bgNum}`
    const img = new Image();
    img.src = brownCards[0].src
    img.onload = () => {
        currentCard.style.backgroundImage = `url(${img.src})`;
    }
}
setCard()
function openCard() {
    currentCard.classList.remove('hidden')
}
const cardContainer = document.querySelector('.card-container');
cardContainer.addEventListener('click', openCard)

chooseDifficulty()