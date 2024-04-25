class endScreen {

    constructor(gameSize, gameScreen, leftValue, topValue) {

        this.gameSize = gameSize
        this.gameScreen = gameScreen

        this.endSize = {
            w: 300,
            h: 500,
        }

        this.endPos = {
            left: leftValue,
            top: topValue
        }

        this.init()
    }


    init() {

        this.oneStepSquare = document.createElement('div');
        this.oneStepSquare.style.position = "absolute"
        this.oneStepSquare.style.backgroundColor = '#0097B2'
        this.oneStepSquare.style.backgroundImage = `url(${this.backgroundImage})`
        this.oneStepSquare.style.backgroundSize = "60%"
        this.oneStepSquare.style.backgroundPosition = "center"
        this.oneStepSquare.style.backgroundRepeat = "no-repeat"
        this.oneStepSquare.style.borderRadius = `5px`

        this.oneStepSquare.style.width = `${this.stepSquareSize.w}px`
        this.oneStepSquare.style.height = `${this.stepSquareSize.h}px`
        this.oneStepSquare.style.left = `${this.stepSquarePos.left}px`
        this.oneStepSquare.style.top = `${this.stepSquarePos.top}px`
        this.oneStepSquare.style.zIndex = "10"

        document.querySelector('#controls').appendChild(this.diceOne)
    }
}