import React from 'react'
import GameWordContainer from '../Container/GameWordContainer'

class GameMode extends React.Component {

    //SETS THE STATE OF THE GAME
    state = {
        gameWordLength: 0,
        gameWordLettersArray: []
    }


    //SEPARATE WORD INTO INDIVIDUAL LETTERS
    setWordToLettersArray = () => {
        const { gameWord } = this.props
       const lettersArray = gameWord.split("")
       const lettersArrayLength = lettersArray.length
        this.setState({
            gameWordLength: lettersArrayLength,
            gameWordLettersArray: lettersArray
        })
    }

    //RUNS AT THE START OF RENDERING THIS PAGE
    componentDidMount() {

        this.setWordToLettersArray()
    }

    render() {
        const { gameWordLength, gameWordLettersArray } = this.state
        const { gameScore, playerName, gameWord } = this.props
        return(
            <div>
        
             <div className= "App-gameOn2">
                <header className="App-header-gameOn1">
                    <h1> W O R D S P I R A T I O N </h1>
                    <h3> Game on {this.props.playerName}!</h3>
                    <h5 className= "gameOn-instructions-header">Instructions</h5>
                    <h5 className= "gameOn-instructions">Guess a letter. 
                    If the letter is part of the word, each of that letter in the word will be revealed to you. 
                    If you guess wrong, your letter will be placed in the graveyard. 
                    You have 6 tries to guess the entire word correctly. 
                    Otherwise, GAME OVER! </h5>

                    <GameWordContainer 
                                    gameScore={gameScore}
                                    playerName={playerName}
                                    gameWord={gameWord}
                                    gameWordLettersArray={gameWordLettersArray}
                                    gameWordLength={gameWordLength}
                    /> 


                </header>
             </div>
             
            </div>
        )
    }

}

export default GameMode