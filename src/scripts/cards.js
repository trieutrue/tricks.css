const appendCards = ({ cards }) => {
  const cardsPage = document.getElementsByClassName("scroll-menu")[0]
  cards.forEach((card, idx) => createCard(card, cardsPage, idx))
}

const createCard = (card, page, idx) => {
  const cardFlip = document.createElement('div')
  cardFlip.classList.add('card-flip')
  cardFlip.setAttribute("data-order", idx)
  const inner = document.createElement('div')
  inner.classList.add('card-inner')
  const front = document.createElement('div')
  front.classList.add('card-front')
  const back = document.createElement('div')
  back.classList.add('card-back')
  const img = document.createElement('img')

  img.setAttribute("src", card.imageUrl)
  back.append(img)
  inner.append(front, back)
  cardFlip.append(inner)
  cardFlip.style.left = `${idx * 150}px`
  cardFlip.addEventListener("click", toggleTransform)
  cardFlip.addEventListener("mouseover", moveCards)
  cardFlip.addEventListener("mouseout", moveCards)
  page.append(cardFlip)
}

//Fetch squirtle cards when DOM is loaded
document.addEventListener("DOMContentLoaded", (e) => {
  fetch("https://api.pokemontcg.io/v1/cards?name=squirtle")
  .then(res => res.json())
  .then(data => appendCards(data))
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

const moveCards = e => {
  debugger
  const order = parseInt(e.currentTarget.dataset["order"]) + 1;
  const cards = document.getElementsByClassName('card-flip');

  for (let i = order; i < cards.length - 1; i++) {
    const card = cards[i];
    let left = parseInt(card.style.left.slice(0, -2))
    if (e.type === "mouseout") {
      card.animate({ left: [`${left}px`, `${left-100}px`] })
      left -= 100
    }
    if (e.type === "mouseover") {
      card.animate({ left: [`${left}px`, `${left + 100}px`] })
      left += 100
    }
    card.style.left = `${left}px`
  }
}