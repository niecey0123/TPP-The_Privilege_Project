import React, { Component } from 'react';
import '../App.css';
import ScenerioContainer from './ScenerioContainer';


class NQuestion1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="question-container1 ">
                    <ScenerioContainer />
            </div>
         );
    }
}
 
export default NQuestion1;