class CardGame {
    constructor() {
        this.container = document.getElementById("gameGrid");
        this.cards = [];
        this.flippedCards = [];
        this.matches = 0;
        this.totalPairs = 8;
        this.bonusPoints = 0;
        this.gameStarted = false;
        this.init();
    }

    init() {
        this.createCards();
        this.shuffleCards();
        this.renderCards();
        this.addEventListeners();
    }

    createCards() {
        const symbols = ["⭐", "🔑", "💰", "🌟", "⭐", "🔑", "💰", "🌟"];
        symbols.forEach(symbol => {
            this.cards.push({ symbol, matched: false });
            this.cards.push({ symbol, matched: false });
        });
    }

    shuffleCards() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    renderCards() {
        this.container.innerHTML = "";
        this.cards.forEach((card, index) => {
            const element = document.createElement("div");
            element.className = "card";
            element.dataset.index = index;
            element.textContent = "";
            this.container.appendChild(element);
        });
    }

    addEventListeners() {
        document.querySelectorAll(".card").forEach(card => {
            card.addEventListener("click", () => this.flipCard(card));
        });
    }

    flipCard(cardElement) {
        if (!this.gameStarted) {
            this.gameStarted = true;
            this.startTime = Date.now();
        }

        const index = parseInt(cardElement.dataset.index);
        const card = this.cards[index];
        
        if (cardElement.classList.contains("flipped") || card.matched) return;

        cardElement.classList.add("flipped");
        cardElement.textContent = card.symbol;

        this.flippedCards.push({ element: cardElement, card: card });

        if (this.flippedCards.length === 2) {
            this.checkMatch();
        }
    }

    checkMatch() {
        const [first, second] = this.flippedCards;
        
        if (first.card.symbol === second.card.symbol) {
            first.element.classList.add("matched");
            second.element.classList.add("matched");
            first.card.matched = true;
            second.card.matched = true;
            this.matches++;
            this.bonusPoints += 100;
            
            if (this.matches === this.totalPairs) {
                const endTime = Date.now();
                const timeTaken = (endTime - this.startTime) / 1000;
                alert(`Congratulations! You found all matches in ${timeTaken.toFixed(1)} seconds!
Bonus Points: ${this.bonusPoints}`);
            }
        } else {
            setTimeout(() => {
                first.element.classList.remove("flipped");
                second.element.classList.remove("flipped");
                first.element.textContent = "";
                second.element.textContent = "";
            }, 1000);
        }

        this.flippedCards = [];
    }

    resetGame() {
        this.matches = 0;
        this.bonusPoints = 0;
        this.gameStarted = false;
        this.startTime = null;
        this.cards.forEach(card => card.matched = false);
        this.shuffleCards();
        this.renderCards();
        this.addEventListeners();
    }
}

// Initialize game when page loads
document.addEventListener("DOMContentLoaded", () => {
    new CardGame();
});
