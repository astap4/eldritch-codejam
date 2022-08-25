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

export function getGreenNum(name) {
  const user = ancientsData.find((user) => user.name === name);
  return user.firstStage.greenCards + user.secondStage.greenCards + user.thirdStage.greenCards;
}
export function getBlueNum(name) {
  const user = ancientsData.find((user) => user.name === name);
  return user.firstStage.blueCards + user.secondStage.blueCards + user.thirdStage.blueCards;
}
export function getBrownNum(name) {
  const user = ancientsData.find((user) => user.name === name);
  return user.firstStage.brownCards + user.secondStage.brownCards + user.thirdStage.brownCards;
}

console.log('getGreenNum', getGreenNum('shubNiggurath'));
console.log('getBlueNum', getBlueNum('shubNiggurath'));
console.log('getBrownNum', getBrownNum('shubNiggurath'));


export default ancientsData