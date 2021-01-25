Array.prototype.shuffle = function() {
  for (let i = this.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [this[i], this[j]] = [this[j], this[i]];
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const QUOTES = document.getElementsByClassName("quote"),
        opts = { fadeTime: 1000 };
  let next = 0,
      active= 0;

  const fadeInQuote = quoteNumber => {
    const quote = QUOTES[quoteNumber]
    quote.animate({opacity: [0, "100%"]}, 1000)
    setTimeout(quote.style.display = "block", 2000)
  }

  const fadeOutQuote = quoteNumber => {
    const quote = QUOTES[quoteNumber]
    quote.animate({ opacity: ["100%", 0]}, 1000)
    setTimeout(quote.style.display = "none", 2000)
  }

  const switchToNextQuote = nextQuoteNumber => {
    const old = active
    
    fadeInQuote(nextQuoteNumber);
    fadeOutQuote(old);
    
    active = nextQuoteNumber
  }

  for (let i = 1; i < QUOTES.length; i++) {
    const quote = QUOTES[i];
    quote.style.display = "none";
  }

  setInterval(() => {
    next = (active + 1) % QUOTES.length;
    switchToNextQuote(next);
  }, 6000);
})