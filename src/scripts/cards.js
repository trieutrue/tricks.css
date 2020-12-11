const appendCards = ({ cards }) => {
  const cardsPage = document.getElementsByClassName("scroll-menu")[0]
  debugger
  cards.forEach(card => createCard(card, cardsPage))
}

const createCard = (card, page) => {
  const cardFlip = document.createElement('div')
  cardFlip.classList.add('card-flip')
  const inner = document.createElement('div')
  inner.classList.add('card-inner')
  const front = document.createElement('div')
  front.classList.add('card-front')
  const back = document.createElement('div')
  back.classList.add('card-back')
  const img = document.createElement('img')
  debugger

  img.setAttribute("src", card.imageUrl)
  back.append(img)
  inner.append(front, back)
  cardFlip.append(inner)
  cardFlip.addEventListener("click", toggleTransform)
  page.append(cardFlip)
}

//Fetch squirtle cards when DOM is loaded
document.addEventListener("DOMContentLoaded", (e) => {
  fetch("https://api.pokemontcg.io/v1/cards?name=squirtle")
    .then(res => res.json())
    .then(data => appendCards(data))

    //Add event listener to each card for flip animation
    // const cards = document.getElementsByClassName("card-flip")
    // for (let i = 0; i < cards.length; i++) {
    //   const card = cards[i];
    //   card.addEventListener("click", toggleTransform)
    // }
})


const toggleTransform = e => {
  debugger
  const { firstElementChild } = e.currentTarget
  if (!firstElementChild.style.transform) {
    firstElementChild.style.transform = "rotateY(-180deg)"
  } else {
    firstElementChild.style.transform = ""
  }
}


