import React from 'react'
import { Card } from 'semantic-ui-react'
import GameWordCard from '../Components/GameWordCard'

const src = 'https://img.icons8.com/carbon-copy/2x/question-mark.png'

class GameWordContainer extends React.Component {


    render () {
        return(
            <div>
            <div>
                <Card.Group >

                    {
                        this.props.gameWordLettersArray.map( letter => 

                        <GameWordCard 
                            src= {src}
                            thisLetter={letter}
                            guessedLetters={this.props.guessedLetters}
                        /> 
                    )
                    
                    }
                    
                </Card.Group>
            </div>
            </div>
        )
    }

}

export default GameWordContainer