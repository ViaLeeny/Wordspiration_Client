import React from 'react'
import { Card, Divider, Header, Icon } from 'semantic-ui-react'


class Graveyard extends React.Component {
    render () {
        return(
            <div className='graveyard'>
            <header  >
            <React.Fragment>
                    <Divider horizontal>
                        <Header as='h1'>
                            <Icon name='bar chart' />
                            Graveyard!                        
                            </Header>
                    </Divider>
                    </React.Fragment>
               {this.props.incorrectlyGuessedLetters.map( word => 
               <Card.Group >
                    <Card fluid color='red' header={word} />
               </Card.Group>
               )}
            </header>
            </div>
        )
    }
}


export default Graveyard