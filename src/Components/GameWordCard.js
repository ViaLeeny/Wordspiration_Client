import React from 'react'
import { Card } from 'semantic-ui-react'

const src = 'https://img.icons8.com/carbon-copy/2x/question-mark.png'

class GameWordCard extends React.Component {


    render () {
        if(this.props.guessedLetters.includes(this.props.thisLetter)){
            return(
                <div>
                    <Card fluid color='green' header={this.props.thisLetter} /> 
                </div>
            )
        } else {
            return(
                <div>
                    <Card fluid color='red' image={this.props.src} />    
                </div>
            )
        }
        
    }

}

export default GameWordCard