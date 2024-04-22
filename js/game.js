const Game = {

    gameScreen: document.querySelector('#panel'),
    gameSize: {
        w: window.innerWidth * .8,
        h: window.innerHeight,
    },

    //speedPlayerCounter: 0, 
    dice: undefined,
    player: undefined,
    arrSquaresPath: [this.stepSquare1,
                    this.stepSquare2,
                    this.stepSquare3,
                    this.stepSquare4,
                    this.stepSquare5,
                    this.stepSquare6,
                    this.stepSquare7,
                    this.stepSquare8,
                    this.stepSquare9,
                    this.stepSquare10,
                    this.stepSquare11,
                    this.stepSquare12,
                    this.stepSquare13,
                    this.stepSquare14,
                    this.stepSquare15,
                    this.stepSquare16,
                    this.stepSquare17,
                    this.stepSquare18,
                    this.stepSquare19,
                    this.stepSquare20,
                    this.stepSquare21,
                    this.stepSquare22,
                    this.stepSquare23,
                    this.stepSquare24,
                    this.stepSquare25,
                    this.stepSquare26,
                    this.stepSquare27,
                    this.stepSquare28,
                    this.stepSquare29,
                    this.stepSquare30,
                    this.stepSquare31,
                    this.stepSquare32,
                    this.stepSquare33,
                    this.stepSquare34,
                    this.stepSquare35,
                    this.stepSquare36,
                    this.stepSquare37,
                    this.stepSquare38,
                    this.stepSquare39,
                    this.stepSquare40,
                    this.stepSquare41,
                    this.stepSquare42,
                    this.stepSquare43,
                    this.stepSquare44,
                    this.stepSquare45,
                    this.stepSquare46,
                    this.stepSquare47,
                    this.stepSquare48,
                    this.stepSquare49,
                    this.stepSquare50,
                    this.stepSquare51 ],


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
        this.player = new Player(this.gameSize, this.gameScreen, 125, 350)
        this.dice = new Dice(this.gameSize, this.gameScreen, 120, 550)
        this.createSquares() 
    },

    setEventListeners(){
        document.querySelector('#dice').onclick = () => {
            this.dice.generateRandomDice()
            this.advancePlayer()
        }
    },

    advancePlayer(){
        this.player.moveToThisTop(300)
    },

    createSquares(){

        const stepSquare1 = new StepSquare(this.gameSize, 100, 275)

        const stepSquarePosLeft = stepSquare1.stepSquarePos.left
        const stepSquareHeight = stepSquare1.stepSquareSize.h
        const stepSquareWidth = stepSquare1.stepSquareSize.w
    

        const stepSquare2 = new StepSquare(this.gameSize, stepSquarePosLeft, stepSquare1.stepSquarePos.top - stepSquareHeight - 1, 'moveTwo')
        const stepSquare3 = new StepSquare(this.gameSize, stepSquarePosLeft, stepSquare2.stepSquarePos.top - stepSquareHeight - 1, 'minotaur')
        const stepSquare4 = new StepSquare(this.gameSize, stepSquarePosLeft, stepSquare3.stepSquarePos.top - stepSquareHeight - 1, 'mana')
        const stepSquare5 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth + 1, stepSquare4.stepSquarePos.top, 'moveTwo') 
        const stepSquare6 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*2 + 2,  stepSquare5.stepSquarePos.top, 'shield')
        const stepSquare7 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*3 + 3,  stepSquare6.stepSquarePos.top, 'health')
        const stepSquare8 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*4 + 4,  stepSquare7.stepSquarePos.top, 'vampire')
        const stepSquare9 = new StepSquare(this.gameSize, stepSquarePosLeft  + stepSquareWidth*5 + 5,  stepSquare8.stepSquarePos.top, 'bright')
        const stepSquare10 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*6 + 6,  stepSquare9.stepSquarePos.top, 'sword')
        const stepSquare11 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*7 + 7,  stepSquare10.stepSquarePos.top, 'health')
        const stepSquare12 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*8 + 8,  stepSquare11.stepSquarePos.top, 'moveTwo')
        const stepSquare13 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*9 + 9,  stepSquare12.stepSquarePos.top, 'minotaur')
        const stepSquare14 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*10 + 10,  stepSquare13.stepSquarePos.top, 'mana')
        const stepSquare15 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*11 + 11,  stepSquare14.stepSquarePos.top, 'mana')
        const stepSquare16 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*12 + 12,  stepSquare15.stepSquarePos.top, 'vampire')
        const stepSquare17 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*12 + 12,  stepSquare16.stepSquarePos.top + stepSquareHeight + 1, 'shield')
        const stepSquare18 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*12 + 12,  stepSquare17.stepSquarePos.top + stepSquareHeight + 1, 'medusaGorgon')
        const stepSquare19 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*12 + 12,  stepSquare18.stepSquarePos.top + stepSquareHeight + 1, 'mana')
        const stepSquare20 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*12 + 12,  stepSquare19.stepSquarePos.top + stepSquareHeight + 1, 'moveTwo')
        const stepSquare21 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*12 + 12,  stepSquare20.stepSquarePos.top + stepSquareHeight + 1, 'health')
        const stepSquare22 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*12 + 12,  stepSquare21.stepSquarePos.top + stepSquareHeight + 1, 'minotaur')


        const stepSquare23 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*11 + 11,  stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, 'health')
        const stepSquare24 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*10 + 10,  stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, 'mana')
        const stepSquare25 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*9 + 9,  stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, 'sword')
        const stepSquare26 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*8 + 8,  stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, 'minotaur')
        const stepSquare27 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*7 + 7,  stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, 'medusaGorgon')
        const stepSquare28 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*6 + 6,  stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, 'health')
        const stepSquare29 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*5 + 5,  stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, 'shield')
        const stepSquare30 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*4 + 4,  stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, 'moveTwo')
        const stepSquare31 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*3 + 3,  stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, 'sword')
        const stepSquare32 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*2 + 2,  stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, 'vampire')

        const stepSquare33 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*2 + 2, stepSquare6.stepSquarePos.top + stepSquareWidth * 6 + 6, 'moveTwo')
        const stepSquare34 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*2 + 2, stepSquare6.stepSquarePos.top + stepSquareWidth * 5 + 5, 'mana')
        const stepSquare35 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*2 + 2, stepSquare6.stepSquarePos.top + stepSquareWidth * 4 + 4, 'health')
        const stepSquare36 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*2 + 2, stepSquare6.stepSquarePos.top + stepSquareWidth * 3 + 3, 'health')
        const stepSquare37 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*2 + 2, stepSquare6.stepSquarePos.top + stepSquareWidth * 2 + 2, 'moveTwo')

        const stepSquare38 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*3 + 3, stepSquare6.stepSquarePos.top + stepSquareWidth * 2 + 2, 'minotaur')
        const stepSquare39 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*4 + 4, stepSquare6.stepSquarePos.top + stepSquareWidth * 2 + 2, 'bright')
        const stepSquare40 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*5 + 5, stepSquare6.stepSquarePos.top + stepSquareWidth * 2 + 2, 'health')
        const stepSquare41 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*6 + 6, stepSquare6.stepSquarePos.top + stepSquareWidth * 2 + 2, 'rip')
        const stepSquare42 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*7 + 7, stepSquare6.stepSquarePos.top + stepSquareWidth * 2 + 2, 'sword')
        const stepSquare43 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*8 + 8, stepSquare6.stepSquarePos.top + stepSquareWidth * 2 + 2, 'health')
        const stepSquare44 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*9 + 9, stepSquare6.stepSquarePos.top + stepSquareWidth * 2 + 2, 'mana')
        const stepSquare45 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*10 + 10, stepSquare6.stepSquarePos.top + stepSquareWidth * 2 + 2, 'shield')

        const stepSquare46 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*10 + 10, stepSquare6.stepSquarePos.top + stepSquareWidth * 3 + 3, 'health')
        const stepSquare47 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*10 + 10, stepSquare6.stepSquarePos.top + stepSquareWidth * 4 + 4, 'sword')

        const stepSquare48 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*9 + 9, stepSquare6.stepSquarePos.top + stepSquareWidth * 4 + 4, 'medusaGorgon')
        const stepSquare49 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*8 + 8, stepSquare6.stepSquarePos.top + stepSquareWidth * 4 + 4, 'sword')
        const stepSquare50 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*6 + 6, stepSquare6.stepSquarePos.top + stepSquareWidth * 3.5 + 3, 'finalBoss', 'big')
        const stepSquare51 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*4 + 4, stepSquare6.stepSquarePos.top + stepSquareWidth * 3.5 + 3, 'finalChest',  'big')

    }
}