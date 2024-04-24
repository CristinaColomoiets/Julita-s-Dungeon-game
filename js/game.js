const Game = {

    gameScreen: document.querySelector('#panel'),
    gameSize: {
        w: window.innerWidth * .8,
        h: window.innerHeight,
    },

    //speedPlayerCounter: 0, 
    dice: undefined,
    player: undefined,
    arrSquaresPath: undefined,
    currentSquareNumber: 0,
    barStats: undefined,
    targetSquare: undefined,
    attackMode: false,
    clueLabel: undefined,

    init() {
        this.setGameScreenSize()
        this.createElements()
        this.setEventListeners()
    },

    setGameScreenSize() {
        document.querySelector('#controls').style.width = '20%'
        this.gameScreen.style.width = `${this.gameSize.w}px`   //css properties to take into account
        this.gameScreen.style.height = `${this.gameSize.h}px`
    },

    createElements() {
        this.player = new Player(this.gameSize, this.gameScreen, 118, 280)
        this.dice = new Dice(this.gameSize, this.gameScreen, 120, 550)
        this.createSquares()
        this.createBar()
        this.clueLabel = new ClueLabel(this.gameSize, this.gameScreen, 50, 200)
    },

    setEventListeners() {
        document.querySelector('#dice').onclick = () => {

            if (!this.attackMode) {

                this.dice.generateRandomDice()
                this.advancePlayer()
                this.player.updatePosition(this.targetSquare.stepSquarePos.left, this.targetSquare.stepSquarePos.top)

                if (this.targetSquare.typeSquare === "moveTwo") {
                    this.currentSquareNumber -= 2
                    this.clueLabel.showMessage('mueve dos casillas')
                }

                if (this.targetSquare.typeSquare === "monster") {
                    this.attackMode = true
                    this.clueLabel.showMessage('El monstruo te acaba de quitar 3 de vida, debes tirar el dado para luchar con él')
                }

            } else {
                this.dice.generateRandomDice()

                if (this.dice.currentNum + 1 >= 4) {
                    //alert('el monstruo ha muerto')
                    console.log('El monstruo está muerto. le has matado con número: ', this.dice.currentNum + 1)
                    this.attackMode = false
                } else {
                    console.log('El monstruo está ALIVE', this.dice.currentNum + 1)
                    this.clueLabel.showMessage('No está muerto todavía, sigue tirando porfavor')
                }
            }

            if (this.targetSquare.typeSquare === "finalBoss") { // La casilla del BOSS final
                this.attackMode = true
                if (this.dice.currentNum + 1 >= 6) {
                    this.clueLabel.showMessage(`El BOSS está muerto. le has matado con número:',
                    ${this.dice.currentNum + 1}, youwin`)
                } else if (this.dice.currentNum + 1 === 1) {
                    //alert('pazdescanse Julita')
                    this.clueLabel.showMessage('Pazdescanse Julita, lo siento')
                } else {
                    console.log('El BOSS sigue ALIVE', this.dice.currentNum + 1)
                    this.clueLabel.showMessage('No está muerto todavía, sigue tirando porfavor')
                }
            }

            this.updateStats()
        }
    },


    updateStats() {
        if (this.targetSquare.typeSquare === "finalBoss") { // La casilla del BOSS final
            if (this.dice.currentNum + 1 >= 6) {
                this.clueLabel.showMessage(`El BOSS está muerto. le has matado con número:', ${this.dice.currentNum + 1}, youwin`)
            } else {
                console.log('El BOSS sigue ALIVE', this.dice.currentNum + 1)
                this.clueLabel.showMessage('No está muerto todavía, sigue tirando porfavor')
            }
        }
    },

    advancePlayer() {
        // console.log(this.currentSquareNumber)
        // console.log(this.dice.currentNum)
        if (((this.currentSquareNumber + 1) + this.dice.currentNum) <= (this.arrSquaresPath.length - 2)) {
            this.currentSquareNumber += this.dice.currentNum + 1
            this.targetSquare = this.arrSquaresPath[this.currentSquareNumber]


        } else if (((this.currentSquareNumber + 1) + this.dice.currentNum) > (this.arrSquaresPath.length - 2)) {
            this.currentSquareNumber = this.arrSquaresPath.length - 2
            this.targetSquare = this.arrSquaresPath[this.arrSquaresPath.length - 2]

        }
        this.player.moveToSquare(this.targetSquare)

    },

    createBar() {
        this.healthBar = new BarStats(this.gameSize, this.gameScreen, "health", "#7ED957", 610)
        this.manaBar = new BarStats(this.gameSize, this.gameScreen, "mana", "#8EE3FF", 650)
    },

    createSquares() {

        const stepSquare1 = new StepSquare(this.gameSize, 100, 275)

        const stepSquarePosLeft = stepSquare1.stepSquarePos.left
        const stepSquareHeight = stepSquare1.stepSquareSize.h
        const stepSquareWidth = stepSquare1.stepSquareSize.w

        const stepSquare2 = new StepSquare(this.gameSize, stepSquarePosLeft, stepSquare1.stepSquarePos.top - stepSquareHeight - 1, 'moveTwo', '../img/Two.png')
        const stepSquare3 = new StepSquare(this.gameSize, stepSquarePosLeft, stepSquare2.stepSquarePos.top - stepSquareHeight - 1, 'monster', '../img/minotaur.png')
        const stepSquare4 = new StepSquare(this.gameSize, stepSquarePosLeft, stepSquare3.stepSquarePos.top - stepSquareHeight - 1, 'mana', '../img/manaPotion.png')
        const stepSquare5 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth + 1, stepSquare4.stepSquarePos.top, 'moveTwo', '../img/Two.png')
        const stepSquare6 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 2 + 2, stepSquare5.stepSquarePos.top, 'shield', '../img/shield.png')
        const stepSquare7 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 3 + 3, stepSquare6.stepSquarePos.top, 'health', '../img/health.gif')
        const stepSquare8 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 4 + 4, stepSquare7.stepSquarePos.top, 'monster', '../img/minotaur.png')
        const stepSquare9 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 5 + 5, stepSquare8.stepSquarePos.top, 'bright', '../img/bright.gif')
        const stepSquare10 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 6 + 6, stepSquare9.stepSquarePos.top, 'sword', '../img/sword.png')
        const stepSquare11 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 7 + 7, stepSquare10.stepSquarePos.top, 'health', '../img/health.gif')
        const stepSquare12 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 8 + 8, stepSquare11.stepSquarePos.top, 'moveTwo', '../img/Two.png')
        const stepSquare13 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 9 + 9, stepSquare12.stepSquarePos.top, 'monster', '../img/minotaur.png')
        const stepSquare14 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 10 + 10, stepSquare13.stepSquarePos.top, 'mana', '../img/manaPotion.png')
        const stepSquare15 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 11 + 11, stepSquare14.stepSquarePos.top, 'mana', '../img/manaPotion.png')
        const stepSquare16 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 12 + 12, stepSquare15.stepSquarePos.top, 'monster', '../img/minotaur.png')
        const stepSquare17 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 12 + 12, stepSquare16.stepSquarePos.top + stepSquareHeight + 1, 'shield', '../img/shield.png')
        const stepSquare18 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 12 + 12, stepSquare17.stepSquarePos.top + stepSquareHeight + 1, 'monster', '../img/minotaur.png')
        const stepSquare19 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 12 + 12, stepSquare18.stepSquarePos.top + stepSquareHeight + 1, 'mana', '../img/manaPotion.png')
        const stepSquare20 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 12 + 12, stepSquare19.stepSquarePos.top + stepSquareHeight + 1, 'moveTwo', '../img/Two.png')
        const stepSquare21 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 12 + 12, stepSquare20.stepSquarePos.top + stepSquareHeight + 1, 'monster', '../img/vampire.gif')
        const stepSquare22 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 12 + 12, stepSquare21.stepSquarePos.top + stepSquareHeight + 1, 'monster', '../img/minotaur.png')


        const stepSquare23 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 11 + 11, stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, 'health', '../img/health.gif')
        const stepSquare24 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 10 + 10, stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, 'mana', '../img/manaPotion.png')
        const stepSquare25 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 9 + 9, stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, 'sword', '../img/sword.png')
        const stepSquare26 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 8 + 8, stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, 'monster', '../img/minotaur.png')
        const stepSquare27 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 7 + 7, stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, 'monster', '../img/minotaur.png')
        const stepSquare28 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 6 + 6, stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, 'health', '../img/health.gif')
        const stepSquare29 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 5 + 5, stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, 'shield', '../img/shield.png')
        const stepSquare30 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 4 + 4, stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, 'moveTwo', '../img/Two.png')
        const stepSquare31 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 3 + 3, stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, 'sword', '../img/sword.png')
        const stepSquare32 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 2 + 2, stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, 'monster', '../img/minotaur.png')

        const stepSquare33 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 2 + 2, stepSquare6.stepSquarePos.top + stepSquareWidth * 6 + 6, 'moveTwo', '../img/Two.png')
        const stepSquare34 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 2 + 2, stepSquare6.stepSquarePos.top + stepSquareWidth * 5 + 5, 'mana', '../img/manaPotion.png')
        const stepSquare35 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 2 + 2, stepSquare6.stepSquarePos.top + stepSquareWidth * 4 + 4, 'monster', '../img/vampire.gif')
        const stepSquare36 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 2 + 2, stepSquare6.stepSquarePos.top + stepSquareWidth * 3 + 3, 'sword', '../img/sword.png')
        const stepSquare37 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 2 + 2, stepSquare6.stepSquarePos.top + stepSquareWidth * 2 + 2, 'moveTwo', '../img/Two.png')

        const stepSquare38 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 3 + 3, stepSquare6.stepSquarePos.top + stepSquareWidth * 2 + 2, 'monster', '../img/minotaur.png')
        const stepSquare39 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 4 + 4, stepSquare6.stepSquarePos.top + stepSquareWidth * 2 + 2, 'bright', '../img/bright.gif')
        const stepSquare40 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 5 + 5, stepSquare6.stepSquarePos.top + stepSquareWidth * 2 + 2, 'health', '../img/health.gif')
        const stepSquare41 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 6 + 6, stepSquare6.stepSquarePos.top + stepSquareWidth * 2 + 2, 'rip', '../img/rip.png')
        const stepSquare42 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 7 + 7, stepSquare6.stepSquarePos.top + stepSquareWidth * 2 + 2, 'monster', '../img/vampire.gif')
        const stepSquare43 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 8 + 8, stepSquare6.stepSquarePos.top + stepSquareWidth * 2 + 2, 'health', '../img/health.gif')
        const stepSquare44 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 9 + 9, stepSquare6.stepSquarePos.top + stepSquareWidth * 2 + 2, 'mana', '../img/manaPotion.png')
        const stepSquare45 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 10 + 10, stepSquare6.stepSquarePos.top + stepSquareWidth * 2 + 2, 'shield', '../img/shield.png')

        const stepSquare46 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 10 + 10, stepSquare6.stepSquarePos.top + stepSquareWidth * 3 + 3, 'health', '../img/health.gif')
        const stepSquare47 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 10 + 10, stepSquare6.stepSquarePos.top + stepSquareWidth * 4 + 4, 'sword', '../img/sword.png')

        const stepSquare48 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 9 + 9, stepSquare6.stepSquarePos.top + stepSquareWidth * 4 + 4, 'monster', '../img/minotaur.png')
        const stepSquare49 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 8 + 8, stepSquare6.stepSquarePos.top + stepSquareWidth * 4 + 4, 'sword', '../img/sword.png')
        const stepSquare50 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 6 + 6, stepSquare6.stepSquarePos.top + stepSquareWidth * 3.5 + 3, 'finalBoss', '../img/dragon.gif', 'big')
        const stepSquare51 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 4 + 4, stepSquare6.stepSquarePos.top + stepSquareWidth * 3.5 + 3, 'finalChest', '../img/chest.png', 'big')

        this.arrSquaresPath = [
            stepSquare1,
            stepSquare2,
            stepSquare3,
            stepSquare4,
            stepSquare5,
            stepSquare6,
            stepSquare7,
            stepSquare8,
            stepSquare9,
            stepSquare10,
            stepSquare11,
            stepSquare12,
            stepSquare13,
            stepSquare14,
            stepSquare15,
            stepSquare16,
            stepSquare17,
            stepSquare18,
            stepSquare19,
            stepSquare20,
            stepSquare21,
            stepSquare22,
            stepSquare23,
            stepSquare24,
            stepSquare25,
            stepSquare26,
            stepSquare27,
            stepSquare28,
            stepSquare29,
            stepSquare30,
            stepSquare31,
            stepSquare32,
            stepSquare33,
            stepSquare34,
            stepSquare35,
            stepSquare36,
            stepSquare37,
            stepSquare38,
            stepSquare39,
            stepSquare40,
            stepSquare41,
            stepSquare42,
            stepSquare43,
            stepSquare44,
            stepSquare45,
            stepSquare46,
            stepSquare47,
            stepSquare48,
            stepSquare49,
            stepSquare50,
            stepSquare51
        ]
    }
}
