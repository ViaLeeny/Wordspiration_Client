import React from 'react'
import { Button, Form, Search, Grid, Header } from 'semantic-ui-react'
import _ from 'lodash'
import '../App.css';
import GameMode from './GameMode'
import { getWords } from '../API/WordsApi'
import { getPlayers } from '../API/PlayersApi'
// import WordContainer from '../Container/WordContainer'


class StartNewGame extends React.Component {



    //SETS THE STATE OF THE GAME
    state = {
        game: [],
        allPlayers: [],
        playerName: [],
        word: [], 
        searchTerm: '', 
        results: []
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
                word: data
            })
        } )
        .then(console.log(this.state.word))
    }

    //PLAYER NAME INPUT FIELD CHANGES AS USER TYPES TO SEARCH OR CREATE
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value, 
        })
    }

    //UPDATE SEARCH TERM 
    updateSearch = termToSearch => {
        const { allPlayers, searchTerm} = this.state
        const playersArray = allPlayers

        this.setState({
            searchTerm: termToSearch
        })

        this.setState({
            results: playersArray.filter(player => 
                player.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
        })

    }

    //SEARCH FOR A PLAYER IN THE LIST OF PLAYERS
    handleSearch = (_, { value }) => {
        this.updateSearch(value)
    }

    // getFilteredPlayers = () => {
    //     const { allPlayers, searchTerm } = this.state 
    //     const playersArray = allPlayers
    //     playersArray.filter(player => 
    //                 player.name.toLowerCase().includes(searchTerm.toLowerCase())
    //                 )
    //         console.log(playersArray)
    //     this.setState({
    //         results: playersArray
    //     })

    // }



    //STARTS A NEW GAME (CHANGES STATE & CREATES NEW GAME ON BACKEND)
    newGameHandleSubmit = (e) => {
       //PREVENT DEFAULT REFRESH 
        e.preventDefault()
        console.log('OMG A NEW GAME, WORD & PLAYER WERE FOUND OR CREATED')


        //CREATE NEW GAME & FIND OR CREATE PLAYER AND WORD

        //INCREASE GAME STATE BY ONE TO RENDER GAME MODE
    }

    //THIS SHOULD HAPPEN AT START OF THE APP
    componentDidMount(){
        this.setPlayers()
        this.setWords()
    }

    //CONDITIONAL RENDERING - EITHER WELCOMES USER OR DISPLAYS NEW GAME
    render (){
        const { game, word, playerName, allPlayers, isLoading, results, searchTerm } = this.state
        const { newGameHandleSubmit, handleChange, handleSearch } = this
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
                    <Grid>
                        <Grid.Column width={20}>
                        <Search
                            onResultSelect={this.handleResultSelect}
                            onSearchChange={_.debounce(handleSearch, 500, {
                            leading: true,
                            })}
                            results={results}
                            value={searchTerm}
                           
                        />
                        </Grid.Column>
                    </Grid>
                        <Form.Input name="playerName"  value= {playerName} label='Name' placeholder='Create Player' onChange = {handleChange} />
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
                     word.map( thisWord => 
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
