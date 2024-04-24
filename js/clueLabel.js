class ClueLabel {

    constructor(gameSize, gameScreen, leftValue, topValue) {

        this.gameSize = gameSize
        this.gameScreen = gameScreen

        this.labelSize = {
            w: 350,
            h: 155,
        }

        this.labelPos = {
            left: leftValue,
            top: topValue
        }

        this.labelImage = '../img/parchment.png'

        this.init()
    }


    init() {
        this.label = document.createElement('div')
        // this.label.id = "clueLabel"
        this.label.style.position = "absolute"
        // this.label.style.backgroundColor = "red"
        this.label.style.backgroundImage = `url(${this.labelImage})`
        this.label.style.backgroundSize = "cover"
        this.label.style.backgroundPosition = "center"
        this.label.style.backgroundRepeat = "no-repeat"

        this.label.style.width = `${this.labelSize.w}px`
        this.label.style.height = `${this.labelSize.h}px`
        this.label.style.left = `${this.labelPos.left}px`
        this.label.style.top = `${this.labelPos.top}px`
        this.label.style.zIndex = '12'
        this.label.style.textAlign = 'center'
        // this.label.style.color = 'white'
        this.label.style.fontSize = '25' // no se cambia el tamaño
        this.label.style.fontWeight = '800'

        this.label.style.padding = '16'

        document.querySelector('#controls').appendChild(this.label)
    }

    showMessage(message){
        this.label.innerText = message
        console.log(message) 
    }

    messageFinal(message){
        this.label.innerText = message
        console.log(message) 
    }


}