class TitleBar {

    constructor(gameSize, gameScreen, top, txt) {

        this.gameSize = gameSize
        this.gameScreen = gameScreen

        this.titleSize = {
            w: 100,
        }

        this.titlePos = {
            left: 150,
            top: top,
        }

        this.txt = txt

        this.init()

    }

    init() {
        this.containerTitle = document.createElement('div')
        this.containerTitle.style.backgroundColor = 'green'
        this.containerTitle.style.position = "absolute"
        this.containerTitle.style.width = `${this.titleSize.w}px`

        this.containerTitle.style.left = `${this.titlePos.left}px`
        this.containerTitle.style.top = `${this.titlePos.top}px`

        this.txtTitle = document.createElement('p')
        this.txtTitle.color = 'white'
        this.txtTitle.fontWeight = '600'
        this.txtTitle.style.textShadow = '8px 8px 8px rgba(0, 0, 0, 0.5)'
        this.txtTitle.style.zIndex = "14"
        this.txtTitle.innerText = this.txt

        this.containerTitle.appendChild(this.txtTitle)

        document.querySelector('#panel').appendChild(this.containerTitle)
    }

}