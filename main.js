let clickedCard = null;
let preventClick = false;
let combosFound = 0;

function onCardClicked(e) {
  const target = e.currentTarget;

  if (
    preventClick ||
    target === clickedCard ||
    target.className.includes('done')
  ) {
      return;
  }

  target.className = target.className
    .replace('color-hidden', '')
    .trim();
  target.className += ' done';

  if (!clickedCard) {
      // if card has not been clicked, keep track of card, display it's color
      clickedCard = target;
  }   else if (clickedCard) {
      // if we have clicked a card, check to see if new card matches the old card color
      if (
        clickedCard.getAttribute('data-color') !==
        target.getAttribute('data-color')
      ) {
        preventClick = true;
        setTimeout(() => {
            clickedCard.className =
            clickedCard.className.replace('done', '').trim() +
            'color-hidden';
            target.className =
            target.className.replace('done', '').trim() +
            'color-hidden';
            clickedCard = null;
            preventClick = false;
        }, 500);
     } else {
         combosFound++;
            clickedCard = null;
            if (combosFound === 8) {
                alert ('Fantastic You beat the Warriors');
            }
        }
    }
}