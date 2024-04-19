const Game = {
    gameScreen: document.querySelector('#game-screen'),
    gameSize: {
        width: window.innerWidth,
        heigt: window.innerHeight,
    },

    init() {
        this.setGameScreenSize();
    },
    setGameScreenSize() {
        this.gameScreen.style.width = `${this.gameSize.width}px`;
        this.gameScreen.style.heigt = `${this.gameSize.heigt}px`;
    },

    createElement() {
        new GameBox(this.gameSize);
    }
}