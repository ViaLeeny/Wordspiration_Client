import React from 'react'
import logo from '../logo.svg';
import '../App.css';


class StartNewGame extends React.Component {

    render (){
        return (
            <div className= "App">
                 <header className="App-header">
                    <h3> WELCOME TO </h3>
                    <h2> W O R D S P I R A T I O N ! </h2>
                    <img src={logo} className="App-logo" alt="logo" />
                 </header>
            </div>
        )
    }

}

export default StartNewGame;
