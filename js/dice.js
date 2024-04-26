class Dice {

    constructor(gameSize, gameScreen, leftValue, topValue) {

        this.gameSize = gameSize
        this.gameScreen = gameScreen

        this.diceSize = {
            w: 120,
            h: 120,
        }

        this.dicePos = {
            left: leftValue,
            top: topValue
        }

        this.totalItems = 6
        this.currentNum = 0

        this.init()
    }


    init() {
        this.diceOne = document.createElement('div')
        this.diceOne.id = "dice"
        this.diceOne.style.position = "absolute"
        this.diceOne.style.backgroundImage = `url(./../img/diceImages/dice${this.currentNum + 1}.png)`
        this.diceOne.style.backgroundSize = "cover"
        this.diceOne.style.backgroundPosition = "center"
        this.diceOne.style.backgroundRepeat = "no-repeat"

        this.diceOne.style.width = `${this.diceSize.w}px`
        this.diceOne.style.height = `${this.diceSize.h}px`
        this.diceOne.style.left = `${this.dicePos.left}px`
        this.diceOne.style.top = `${this.dicePos.top}px`

        document.querySelector('#controls').appendChild(this.diceOne)
    }

    generateRandomDice() {
        this.currentNum = Math.floor(Math.random() * this.totalItems)
        this.updateImage()
    }

    updateImage() {
        this.diceOne.style.backgroundImage = `url(../img/diceImages/dice${this.currentNum + 1}.png)`
    }
}
