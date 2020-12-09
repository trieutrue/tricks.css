import "./styles/reset.scss";
import "./styles/nav.scss";
import "./styles/animations.scss";
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
const handleHashLinks = e => {
  e.preventDefault();
  debugger
  const { toggleAttribute, attributes } = e.target
  if (Boolean(attributes["selected"].value)) return

  attributes["selected"] = true
  document.getElementById(e.currentTarget.hash.slice(1))
    .animate({ top: ["100%", 0] }, 600)
}

//Add event listener to each <a> tag
const scrollLinks = document.getElementById("side-nav").querySelectorAll("a")
for (let i = 0; i < scrollLinks.length; i++) {
  const element = scrollLinks[i];
  element.addEventListener("click", handleHashLinks)
}