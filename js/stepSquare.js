class StepSquare {

    constructor(gameSize, leftValue, topValue, nameEnemy, imgEnemy, helthEnemy) {

        this.gameSize = gameSize

        this.stepSquareSize = {
            w: 75,
            h: 75,
        }

        this.stepSquarePos = {
            left: leftValue,
            top: topValue
        }

        this.enemyClass = {
            nameEnemy: nameEnemy,
            imgEnemy: imgEnemy,
            helthEnemy: helthEnemy,
        }

        this.init()
    }

    init() {

        this.oneStepSquare = document.createElement('div');
        this.oneStepSquare.style.position = "absolute"
        this.oneStepSquare.style.backgroundColor = 'aqua'
        this.oneStepSquare.style.borderRadius = `5px`

        this.oneStepSquare.style.width = `${this.stepSquareSize.w}px`
        this.oneStepSquare.style.height = `${this.stepSquareSize.h}px`
        this.oneStepSquare.style.left = `${this.stepSquarePos.left}px`
        this.oneStepSquare.style.top = `${this.stepSquarePos.top}px`


        document.querySelector('#game-screen').appendChild(this.oneStepSquare) // Preguntar como podemos pasar la variable 'gameScreen'.
    }
}