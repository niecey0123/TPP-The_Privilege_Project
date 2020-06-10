import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import JailHouse from './JailHouse';

class CopCar extends Component{
    constructor(){
        super();
        this.state ={
            funFactLoaded:false
        }
    }
   render(){
       const {funFactLoaded} =this.state;
       
        return (
            <div>
            { !funFactLoaded ?
            <div className="copContainer">
            
            <Icon onClick={()=> this.setState({funFactLoaded:true})} id="next">forward
            
             </Icon>

                <div className="scene3">
                 <span id="funFact">Fun Fact:</span>   
                 <p>A criminal record can reduce the likelihood of a callback or job offer by nearly 50 percent. The negative impact of a criminal record is twice as large for African American applicants. </p>

                </div>

            </div>
           :
           <JailHouse /> }
        </div>
          );
    }
}
 
export default CopCar;