class SeaGame {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.timeRemaining = totalTime;
        this.countdown = null;
        this.cardClickCount = 0;
        this.busy = false;
        this.timer = document.getElementById('time-remaining')
        this.ticker = document.getElementById('flips');
        this.totalClicks = 0;
        this.ticker.innerText = this.totalClicks;
        this.cardToCheck = null;
        this.matchedCards = [];
    }
    startGame(){
        this.cardToCheck = null
        // this.shuffleCards(this.cardsArray);
        this.timeRemaining = this.totalTime;
        this.countdown = this.startCountdown();
        this.matchedCards = [];
        this.busy = true;
    }
    flipCard() {
        if(this.canFlipCard(card)) {
            this.totalClicks++;
            this.ticker.innerText = this.totalClicks;
            card.classList.add('visible');
            // if(this.cardToCheck) {
            //     this.checkForCardMatch(card);
            // } else {
            //     this.cardToCheck = card;
            // }
        }
    }
    shuffleCards() {
        for (let i = cardsArray.length - 1; i > 0; i--) {
            const randIndex = Math.floor(Math.random() * (i + 1));
            [cardsArray[i], cardsArray[randIndex]] = [cardsArray[randIndex], cardsArray[i]];
        }
        cardsArray = cardsArray.map((card, index) => {
            card.style.order = index;
        });
    }
    canFlipCard(card) {
        
        if(this.busy || this.matchedCards.includes(card) || card === this.cardToCheck)
            return false;
        return true;
    }
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('cards'));
    let game = new SeaGame(100, cards);

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame();
        });
    });
    cards.forEach(card => {
        card.addEventListener('click', () => {
            game.flipCard(card);
        });
    });
}

if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready());
} else {
    ready();
}