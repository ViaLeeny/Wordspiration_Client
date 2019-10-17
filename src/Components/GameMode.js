import React from 'react'
import GameWordContainer from '../Container/GameWordContainer'
import { Input, Placeholder } from 'semantic-ui-react'
import UserLetterInput from './UserLetterInput'

class GameMode extends React.Component {

    //SETS THE STATE OF THE GAME
    state = {
        gameWordLength: 0,
        gameWordLettersArray: [], 
        guessedLetters: [],
        incorrectlyGuessedLetters: [],
        totalGuessesLeft: 6
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

    //CHANGE STATE OF CORRECT GUESSES 
    letterGuessedCorrectly = (letter) => {
        const placeholderArray = this.state.guessedLetters
        console.log(placeholderArray)

        const newlyChangedArray = placeholderArray.push(letter)

        this.setState({
            guessedLetters: placeholderArray
        })
    }

    //CHANGE STATE OF INCORRECT GUESSES
    letterGuessedIncorrectly = (letter) => {
        
        const placeholder = this.state.incorrectlyGuessedLetters
        const newlyChanged = placeholder.push(letter)
        const placeHolderGuessesLeft = this.state.totalGuessesLeft
        const newlyChangedGuessesLeft= placeHolderGuessesLeft - 1

        this.setState({
            incorrectlyGuessedLetters: placeholder,
            totalGuessesLeft: newlyChangedGuessesLeft
        })

    }

    //RUNS AT THE START OF RENDERING THIS PAGE
    componentDidMount() {

        this.setWordToLettersArray()
    }

    render() {
        const { gameWordLength, gameWordLettersArray, guessedLetters, totalGuessesLeft, incorrectlyGuessedLetters, letterSelected } = this.state
        const { gameScore, playerName, gameWord } = this.props
        const { letterGuessedCorrectly, letterGuessedIncorrectly } = this

        return(
            <div>
        
             <div className= "App gameOn2">
                <header className="App-header gameOn1">
                    <h1> W O R D S P I R A T I O N </h1>
                    <h5 className= "gameOn-instructions-header">Instructions</h5>
                    <h5 className= "gameOn-instructions">Guess a letter. 
                    If the letter is part of the word, each of that letter in the word will be revealed to you. 
                    If you guess wrong, your letter will be placed in the graveyard. 
                    You have 6 tries to guess the entire word correctly. 
                    Otherwise, GAME OVER! </h5>

                    <h3> Game on {this.props.playerName}!</h3>
                    <h1>{totalGuessesLeft}</h1> 
                    <h4>Guesses Left</h4>
                    <br></br> 

                    <UserLetterInput 
                    gameWordLettersArray={gameWordLettersArray}
                    letterGuessedCorrectly={letterGuessedCorrectly}
                    letterGuessedIncorrectly={letterGuessedIncorrectly}
                    /> 

                    <br></br>
                    <br></br>

                    <GameWordContainer 
                                    gameScore={gameScore}
                                    playerName={playerName}
                                    gameWord={gameWord}
                                    gameWordLettersArray={gameWordLettersArray}
                                    gameWordLength={gameWordLength}
                                    guessedLetters={guessedLetters}
                    /> 
                    <h1>GraveYard</h1>
                    {incorrectlyGuessedLetters.map( word => <h3>{word}</h3>)}


                </header>
             </div>
             
            </div>
        )
    }

}

export default GameMode