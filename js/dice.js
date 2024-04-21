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

        this.rootImgDice = "../img/dungeon.jpg"

        // function randomNumberDice() {
        //     let randomNumber = Math.random()
        //     let randomScaled = randomNumber * 6
        //     let randomRound = Math.floor(randomScaled)
        //     return randomRound
        // }

        this.init()
    }

    init() {
        this.diceOne = document.createElement('div')
        this.diceOne.style.position = "absolute"
        this.diceOne.style.backgroundColor = 'blue'

        this.diceOne.style.backgroundImage = `url(${this.rootImgDice})`
        this.diceOne.style.backgroundSize = "cover"
        this.diceOne.style.backgroundPosition = "center"
        this.diceOne.style.backgroundRepeat = "no-repeat"

        this.diceOne.style.width = `${this.diceSize.w}px`
        this.diceOne.style.height = `${this.diceSize.h}px`
        this.diceOne.style.left = `${this.dicePos.left}px`
        this.diceOne.style.top = `${this.dicePos.top}px`

        document.querySelector('#game-screen').appendChild(this.diceOne)
    }

}


// const a_imgDice = [] //index 6

// function diceRolling(rollNum) {
//     for (let i = 1; i <= rollNum; i++) {

//         let randomIndexDice = 0
//         Math.random()

//     }
// }