const ancientsData = [
  {
    id: 'azathoth',
    name: 'azathoth',
    cardFace: '../assets/Ancients/Azathoth.png',
    firstStage: {
      greenCards: 1,
      blueCards: 1,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 2,
      blueCards: 1,
      brownCards: 3,
    },
    thirdStage: {
      greenCards: 2,
      blueCards: 0,
      brownCards: 4,
    },
  },
  {
    id: 'cthulhu',
    name: 'cthulhu',
    cardFace: '../assets/Ancients/Cthulthu.png',
    firstStage: {
      greenCards: 0,
      blueCards: 2,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 1,
      blueCards: 0,
      brownCards: 3,
    },
    thirdStage: {
      greenCards: 3,
      blueCards: 0,
      brownCards: 4,
    },
  },
  {
    id: 'iogSothoth',
    name: 'iogSothoth',
    cardFace: '../assets/Ancients/IogSothoth.png',
    firstStage: {
      greenCards: 0,
      blueCards: 1,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 2,
      blueCards: 1,
      brownCards: 3,
    },
    thirdStage: {
      greenCards: 3,
      blueCards: 0,
      brownCards: 4,
    },
  },
  {
    id: 'shubNiggurath',
    name: 'shubNiggurath',
    cardFace: '../assets/Ancients/ShubNiggurath.png',
    firstStage: {
      greenCards: 1,
      blueCards: 1,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 3,
      blueCards: 1,
      brownCards: 2,
    },
    thirdStage: {
      greenCards: 2,
      blueCards: 0,
      brownCards: 4,
    },
  },
]

const ancientsCard = document.querySelectorAll('.ancients_card');


export function getCardsSum(user, colorCard) {
  return user.firstStage[colorCard] + user.secondStage[colorCard] + user.thirdStage[colorCard];
}

export function openDifficulties() {
  const difficulties = document.querySelector('.difficulty_container');
  difficulties.classList.remove('hidden')
}

export function chooseAncient() {
  for (let i = 0; i < ancientsCard.length; i++) {
    const btn = ancientsCard[i];
    btn.addEventListener('click', openDifficulties)
  }
}

export default ancientsData