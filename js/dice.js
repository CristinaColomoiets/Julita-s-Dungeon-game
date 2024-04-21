class Dice {

    constructor(gameSize, gameScreen, leftValue, topValue) {

        this.gameSize = gameSize
        this.gameScreen = gameScreen

        this.diceSize = {
            w: 80,
            h: 80,
        }

        this.dicePos = {
            left: leftValue,
            top: topValue
        }

        this.init()

    }


    init() {
        this.diceOne = document.createElement('div')
        this.diceOne.style.position = "absolute"
        this.diceOne.style.backgroundColor = 'blue'

        this.diceOne.style.width = `${this.diceSize.w}px`
        this.diceOne.style.height = `${this.diceSize.h}px`
        this.diceOne.style.left = `${this.dicePos.left}px`
        this.diceOne.style.top = `${this.dicePos.top}px`


        document.querySelector('#game-screen').appendChild(this.diceOne)
    }

}