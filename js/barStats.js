class BarStats {

    constructor(gameSize, gameScreen, barType, barColor, top) {

        this.gameSize = gameSize
        this.gameScreen = gameScreen

        this.barSize = {
            w: 835,
            h: 15
        }

        this.barPosition = {
            left: 250,
            top: top,
        }

        this.barColor = barColor

        this.barType = barType

        this.currentWidth = 60

        // this.titleBar = titleBar

        this.init()

    }

    init() {


        this.bar = document.createElement('div')
        this.bar.style.position = "absolute"
        this.bar.style.backgroundColor = this.barColor


        this.bar.style.width = `${this.barSize.w}px`
        this.bar.style.height = `${this.barSize.h}px`
        this.bar.style.borderRadius = `10px`

        this.bar.style.left = `${this.barPosition.left}px`
        this.bar.style.top = `${this.barPosition.top}px`
        this.bar.style.zIndex = "13"


        document.querySelector('#panel').appendChild(this.bar)

    }

    updateBar(damage) {
        this.currentWidth -= damage
        if (this.currentWidth > 60) {
            this.currentWidth = 60
        }
        if (damage <= this.currentWidth) {
            this.currentWidth -= damage
        } else if (damage > this.currentWidth) {
            this.currentWidth = 0
        }
        this.bar.style.width = `${this.currentWidth}%`
    }

    updateMana() {
        this.currentWidth += 4
        if (this.currentWidth > 60) {
            this.currentWidth = 60
        }
        this.bar.style.width = `${this.currentWidth}%`
    }
}
