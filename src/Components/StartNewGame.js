import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import '../App.css';
import GameMode from './GameMode'
import getWords from '../API/WordsApi'
import { getPlayers } from '../API/PlayersApi'


class StartNewGame extends React.Component {


    //SETS THE STATE OF THE GAME
    state = {
        game: [],
        all_Players: [],
        playerName: [],
        word: []
    }

    //GET ALL PLAYERS 
    setPlayers = () => {
        getPlayers ()
        .then(data => {
            this.setState({
                all_Players: data
            })
        })
    }

    //STARTS A NEW GAME (CHANGES STATE & CREATES NEW GAME ON BACKEND)
    newGameHandleSubmit = (e) => {
       //PREVENT DEFAULT REFRESH 
        e.preventDefault()
        console.log('OMG A NEW GAME, WORD & PLAYER WERE FOUND OR CREATED')

        //GET RANDOM WORD FROM API
        getWords()
        .then(data => {
            this.setState({
                word: data.text
            })
        })

        //CREATE NEW GAME & FIND OR CREATE PLAYER AND WORD

        //INCREASE GAME STATE BY ONE TO RENDER GAME MODE
    }

    //THIS SHOULD HAPPEN AT START OF THE APP
    componentDidMount(){
        this.setPlayers()
    }

    //CONDITIONAL RENDERING - EITHER WELCOMES USER OR DISPLAYS NEW GAME
    render (){
        const { game, word } = this.state
        const {newGameHandleSubmit} = this
        if (game.length > 0 ){
        return (
            <GameMode /> 
            
        )} else {
            return(
                <div className= "App">
                 <header className="App-header">
                    <h3> WELCOME TO </h3>
                    <h1> W O R D S P I R A T I O N ! </h1>

                    <Form onSubmit = {newGameHandleSubmit}>
                        <Form.Input label='Name' placeholder='Find or create player' />
                        <Button size='huge' color='green' >New Game</Button>
                    </Form>

                 </header>

                 <h1>All Words</h1>
                 <p>
                     {word}
                 </p>
            </div>
            )
        }
    }

}

export default StartNewGame;
