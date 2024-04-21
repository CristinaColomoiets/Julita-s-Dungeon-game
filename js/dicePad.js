class DicePad {

    constructor(gameSize, gameScreen, leftValue, topValue) {

        this.gameSize = gameSize
        this.gameScreen = gameScreen

        this.dicePadSize = {
            w: 200,
            h: 200,
        }

        this.dicePadPos = {
            left: leftValue,
            top: topValue
        }

        this.dicePadImg = undefined
        this.init()

    }


    init() {
        this.dicePadOne = document.createElement('div')
        this.dicePadOne.style.position = "absolute"
        this.dicePadOne.style.backgroundColor = 'purple'
        this.dicePadOne.style.borderRadius = `100px`

        this.dicePadOne.style.backgroundImage = `url(${this.dicePadImg})`
        this.dicePadOne.style.backgroundSize = "cover"
        this.dicePadOne.style.backgroundPosition = "center"
        this.dicePadOne.style.backgroundRepeat = "no-repeat"

        this.dicePadOne.style.width = `${this.dicePadSize.w}px`
        this.dicePadOne.style.height = `${this.dicePadSize.h}px`
        this.dicePadOne.style.left = `${this.dicePadPos.left}px`
        this.dicePadOne.style.top = `${this.dicePadPos.top}px`

        document.querySelector('#game-screen').appendChild(this.dicePadOne)
    }


}