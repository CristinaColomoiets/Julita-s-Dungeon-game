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
    targetSquare: undefined,
    barStats: undefined,
    attackMode: false,

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
        this.player = new Player(this.gameSize, this.gameScreen, 122, 280)
        this.dice = new Dice(this.gameSize, this.gameScreen, 120, 550)
        this.createSquares()
        this.createBar()
    },

    setEventListeners() {
        document.querySelector('#dice').onclick = () => {
            this.dice.generateRandomDice()
            this.advancePlayer()
            this.player.updatePosition(this.targetSquare.stepSquarePos.left, this.targetSquare.stepSquarePos.top)
            this.barStats.updateStats()
        }
    },

    updateStats() {
        if (this.player.playerPos === this.targetSquare.typeSquare === "moveTwo") {
            this.player.moveToSquare(this.targetSquare += 2)
        }

        if (this.player.playerPos === this.targetSquare.typeSquare === "monster") {
            this.attackMode === true
            this.healthBar.barSize.w -= "3%"

        }

        if (this.player.playerPos === this.targetSquare.typeSquare !== "monster" || this.player.playerPos === this.targetSquare.typeSquare !== "moveTwo") {
            alert('Tira otra vez')
        }

    },

    advancePlayer() {
        this.currentSquareNumber += this.dice.currentNum + 1
        this.targetSquare = this.arrSquaresPath[this.currentSquareNumber]
        this.player.moveToSquare(this.targetSquare)
        // console.log('Es la targeet: ', this.targetSquare)
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

        const stepSquare2 = new StepSquare(this.gameSize, stepSquarePosLeft, stepSquare1.stepSquarePos.top - stepSquareHeight - 1, 'moveTwo')
        const stepSquare3 = new StepSquare(this.gameSize, stepSquarePosLeft, stepSquare2.stepSquarePos.top - stepSquareHeight - 1, 'monster')
        const stepSquare4 = new StepSquare(this.gameSize, stepSquarePosLeft, stepSquare3.stepSquarePos.top - stepSquareHeight - 1, 'mana')
        const stepSquare5 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth + 1, stepSquare4.stepSquarePos.top, 'moveTwo')
        const stepSquare6 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 2 + 2, stepSquare5.stepSquarePos.top, 'shield')
        const stepSquare7 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 3 + 3, stepSquare6.stepSquarePos.top, 'health')
        const stepSquare8 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 4 + 4, stepSquare7.stepSquarePos.top, 'monster')
        const stepSquare9 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 5 + 5, stepSquare8.stepSquarePos.top, 'bright')
        const stepSquare10 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 6 + 6, stepSquare9.stepSquarePos.top, 'sword')
        const stepSquare11 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 7 + 7, stepSquare10.stepSquarePos.top, 'health')
        const stepSquare12 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 8 + 8, stepSquare11.stepSquarePos.top, 'moveTwo')
        const stepSquare13 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 9 + 9, stepSquare12.stepSquarePos.top, 'monster')
        const stepSquare14 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 10 + 10, stepSquare13.stepSquarePos.top, 'mana')
        const stepSquare15 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 11 + 11, stepSquare14.stepSquarePos.top, 'mana')
        const stepSquare16 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 12 + 12, stepSquare15.stepSquarePos.top, 'monster')
        const stepSquare17 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 12 + 12, stepSquare16.stepSquarePos.top + stepSquareHeight + 1, 'shield')
        const stepSquare18 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 12 + 12, stepSquare17.stepSquarePos.top + stepSquareHeight + 1, 'monster')
        const stepSquare19 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 12 + 12, stepSquare18.stepSquarePos.top + stepSquareHeight + 1, 'mana')
        const stepSquare20 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 12 + 12, stepSquare19.stepSquarePos.top + stepSquareHeight + 1, 'moveTwo')
        const stepSquare21 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 12 + 12, stepSquare20.stepSquarePos.top + stepSquareHeight + 1, 'health')
        const stepSquare22 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 12 + 12, stepSquare21.stepSquarePos.top + stepSquareHeight + 1, 'monster')


        const stepSquare23 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 11 + 11, stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, 'health')
        const stepSquare24 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 10 + 10, stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, 'mana')
        const stepSquare25 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 9 + 9, stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, 'sword')
        const stepSquare26 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 8 + 8, stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, 'monster')
        const stepSquare27 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 7 + 7, stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, 'monster')
        const stepSquare28 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 6 + 6, stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, 'health')
        const stepSquare29 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 5 + 5, stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, 'shield')
        const stepSquare30 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 4 + 4, stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, 'moveTwo')
        const stepSquare31 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 3 + 3, stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, 'sword')
        const stepSquare32 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 2 + 2, stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, 'monster')

        const stepSquare33 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 2 + 2, stepSquare6.stepSquarePos.top + stepSquareWidth * 6 + 6, 'moveTwo')
        const stepSquare34 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 2 + 2, stepSquare6.stepSquarePos.top + stepSquareWidth * 5 + 5, 'mana')
        const stepSquare35 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 2 + 2, stepSquare6.stepSquarePos.top + stepSquareWidth * 4 + 4, 'health')
        const stepSquare36 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 2 + 2, stepSquare6.stepSquarePos.top + stepSquareWidth * 3 + 3, 'health')
        const stepSquare37 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 2 + 2, stepSquare6.stepSquarePos.top + stepSquareWidth * 2 + 2, 'moveTwo')

        const stepSquare38 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 3 + 3, stepSquare6.stepSquarePos.top + stepSquareWidth * 2 + 2, 'monster')
        const stepSquare39 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 4 + 4, stepSquare6.stepSquarePos.top + stepSquareWidth * 2 + 2, 'bright')
        const stepSquare40 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 5 + 5, stepSquare6.stepSquarePos.top + stepSquareWidth * 2 + 2, 'health')
        const stepSquare41 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 6 + 6, stepSquare6.stepSquarePos.top + stepSquareWidth * 2 + 2, 'rip')
        const stepSquare42 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 7 + 7, stepSquare6.stepSquarePos.top + stepSquareWidth * 2 + 2, 'sword')
        const stepSquare43 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 8 + 8, stepSquare6.stepSquarePos.top + stepSquareWidth * 2 + 2, 'health')
        const stepSquare44 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 9 + 9, stepSquare6.stepSquarePos.top + stepSquareWidth * 2 + 2, 'mana')
        const stepSquare45 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 10 + 10, stepSquare6.stepSquarePos.top + stepSquareWidth * 2 + 2, 'shield')

        const stepSquare46 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 10 + 10, stepSquare6.stepSquarePos.top + stepSquareWidth * 3 + 3, 'health')
        const stepSquare47 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 10 + 10, stepSquare6.stepSquarePos.top + stepSquareWidth * 4 + 4, 'sword')

        const stepSquare48 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 9 + 9, stepSquare6.stepSquarePos.top + stepSquareWidth * 4 + 4, 'monster')
        const stepSquare49 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 8 + 8, stepSquare6.stepSquarePos.top + stepSquareWidth * 4 + 4, 'sword')
        const stepSquare50 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 6 + 6, stepSquare6.stepSquarePos.top + stepSquareWidth * 3.5 + 3, 'finalBoss', 'big')
        const stepSquare51 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth * 4 + 4, stepSquare6.stepSquarePos.top + stepSquareWidth * 3.5 + 3, 'finalChest', 'big')

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
