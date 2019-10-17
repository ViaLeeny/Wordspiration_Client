import React from 'react'
import { Form, Button } from 'semantic-ui-react'


class UserLetterInput extends React.Component {

    //SETS THE STATE OF THE GAME
    state = {
        letterSelected: ""
    }

    //HANDLES USER'S INPUT
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value, 
        })
    }

    //RESET THE LETTER SELECTION
    resetLetterSelection = () => {
        this.setState({
            letterSelected: ''
        })
    }

    //HANDLES THE USER'S SUBMITTED GUESS  
    handleSubmit = (e) => {
        e.preventDefault()

        const { letterSelected } = this.state
        if(this.props.gameWordLettersArray.includes(letterSelected)){
            //Add letter to guessedLettersArray
            this.props.letterGuessedCorrectly(letterSelected)
            //Reset letter selection
            this.resetLetterSelection()
        } else {
            //Add letter to incorrectlyGuessedLettersArray & increase number of wrong guesses
            this.props.letterGuessedIncorrectly(letterSelected)
            //Reset letter selection
            this.resetLetterSelection()
        }
    }

    render () {
        const { letterSelected } = this.state
        const { handleChange, handleSubmit } = this

        return(
            <div>

                <Form onSubmit={handleSubmit} > 
                    <Form.Input focus name='letterSelected' value={letterSelected} placeholder='Guess a letter...' onChange={handleChange} />
                    <Button size='huge' color='green' >Submit Your guess</Button>
                 </Form>

            </div>
        )
    }

}

export default UserLetterInput