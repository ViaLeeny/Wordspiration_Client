import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import StartNewGame from './StartNewGame'

class GameLost extends React.Component {

    state = {
        restart: false
    }

    handleSubmit = () => {
        this.setState({

            restart: true
        })
    }

    render () {
        const { handleSubmit } = this
        const { restart } = this.state

        if (restart === false){
        return(
            <div className= "App">
            <header className="App-header">
               <h1> YOU LOSE! </h1>

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


export default GameLost