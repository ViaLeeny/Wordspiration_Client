import React from 'react'
import GameWordContainer from '../Container/GameWordContainer'
import { Input, Placeholder, Divider, Header, Icon } from 'semantic-ui-react'
import UserLetterInput from './UserLetterInput'
import GameWon from './GameWon'
import GameLost from './GameLost'
import Graveyard from './Graveyard'
import { getGame } from '../API/GameApi'
import { getTopPlayers } from '../API/PlayersApi'


class GameMode extends React.Component {

    //SETS THE STATE OF THE GAME
    state = {
        gameScore: 0,
        gameWordLength: 0,
        gameWordLettersArray: [],
        distinctLettersArray: [],
        guessedLetters: [],
        incorrectlyGuessedLetters: [],
        totalGuessesLeft: 6, 
        currentGameId: 0, 
        games: []
        
    }


    //SEPARATE WORD INTO INDIVIDUAL LETTERS
    setWordToLettersArray = () => {
        const { gameWord } = this.props
        const lettersArray = gameWord.split("")
        const distinctLetters = [...new Set(lettersArray)]
        const lettersArrayLength = lettersArray.length
        this.setState({
            gameWordLength: lettersArrayLength,
            gameWordLettersArray: lettersArray, 
            distinctLettersArray: distinctLetters
        })
    }

    //CHANGE STATE OF CORRECT GUESSES 
    letterGuessedCorrectly = (letter) => {
        const placeholderArray = this.state.guessedLetters

        const newlyChangedArray = placeholderArray.push(letter)

        this.setState({
            guessedLetters: placeholderArray
        })

        this.setState({
            currentGameId: this.props.all_games[0].id
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

    getLeadershipData = () => {
        getTopPlayers()

    }



    //RUNS AT THE START OF RENDERING THIS PAGE
    componentDidMount() {
        this.setWordToLettersArray()
        this.getLeadershipData()
    }

    render() {
        const { gameScore, gameWordLength, gameWordLettersArray, guessedLetters, totalGuessesLeft, incorrectlyGuessedLetters, distinctLettersArray, currentGameId, games } = this.state
        const { playerName, gameWord, handleChange, handleSubmit, all_games, setLeadershipBoard } = this.props
        const { letterGuessedCorrectly, letterGuessedIncorrectly } = this

        if (totalGuessesLeft === 0){
            return (
                <GameLost
                playerName={playerName}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                all_games={all_games}
                
                /> 
            )
           
        } else if ( guessedLetters.length === distinctLettersArray.length){
            return (
                <GameWon 
                totalGuessesLeft={totalGuessesLeft}
                currentGameId={currentGameId}
                all_games={all_games}

                /> 
            )
        } else {
        return(
            <div>
        
             <div className= "App gameOn2">
                <header className="App-header gameOn1">
                    <h1> W O R D S P I R A T I O N </h1>
                    <React.Fragment>
                    <Divider horizontal>
                        <Header as='h4'>
                            <Icon name='tag' />
                            Instructions
                        </Header>
                    </Divider> 
                    </React.Fragment>                   
                    <h5 className= "gameOn-instructions">Guess a letter by typing it into the input box. 
                    If the letter is part of the word, each of that letter in the word will be revealed to you. 
                    If you guess wrong, your letter will be placed in the graveyard. 
                    You have 6 tries to guess the entire word correctly. 
                    Otherwise, it is GAME OVER!! </h5>
                    <React.Fragment>
                    <Divider horizontal>
                        <Header as='h4'>
                            <Icon name='bar chart' />
                            Game on {this.props.playerName}!
                        </Header>
                    </Divider>
                    </React.Fragment>
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
                    
                    <Graveyard incorrectlyGuessedLetters={incorrectlyGuessedLetters}/>
    


                </header>
             </div>
             
            </div>
        )}
    }

}

export default GameMode