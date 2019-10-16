import React from 'react'
import { Card } from 'semantic-ui-react'


class GameWordContainer extends React.Component {


    render () {
        return(
            <div>
            {/* <Card.Group itemsPerRow={wordLength}> */}

                {this.props.gameWord}
                {this.props.gameWordLength}

            
                {/* <Card color='red' image={src} />
                <Card color='orange' image={src} />
                <Card color='yellow' image={src} />
                <Card color='olive' image={src} />
                <Card color='green' image={src} />
                <Card color='teal' image={src} />
                <Card color='blue' image={src} />
                <Card color='violet' image={src} />
                <Card color='purple' image={src} />
                <Card color='pink' image={src} />
                <Card color='brown' image={src} /> */}
            {/* </Card.Group> */}

            </div>
        )
    }

}

export default GameWordContainer