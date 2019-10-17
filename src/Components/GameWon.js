import React from 'react'
import { updateGameScore_Api , getGame } from '../API/GameApi'

class GameWon extends React.Component {


    updateGameScore = () => {
        updateGameScore_Api(this.props.game_id, this.props.gameScore)
    }

    componentDidMount(){
        this.updateGameScore()
    }

    render () {
        return(
            <div className= "App">
            <header className="App-header">
               <h1> YOU WIN! </h1>
               <h3>Score: {this.props.totalGuessesLeft}</h3>
            </header>
            </div>
        )
    }
}


export default GameWon
