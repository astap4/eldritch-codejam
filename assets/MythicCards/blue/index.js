import {getCardsSum} from '../../../data/ancients.js'
const blueCards = [
  {
    src: '../assets/MythicCards/blue/blue1.png',
    id: 'hard'},
  {
    src: '../assets/MythicCards/blue/blue2.png',
    id: 'hard'},
  {
    src: '../assets/MythicCards/blue/blue3.png',
    id: 'easy'},
  {
    src: '../assets/MythicCards/blue/blue4.png',
    id: 'easy'},
  {
    src: '../assets/MythicCards/blue/blue5.png',
    id: 'easy'},
  {
    src: '../assets/MythicCards/blue/blue6.png',
    id: 'hard'},
  {
    src: '../assets/MythicCards/blue/blue7.png',
    id: 'normal'},
  {
    src: '../assets/MythicCards/blue/blue8.png',
    id: 'hard'},
  {
    src: '../assets/MythicCards/blue/blue9.png',
    id: 'normal'},
  {
    src: '../assets/MythicCards/blue/blue10.png',
    id: 'easy'},
  {
    src: '../assets/MythicCards/blue/blue11.png',
    id: 'normal'},
  {
    src: '../assets/MythicCards/blue/blue12.png',
    id: 'normal'}
]

function getRandomInt() {
  return Math.floor(Math.random() * blueCards.length);
}
export function getSortedBlueCards(user) {
  let newBlueCards = [];
  while (newBlueCards.length != getCardsSum(user, 'blueCards')) {
    newBlueCards.push(blueCards[getRandomInt()])
    newBlueCards = [...new Set(newBlueCards)]
  }
  return newBlueCards
}

export default blueCards