import React from 'react'
import { updateGameScore_Api , getGame } from '../API/GameApi'
import { Button, Form } from 'semantic-ui-react'
import StartNewGame from './StartNewGame'

class GameWon extends React.Component {


    state = {
        restart: false
    }

    handleSubmit = () => {
        this.setState({

            restart: true
        })
    }

    handleMount = () => {
        const all_the_games = this.props.all_games
        const this_game = all_the_games[0]
        const this_player_id = this_game.player.id
        const this_word_id = this_game.word.id
        this.updateGameScore( this_player_id, this_word_id)
    }


    updateGameScore = (player_id, word_id) => {
        updateGameScore_Api(this.props.all_games[0].id, player_id, word_id, this.props.totalGuessesLeft)
    }

    componentDidMount(){
        this.handleMount()
        
    }

    render () { 
        const { handleSubmit } = this
        const { restart } = this.state

        if (restart === false){
        return(
            <div className= "App">
            <header className="App-header">
               <h1> YOU WIN! </h1>
               <h3>Score: {this.props.totalGuessesLeft}</h3>
            
               <Form onSubmit = {handleSubmit}>
                    <Button size='huge' primary color='green' >Restart </Button>
                </Form>
            
            </header>
            </div>
        )} else {
            return(
                <StartNewGame /> )
        }
    }
}


export default GameWon
