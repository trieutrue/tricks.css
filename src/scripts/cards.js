//Fetch cards when DOM is loaded
// document.addEventListener("DOMContentLoaded", (e) => {
//   fetch("https://api.pokemontcg.io/v1/cards")
//     .then(res => res.json())
//     .then(data => {
//       const { cards } = data
//       cards.forEach(card => {
//         const img = document.createElement('img')
//         debugger
//         img
//       })
//       console.log(data)
//     })

// })




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