import "./styles/index.scss";

const text = "Tricks"

// const typewriter = (txt) => {
//   if (i < txt.length) {
//     document.getElementById("logo").innerHTML += txt[i]
//     i++;
//     setTimeout(typeWriter, 250)
//   }
// }

// document.addEventListener("DOMContentLoaded", () => {
//   typewriter(text)
// })



//Side-Nav click handler
//Save ref to current section?
//set current section height animation to 0%
//set next section height animation to 100
const resetSelectedAttribute = () => {
  const btns = document.getElementsByClassName("circle-btn")
  const pages = document.getElementsByClassName("scroll-page")

  for (let i = 0; i < btns.length; i++) {
    const btn = btns[i];
    const page = pages[i];
    if(Boolean(btn.attributes["selected"].value)) btn.attributes["selected"].value = ""
    if(Boolean(page.attributes["selected"].value)) {
      page.attributes["selected"].value = ""
    }
  }
}


const handlePages = e => {
  e.preventDefault();
  const { selected, href } = e.currentTarget.attributes
  if (Boolean(selected.value)) return

  debugger
  resetSelectedAttribute()
  const page = document.getElementById(href.value)
  page.attributes["selected"].value = true
  switch (href.value) {
    case "splash":
      page.animate({ bottom: ["100%", 0] }, 600)
      break
    case "cards":
      page.animate({ 
        top: ["100%", 0],
        height: [0, "100%"]
    }, 600)
      break
  }
  selected.value = true
}

//Add event listener to each <a> tag
const scrollLinks = document.getElementById("side-nav").querySelectorAll("div")
for (let i = 0; i < scrollLinks.length; i++) {
  const element = scrollLinks[i];
  element.addEventListener("click", handlePages)
}