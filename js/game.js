const Game = {

    gameScreen: document.querySelector('#panel'),
    gameSize: {
        w: window.innerWidth * .8,
        h: window.innerHeight,
    },

    background: undefined,
    dicePad: undefined,
    //speedPlayerCounter: 0, 
    dice: undefined,
    player: undefined,


    //gamePath: undefined,
    //stepSquare: undefined,

    init() {
        this.setGameScreenSize();
        this.createElement();
        console.log('La clase Game funciona!')
    },

    setGameScreenSize() {
        document.querySelector('#controls').style.width = '20%'
        this.gameScreen.style.width = `${this.gameSize.w}px`   //css properties to take into account
        this.gameScreen.style.height = `${this.gameSize.h}px`
    },

    createElement() {

        // this.player = new Player(this.gameSize, this.gameScreen, 150, 350)

        this.dice = new Dice(this.gameSize, this.gameScreen, 125, 650)

        const stepSquare1 = new StepSquare(this.gameSize, 100, 275)

        const stepSquarePosLeft = stepSquare1.stepSquarePos.left
        const stepSquareHeight = stepSquare1.stepSquareSize.h
        const stepSquareWidth = stepSquare1.stepSquareSize.w
    

        const stepSquare2 = new StepSquare(this.gameSize, stepSquarePosLeft, stepSquare1.stepSquarePos.top - stepSquareHeight - 1, undefined)
        const stepSquare3 = new StepSquare(this.gameSize, stepSquarePosLeft, stepSquare2.stepSquarePos.top - stepSquareHeight - 1, undefined)
        const stepSquare4 = new StepSquare(this.gameSize, stepSquarePosLeft, stepSquare3.stepSquarePos.top - stepSquareHeight - 1, undefined)
        const stepSquare5 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth + 1, stepSquare4.stepSquarePos.top, undefined) 
        const stepSquare6 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*2 + 2,  stepSquare5.stepSquarePos.top, undefined)
        const stepSquare7 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*3 + 3,  stepSquare6.stepSquarePos.top, undefined)
        const stepSquare8 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*4 + 4,  stepSquare7.stepSquarePos.top, undefined)
        const stepSquare9 = new StepSquare(this.gameSize, stepSquarePosLeft  + stepSquareWidth*5 + 5,  stepSquare8.stepSquarePos.top, undefined)
        const stepSquare10 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*6 + 6,  stepSquare9.stepSquarePos.top, undefined)
        const stepSquare11 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*7 + 7,  stepSquare10.stepSquarePos.top, undefined)
        const stepSquare12 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*8 + 8,  stepSquare11.stepSquarePos.top, undefined)
        const stepSquare13 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*9 + 9,  stepSquare12.stepSquarePos.top, undefined)
        const stepSquare14 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*10 + 10,  stepSquare13.stepSquarePos.top, undefined)
        const stepSquare15 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*11 + 11,  stepSquare14.stepSquarePos.top, undefined)
        const stepSquare16 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*12 + 12,  stepSquare15.stepSquarePos.top, undefined)
        const stepSquare17 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*12 + 12,  stepSquare16.stepSquarePos.top + stepSquareHeight + 1, undefined)
        const stepSquare18 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*12 + 12,  stepSquare17.stepSquarePos.top + stepSquareHeight + 1, undefined)
        const stepSquare19 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*12 + 12,  stepSquare18.stepSquarePos.top + stepSquareHeight + 1, undefined)
        const stepSquare20 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*12 + 12,  stepSquare19.stepSquarePos.top + stepSquareHeight + 1, undefined)
        const stepSquare21 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*12 + 12,  stepSquare20.stepSquarePos.top + stepSquareHeight + 1, undefined)
        const stepSquare22 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*12 + 12,  stepSquare21.stepSquarePos.top + stepSquareHeight + 1, undefined)


        const stepSquare23 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*11 + 11,  stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, undefined)
        const stepSquare24 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*10 + 10,  stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, undefined)
        const stepSquare25 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*9 + 9,  stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, undefined)
        const stepSquare26 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*8 + 8,  stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, undefined)
        const stepSquare27 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*7 + 7,  stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, undefined)
        const stepSquare28 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*6 + 6,  stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, undefined)
        const stepSquare29 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*5 + 5,  stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, undefined)
        const stepSquare30 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*4 + 4,  stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, undefined)
        const stepSquare31 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*3 + 3,  stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, undefined)
        const stepSquare32 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*2 + 2,  stepSquare14.stepSquarePos.top + stepSquareWidth * 6 + 6, undefined)

        const stepSquare33 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*2 + 2, stepSquare6.stepSquarePos.top + stepSquareWidth * 6 + 6, undefined)
        const stepSquare34 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*2 + 2, stepSquare6.stepSquarePos.top + stepSquareWidth * 5 + 5, undefined)
        const stepSquare35 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*2 + 2, stepSquare6.stepSquarePos.top + stepSquareWidth * 4 + 4, undefined)
        const stepSquare36 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*2 + 2, stepSquare6.stepSquarePos.top + stepSquareWidth * 3 + 3, undefined)
        const stepSquare37 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*2 + 2, stepSquare6.stepSquarePos.top + stepSquareWidth * 2 + 2, undefined)

        const stepSquare38 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*3 + 3, stepSquare6.stepSquarePos.top + stepSquareWidth * 2 + 2, undefined)
        const stepSquare39 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*4 + 4, stepSquare6.stepSquarePos.top + stepSquareWidth * 2 + 2, undefined)
        const stepSquare40 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*5 + 5, stepSquare6.stepSquarePos.top + stepSquareWidth * 2 + 2, undefined)
        const stepSquare41 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*6 + 6, stepSquare6.stepSquarePos.top + stepSquareWidth * 2 + 2, undefined)
        const stepSquare42 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*7 + 7, stepSquare6.stepSquarePos.top + stepSquareWidth * 2 + 2, undefined)
        const stepSquare43 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*8 + 8, stepSquare6.stepSquarePos.top + stepSquareWidth * 2 + 2, undefined)
        const stepSquare44 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*9 + 9, stepSquare6.stepSquarePos.top + stepSquareWidth * 2 + 2, undefined)
        const stepSquare45 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*10 + 10, stepSquare6.stepSquarePos.top + stepSquareWidth * 2 + 2, undefined)

        const stepSquare46 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*10 + 10, stepSquare6.stepSquarePos.top + stepSquareWidth * 3 + 3, undefined)
        const stepSquare47 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*10 + 10, stepSquare6.stepSquarePos.top + stepSquareWidth * 4 + 4, undefined)

        const stepSquare48 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*9 + 9, stepSquare6.stepSquarePos.top + stepSquareWidth * 4 + 4, undefined)
        const stepSquare49 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*8 + 8, stepSquare6.stepSquarePos.top + stepSquareWidth * 4 + 4, undefined)
        const stepSquare50 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*6 + 6, stepSquare6.stepSquarePos.top + stepSquareWidth * 3.5 + 3, undefined, 'big')
        const stepSquare51 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth*4 + 4, stepSquare6.stepSquarePos.top + stepSquareWidth * 3.5 + 3, undefined,  'big')

    }
}