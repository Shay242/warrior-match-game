let clickedCard = null;
let preventClick = false;
let canPlayGame = false;
let combosFound = 0;

const colors = [
  "blue",
  "yellow",
  "red",
  "teal",
  "white",
  "gray",
  "green",
  "orange",
];

const cards = [...document.querySelectorAll(".card")];
for (let color of colors) {
  const cardAIndex = parseInt(Math.random() * cards.length);
  const cardA = cards[cardAIndex];
  cards.splice(cardAIndex, 1);
  cardA.className += ` ${color}`;
  cardA.setAttribute("data-color", color);

  const cardBIndex = parseInt(Math.random() * cards.length);
  const cardB = cards[cardBIndex];
  cards.splice(cardBIndex, 1);
  cardB.className += ` ${color}`;
  cardB.setAttribute("data-color", color);
}


// startButton.addEventListener('click', startGame)


function startGame() {
  preventClick = true;
  const time = document.getElementById("time");
  let min = 60;
  setInterval(() => {
     if (min !== -1) {
       time.innerHTML = `Time: ${min}`;
       min--;
       setTimeout(function () {
         alert("Game Over! You Lose!");
       }, 60000);
     }
  }, 1000);
}

function resetGame() {
  window.location.reload();
}




function onCardClicked(e) {
  const target = e.currentTarget;
  if (preventClick == true) {
    if (
      preventClick ||
      target === clickedCard ||
      target.className.includes("done")
    ) {
      return;
    }

    target.className = target.className.replace("color-hidden", "").trim();
    target.className += " done";

    if (!clickedCard) {
      // if card has not been clicked, keep track of card, display it's color
      clickedCard = target;
    } else if (clickedCard) {
      // if we have clicked a card, check to see if new card matches the old card color
      if (
        clickedCard.getAttribute("data-color") !==
        target.getAttribute("data-color")
      ) {
        preventClick = true;
        setTimeout(() => {
          clickedCard.className =
            clickedCard.className.replace("done", "").trim() + "color-hidden";
          target.className =
            target.className.replace("done", "").trim() + "color-hidden";
          clickedCard = null;
          preventClick = false;
        }, 500);
      } else {
        combosFound++;
        clickedCard = null;
        if (combosFound === 8) {
          alert("Fantastic You beat the Warriors");
          window.location.reload;
        }
      }
    }
  }else {

  }
}
