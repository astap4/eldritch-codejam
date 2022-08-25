import {getBrownNum} from '../../../data/ancients.js'
const brownCards = [
  {
    src: '../assets/MythicCards/brown/brown1.png',
    id: 'normal'},
  {
    src: '../assets/MythicCards/brown/brown2.png',
    id: 'normal'},
  {
    src: '../assets/MythicCards/brown/brown3.png',
    id: 'normal'},
  {
    src: '../assets/MythicCards/brown/brown4.png',
    id: 'normal'},
  {
    src: '../assets/MythicCards/brown/brown5.png',
    id: 'normal'},
  {
    src: '../assets/MythicCards/brown/brown6.png',
    id: 'hard'},
  {
    src: '../assets/MythicCards/brown/brown7.png',
    id: 'hard'},
  {
    src: '../assets/MythicCards/brown/brown8.png',
    id: 'hard'},
  {
    src: '../assets/MythicCards/brown/brown9.png',
    id: 'hard'},
  {
    src: '../assets/MythicCards/brown/brown10.png',
    id: 'hard'},
  {
    src: '../assets/MythicCards/brown/brown11.png',
    id: 'easy'},
  {
    src: '../assets/MythicCards/brown/brown12.png',
    id: 'easy'},
  {
    src: '../assets/MythicCards/brown/brown13.png',
    id: 'easy'},
  {
    src: '../assets/MythicCards/brown/brown14.png',
    id: 'easy'},
  {
    src: '../assets/MythicCards/brown/brown15.png',
    id: 'normal'},
  {
    src: '../assets/MythicCards/brown/brown16.png',
    id: 'normal'},
  {
    src: '../assets/MythicCards/brown/brown17.png',
    id: 'normal'},
  {
    src: '../assets/MythicCards/brown/brown18.png',
    id: 'normal'},
  {
    src: '../assets/MythicCards/brown/brown19.png',
    id: 'normal'},
  {
    src: '../assets/MythicCards/brown/brown20.png',
    id: 'normal'},
  {
    src: '../assets/MythicCards/brown/brown21.png',
    id: 'easy'},
]
let newBrownCards = [];
let max = brownCards.length;
function getRandomInt() {
  return Math.floor(Math.random() * max);
}
function getNumfromBrownCards() {
  while (newBrownCards.length != getBrownNum('shubNiggurath')) {
    let n = getRandomInt()
    newBrownCards.push(brownCards[n])
    newBrownCards = [...new Set(newBrownCards)]
  }
  return newBrownCards
}
getNumfromBrownCards()
console.log('newBrownCards', newBrownCards)

export default brownCards