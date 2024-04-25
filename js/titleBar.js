class TitleBar {

    constructor(gameSize, gameScreen, top, txt) {

        this.gameSize = gameSize
        this.gameScreen = gameScreen

        this.titleSize = {
            w: 40,
            h: 20
        }

        this.titlePos = {
            left: 200,
            top: top,
        }

        this.titleTxt = txt

        this.init()

    }

    init() {
        this.containerTitle = document.createElement('div')
        this.container.style.backgroundColor = 'red'
        this.containerTitle.style.position = "absolute"

        this.txtTitle = document.createElement('p')
        this.txtTitle.innerText = txt
        this.txtTitle.color = 'white'
        this.txtTitle.fontSize = '20px'
        this.txtTitle.style.textShadow = '8px 8px 8px rgba(0, 0, 0, 0.5)'
        this.txtTitle.style.width = `${this.titleSize.w}px`
        this.txtTitle.style.height = `${this.titleSize.h}px`
        this.txtTitle.style.left = `${this.titlePos.left}px`
        this.txtTitle.style.top = `${this.titlePos.top}px`
        this.txtTitle.style.zIndex = "14"

        this.container.appendChild(txtTitle)


        document.querySelector('#panel').appendChild(this.containerTitle)
    }

}