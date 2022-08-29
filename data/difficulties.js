const difficulties = [
  {
    id: 'easy',
    name: 'Низкая'
  },
  {
    id: 'normal',
    name: 'Средняя'
  },
  {
    id: 'hard',
    name: 'Высокая'
  },
]
const easyButton = document.querySelector('.easy')
const normalButton = document.querySelector('.normal')
const difficultButton = document.querySelector('.difficult')
const shuffleCards = document.querySelector('.shuffle_cards')
const buttons = document.querySelectorAll('.difficulty_button');

function openShuffleCards() {
  shuffleCards.classList.remove('hidden')
}

export function chooseDifficulty() {
  for (let i = 0; i < buttons.length; i++) {
    const btn = buttons[i];
    btn.addEventListener('click', openShuffleCards)
  }
}

export function openCardsContainer() {
  shuffleCards.addEventListener('click', () => {
    const cardContainer = document.querySelector('.card-container')
    cardContainer.classList.remove('hidden')
  })
}