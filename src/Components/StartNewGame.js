import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import _ from 'lodash'
import '../App.css';
import GameMode from './GameMode'
import { getWords } from '../API/WordsApi'
import { getPlayers } from '../API/PlayersApi'
import { newGame_Api } from '../API/GameApi'
// import WordContainer from '../Container/WordContainer'

class StartNewGame extends React.Component {

    //SETS THE STATE OF THE GAME
    state = {
        game: [],
        allPlayers: [],
        playerName: '',
        all_words: [], 
        word: ''
    }

    //GET ALL PLAYERS FROM DATABASE
    setPlayers = () => {
        getPlayers ()
        .then(data => {
            this.setState({
                allPlayers: data
            })
        })
    }

    //TEST: GET ALL WORDS FROM API ( THIS MAY BE DISCARDED AFTER SAMPLE FUNCTION IS SET)
    setWords = () => {
        getWords () 
        .then(data => {
            this.setState({
                all_words: data
            })
        } )
    }

    //PLAYER NAME INPUT FIELD CHANGES AS USER TYPES TO SEARCH OR CREATE
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value, 
        })
    }

    //STARTS A NEW GAME (CHANGES STATE & CREATES NEW GAME ON BACKEND)
    handleSubmit = (e) => {
       //PREVENT DEFAULT REFRESH 
        e.preventDefault()
        console.log(`handle submit function`)

        //GET RANDOM WORD & CREATE GAME
        this.getRandomWord()
    }

 //GET RANDOM WORD
 getRandomWord = () => {
    const { all_words } = this.state
    const gameWord = _.sample(all_words)

    this.setState({
        word: gameWord.text
    }) 
    console.log(`set state to ${this.state.word}`)
    this.startGame()
}

startGame = () => {

    const { playerName, word } = this.state
    newGame_Api(playerName, word)

    //INCREASE GAME STATE BY ONE TO RENDER GAME MODE
    .then(
        this.setState({
            game: 1
        })
    )
    console.log(`create game in backend with ${this.state.word}`)
}


    //THIS SHOULD HAPPEN AT START OF THE APP
    componentDidMount(){
        this.setPlayers()
        this.setWords()
    }

    //CONDITIONAL RENDERING - EITHER WELCOMES USER OR DISPLAYS NEW GAME
    render (){
        const { game, all_words, word, playerName, allPlayers} = this.state
        const { handleSubmit, handleChange } = this
        if (game > 0 ){
        return (
            <GameMode /> 
            
        )} else {
            return(
                <div className= "App">
                 <header className="App-header">
                    <h3> WELCOME TO </h3>
                    <h1> W O R D S P I R A T I O N ! </h1>

                    <Form onSubmit = {handleSubmit}>
                        <Form.Input name="playerName"  value= {playerName} label='Name' placeholder='Find or Create Player' onChange = {handleChange} />
                        <Button size='huge' color='green' >New Game</Button>
                    </Form>

                 </header>

                <h1>All Players</h1>
                <h3> {
                     allPlayers.map( thisPlayer => 
                        thisPlayer.name
                        )
                 }
                 </h3>

                <h1>All Words</h1>
                <h3> {
                     all_words.map( thisWord => 
                        thisWord.text
                        )
                 }
                 </h3>
            
            
            </div>
            )
        }
    }

}

export default StartNewGame;
