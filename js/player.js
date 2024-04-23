class Player {

    constructor(gameSize, gameScreen, leftValue, topValue) {

        this.gameSize = gameSize
        this.gameScreen = gameScreen

        this.playerSize = {
            w: 30,
            h: 65,
        }

        this.playerPos = {
            left: leftValue,
            top: topValue,
        }

        this.playerImg = undefined

        this.init()

    }


    init() {
        this.playerOne = document.createElement('div')
        this.playerOne.style.position = "absolute"
        this.playerOne.style.backgroundColor = 'purple'

        this.playerOne.style.backgroundImage = `url(${this.playerImg})`
        this.playerOne.style.backgroundSize = "cover"
        this.playerOne.style.backgroundPosition = "center"
        this.playerOne.style.backgroundRepeat = "no-repeat"

        this.playerOne.style.width = `${this.playerSize.w}px`
        this.playerOne.style.height = `${this.playerSize.h}px`
        this.playerOne.style.left = `${this.playerPos.left}px`
        this.playerOne.style.top = `${this.playerPos.top}px`
        this.playerOne.style.zIndex = "12"


        document.querySelector('#panel').appendChild(this.playerOne)
    }

    updatePosition(positionL, positionT) {
        this.playerOne.style.left = `${positionL}px`
        this.playerOne.style.top = `${positionT}px`

    }

    moveToSquare(targetSquare) {
        console.log('DEBEMOS MOVERLA A EST SQUARE', targetSquare)
    }

    //updatePosition returns the new position in the array

}