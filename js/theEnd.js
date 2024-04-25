class endScreen {

    constructor(gameSize, gameScreen) {

        this.gameSize = gameSize
        this.gameScreen = gameScreen

        this.endSize = {
            w: 300,
            h: 500,
        }

        this.endPos = {
            left: 400,
            top: 350
        }

        this.backgroundImage = backgroundImage

        this.init()
    }


    init() {

        this.endScreen = document.createElement('div');
        this.endScreen.style.position = "absolute"
        this.endScreen.style.backgroundColor = '#0097B2'
        this.endScreen.style.backgroundImage = `url(${this.backgroundImage})`
        //this.oneStepSquare.style.backgroundSize = ""
        this.endScreen.style.backgroundPosition = "center"
        this.endScreen.style.backgroundRepeat = "no-repeat"

        this.endScreen.style.width = `${this.stepSquareSize.w}px`
        this.endScreen.style.height = `${this.stepSquareSize.h}px`
        this.endScreen.style.left = `${this.stepSquarePos.left}px`
        this.endScreen.style.top = `${this.stepSquarePos.top}px`
        this.endScreen.style.zIndex = "14"

        document.querySelector('#panel').appendChild(this.diceOne)
    }
}