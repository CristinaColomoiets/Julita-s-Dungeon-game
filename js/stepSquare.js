class StepSquare {

    constructor(gameSize, leftValue, topValue, typeSquare, backgroundImage, sizeType = 'standard') {

        this.gameSize = gameSize

        this.stepSquarePos = {
            left: leftValue,
            top: topValue
        }

        this.typeSquare = typeSquare

        this.stepSquareSize = {
            w: sizeType === 'standard' ? 75 : 150,
            h: sizeType === 'standard' ? 75 : 150
        }

        this.sizeType = sizeType

        this.backgroundImage = backgroundImage

        this.init()
    }

    init() {

        this.oneStepSquare = document.createElement('div');
        this.oneStepSquare.style.position = "absolute"
        this.oneStepSquare.style.backgroundColor = '#392F69'
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


        document.querySelector('#panel').appendChild(this.oneStepSquare)
    }
}