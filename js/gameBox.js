class GameBox {

    constructor(gameSize) {

        this.gameSize = gameSize

        this.gameBoxSize = {
            w: 300,
            h: 300,
        }


    }



    init() {

        this.gameBoxElement = document.createElement('div')

        this.gameBoxPos = {
            left: (this.gameSize.w / 2) - (this.squareSize.w / 2),
            top: 500
        }

        this.gameBoxElement.style.position = "absolute"
        this.gameBoxElement.style.backgroundColor = `black`


        document.querySelector('#game-screen').appendChild(this.gameBoxElement)
    }

}