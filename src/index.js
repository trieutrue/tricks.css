import "./styles/reset.scss";
import "./styles/nav.scss";
import "./styles/animations.scss";
import "./styles/index.scss";

const text = "Tricks"

const typewriter = (txt) => {
  if (i < txt.length) {
    document.getElementById("logo").innerHTML += txt[i]
    i++;
    setTimeout(typeWriter, 250)
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typewriter(text)
})