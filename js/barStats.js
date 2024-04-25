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
        // this.container = document.createElement('div')
        // this.container.style.display = 'flex'

        // this.txtBar = document.createElement('p')
        // this.txtBar.innerText = titleBar
        // this.txtBar.color = 'white'
        // this.txtBar.fontSize = '20px'
        // this.label.style.textShadow = '8px 8px 8px rgba(0, 0, 0, 0.5)'


        this.bar = document.createElement('div')
        this.bar.style.position = "absolute"
        this.bar.style.backgroundColor = this.barColor


        this.bar.style.width = `${this.barSize.w}px`
        this.bar.style.height = `${this.barSize.h}px`
        this.bar.style.borderRadius = `10px`

        this.bar.style.left = `${this.barPosition.left}px`
        this.bar.style.top = `${this.barPosition.top}px`
        this.bar.style.zIndex = "13"

        // this.container.appendChild(txtBar)
        // this.container.appendChild(bar)


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
        this.currentWidth += 3
        if (this.currentWidth > 60) {
            this.currentWidth = 60
        }
        this.bar.style.width = `${this.currentWidth}%`
    }
}
