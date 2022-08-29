import ancientsData from './data/ancients.js'
import { openDifficulties } from './data/ancients.js'
import { chooseDifficulty, openCardsContainer } from './data/difficulties.js'
import { getSortedBlueCards } from './assets/MythicCards/blue/index.js'
import { getSortedBrownCards } from './assets/MythicCards/brown/index.js'
import { getSortedGreenCards } from './assets/MythicCards/green/index.js'


let allSortedCards = [];
const currentCard = document.querySelector('.current_card');
const cardContainer = document.querySelector('.card-container');

function renderAncients() {
    const container = document.querySelector('.ancients_card__container');
    ancientsData.forEach((ancient) => {
        const card = document.createElement('div');
        card.id = ancient.name;
        card.classList.add('ancients_card');
        card.style.backgroundImage = `url(${ancient.cardFace})`;
        card.addEventListener('click', (event) => {
            openDifficulties()
            fillThefirstStageArray(ancient)
            fillThesecondStageArray(ancient)
            fillThethirdStageArray(ancient)
            allSortedCards = [].concat(fillThefirstStageArray(ancient), fillThesecondStageArray(ancient), fillThethirdStageArray(ancient))
            console.log(allSortedCards)
        })
        container.append(card)

    })
}
renderAncients()
chooseDifficulty();
openCardsContainer();
function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5)
}
function fillThefirstStageArray(user) {
    let firstStageArray = [];
        for (let i = 0; i < user.firstStage.greenCards; i++) {
            firstStageArray.push(getSortedGreenCards(user).pop())
        }
        for (let i = 0; i < user.firstStage.blueCards; i++) {
            firstStageArray.push(getSortedBlueCards(user).pop())
        }
        for (let i = 0; i < user.firstStage.brownCards; i++) {
            firstStageArray.push(getSortedBrownCards(user).pop())
        }
    shuffleArray(firstStageArray)
    return firstStageArray
}
function fillThesecondStageArray(user) {
    let secondStageArray = [];
        for (let i = 0; i < user.secondStage.greenCards; i++) {
            secondStageArray.push(getSortedGreenCards(user).pop())
        }
        for (let i = 0; i < user.secondStage.blueCards; i++) {
            secondStageArray.push(getSortedBlueCards(user).pop())
        }
        for (let i = 0; i < user.secondStage.brownCards; i++) {
            secondStageArray.push(getSortedBrownCards(user).pop())
        }  
    shuffleArray(secondStageArray)
    return secondStageArray
}
function fillThethirdStageArray(user) {
    let thirdStageArray = [];
    for (let i = 0; i < user.thirdStage.greenCards; i++) {
        thirdStageArray.push(getSortedGreenCards(user).pop())
    }
    for (let i = 0; i < user.thirdStage.blueCards; i++) {
        thirdStageArray.push(getSortedBlueCards(user).pop())
    }
    for (let i = 0; i < user.thirdStage.brownCards; i++) {
        thirdStageArray.push(getSortedBrownCards(user).pop())
    }
    shuffleArray(thirdStageArray)
    return thirdStageArray
}


let bgNum = 0

cardContainer.addEventListener('click', () => {

    if (bgNum != allSortedCards.length) {
        currentCard.classList.remove('hidden')
        const img = new Image();
        img.src = allSortedCards[bgNum].src
        img.onload = () => {
            currentCard.style.backgroundImage = `url(${img.src})`;
        }
    }
    bgNum++;
})

// function renderTracker() {
//     const tracker1 = document.querySelector('.first_stage__tracker');
//     fillThefirstStageArray(ancient).forEach((ancient) => {
//         const trackerNumber = document.createElement('div');
//         trackerNumber.classList.add('tracker_number');
//         trackerNumber.textContent = fillThefirstStageArray(ancient)[index].title;
//         li.id = index;
//         trackerNumber.style.backgroundImage = `url(${ancient.cardFace})`;
//     })
// }