class Icon {

    constructor(gameSize, gameScreen, leftValue, topValue) {

        this.gameSize = gameSize
        this.gameScreen = gameScreen

        this.iconSize = {
            w: 200,
            h: 200,
        }

        this.iconPos = {
            left: leftValue,
            top: topValue
        }

        this.iconImage = '../img/julita.png'

        this.init()
    }


    init() {
        this.icon = document.createElement('div')
        this.icon.style.position = "absolute"

        this.icon.style.backgroundImage = `url(${this.iconImage})`
        this.icon.style.backgroundSize = "cover"
        this.icon.style.backgroundPosition = "center"
        this.icon.style.backgroundRepeat = "no-repeat"

        this.icon.style.width = `${this.iconSize.w}px`
        this.icon.style.height = `${this.iconSize.h}px`
        this.icon.style.left = `${this.iconPos.left}px`
        this.icon.style.top = `${this.iconPos.top}px`
        this.icon.style.zIndex = '14'

        document.querySelector('#controls').appendChild(this.icon)
    }
}