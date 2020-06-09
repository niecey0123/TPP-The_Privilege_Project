import React, { Component } from 'react';

import '../App.css'
import Intro from './Intro';

class StopAndFrisk extends Component {
    constructor(props) {
        super(props);
        this.state = {gameStarted: true  }
    }
    handleStart = () =>{
        this.setState({
            gameStarted: false
        })
    }
    render() { 
        return ( 
          
            <div className="deli">
               {this.state.gameStarted ?
                <Intro  game={this.handleStart} />
                  : null} 
              
               
            </div>
         );
    }
}
 
export default StopAndFrisk;