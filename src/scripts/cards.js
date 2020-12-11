const toggleTransform = e => {
  debugger
  const { firstElementChild } = e.currentTarget
  if (!firstElementChild.style.transform) {
    firstElementChild.style.transform = "rotateY(-180deg)"
  } else {
    firstElementChild.style.transform = ""
  }
}

//Add event listener to each card for flip animation
const cards = document.getElementsByClassName("card-flip")
for (let i = 0; i < cards.length; i++) {
  const card = cards[i];
  card.addEventListener("click", toggleTransform)
}