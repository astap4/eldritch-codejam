import {getBlueNum} from '../../../data/ancients.js'
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
let newBlueCards = [];
let max = blueCards.length;
function getRandomInt() {
  return Math.floor(Math.random() * max);
}
function getNumfromBlueCards() {
  while (newBlueCards.length != getBlueNum('shubNiggurath')) {
    let n = getRandomInt()
    newBlueCards.push(blueCards[n])
    newBlueCards = [...new Set(newBlueCards)]
  }
  return newBlueCards
}
getNumfromBlueCards()
console.log('newBlueCards', newBlueCards)
export default blueCards