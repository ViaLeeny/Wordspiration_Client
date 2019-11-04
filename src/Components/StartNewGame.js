import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import _ from 'lodash'
import '../App.css';
import GameMode from './GameMode'
import { getWords } from '../API/WordsApi'
import { getPlayers } from '../API/PlayersApi'
import { newGame_Api, getGame } from '../API/GameApi'

// import WordContainer from '../Container/WordContainer'

class StartNewGame extends React.Component {

    //SETS THE STATE OF THE GAME
    state = {
        games: 0,
        game: 0,
        allPlayers: [],
        playerName: '',
        all_words: [], 
        all_games: [],
        gameWord: '', 
        gameId: 0,
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

    //GET ALL GAMES AT START OF A NEW GAME
    setGames = () => {
        getGame () 
        .then(data => {
            this.setState({
                all_games: data.reverse()
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
    handleSubmit = () => {

        //CALL FUNCTION TO START GAME
        this.startGame()
    }

    //GET RANDOM WORD & CREATE GAME
    startGame = () => {

        const { playerName, all_words } = this.state

        const word = all_words.text
        newGame_Api(playerName, word)

        //INCREASE GAME STATE TO ONE TO RENDER GAME MODE
        .then(
            this.setState({
                game: 1, 
                gameWord: word
            })
        )
    }


    //THIS SHOULD HAPPEN AT START OF THE APP
    componentDidMount(){
        this.setPlayers()
        this.setWords()
        this.setGames()
    }

    //CONDITIONAL RENDERING - EITHER WELCOMES USER OR DISPLAYS NEW GAME
    render (){
        const { game, all_words, playerName, allPlayers, all_games, gameWord } = this.state
        const { handleSubmit, handleChange } = this
        if (game > 0 ){
        return (
            <GameMode 
                playerName={playerName}
                gameWord={gameWord}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                all_games={all_games}
            /> 
            
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

                {/* <h1>All Words</h1>
                <h3> {
                     all_words.map( thisWord => 
                        thisWord.text
                        )
                 }
                 </h3> */}
            
            
            </div>
            )
        }
    }

}

export default StartNewGame;
