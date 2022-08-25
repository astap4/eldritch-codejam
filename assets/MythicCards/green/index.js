import {getGreenNum} from '../../../data/ancients.js'
const greenCards = [
  {
    src: '../assets/MythicCards/green/green1.png',
    id: 'normal'
  },
  {
    src: '../assets/MythicCards/green/green2.png',
    id: 'normal'
  },
  {
    src: '../assets/MythicCards/green/green3.png',
    id: 'normal'
  },
  {
    src: '../assets/MythicCards/green/green4.png',
    id: 'normal'
  },
  {
    src: '../assets/MythicCards/green/green5.png',
    id: 'normal'
  },
  {
    src: '../assets/MythicCards/green/green6.png',
    id: 'hard'
  },
  {
    src: '../assets/MythicCards/green/green7.png',
    id: 'hard'
  },
  {
    src: '../assets/MythicCards/green/green8.png',
    id: 'hard'
  },
  {
    src: '../assets/MythicCards/green/green9.png',
    id: 'hard'
  },
  {
    src: '../assets/MythicCards/green/green10.png',
    id: 'hard'
  },
  {
    src: '../assets/MythicCards/green/green11.png',
    id: 'easy'
  },
  {
    src: '../assets/MythicCards/green/green12.png',
    id: 'easy'
  },
  {
    src: '../assets/MythicCards/green/green13.png',
    id: 'easy'
  },
  {
    src: '../assets/MythicCards/green/green14.png',
    id: 'easy'
  },
  {
    src: '../assets/MythicCards/green/green15.png',
    id: 'normal'
  },
  {
    src: '../assets/MythicCards/green/green16.png',
    id: 'normal'
  },
  {
    src: '../assets/MythicCards/green/green17.png',
    id: 'normal'
  },
  {
    src: '../assets/MythicCards/green/green18.png',
    id: 'normal'
  },
];
let newGreenCards = [];
let max = greenCards.length;
function getRandomInt() {
  return Math.floor(Math.random() * max);
}
function getNumfromGreenCards() {
  while (newGreenCards.length != getGreenNum('shubNiggurath')) {
    let n = getRandomInt()
    newGreenCards.push(greenCards[n])
    newGreenCards = [...new Set(newGreenCards)]
  }
  return newGreenCards
}
getNumfromGreenCards()
console.log('newGreenCards', newGreenCards)
export default greenCards;