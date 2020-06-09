import React , {Component} from 'react';
import 'react-h5-audio-player/lib/styles.css';
import blueFace from '../audio/thotiana_.mp3'
import Icon from '@material-ui/core/Icon';
import MyChatBot from './MyChatBot';
import FirstCop from './FirstCop';


let audio = null;

class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isActive: true,
            play: null,
            chatReady: false,
            chatEnded: false,
         }
        //  this.url = "https://s21.aconvert.com/convert/p3r68-cdx67/fe1ds-yekle.mp3";
         this.audio = new Audio(blueFace);
         this.phoneRings = this.phoneRings.bind(this);
         this.toggleChat = this.toggleChat.bind(this);

    }

    handleHide = () =>{
    this.setState({
        isActive: false
    })
    }

 

    toggleChat = () => {

    // function that will toggle active/false
      this.setState({
          chatReady: true
      })
    }
 

    componentDidMount(){

  audio = setTimeout(() => this.phoneRings(), 10000)

    
  }

    componentWillUnmount() {
    clearTimeout(audio);
  }


    phoneRings = () => {
this.setState({ play: !this.state.play })
    console.log(this.audio);
this.state.play ? this.audio.play() : this.audio.pause();
  }
  
  
    render() { 

        return ( 
            <div>
                {this.state.isActive ?
            <div className="intro">
         <img id="user1" src ="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/09/19/11/passport-19-09-2.jpg?w968h681" alt="Black-man"/>
             <div className="intro2">
                <h1>Name:   Kareem Freeman</h1>
                <li>Age: 24 </li>
                <li>City: Brooklyn</li>
                <li>State: New York</li>
                <li>Ethnicity: Black</li>
                <p>The purpose of this simulation is to broaden the understanding of daily unlawfully encounters minorities of color face on a daily basis.
                    Our Justice System is suppose to protect and serve us all, However it has failed us as a nation. We must rise together in order to get through the strom.
                 </p>
                <button onClick={this.handleHide} className="gameBtn" >Begin</button>
            </div>
            </div>
                :  
                 <div id="iphone">

                            <audio autoPlay>
                                {this.state.play}
                                </audio>
                               <Icon onClick={()=>this.setState({chatEnded: true})}  color="disabled" className="disable" style={{ fontSize: 60 }}>phone_disabled</Icon>
                               {/* onClick={()=>this.setState({chatEnded: !chatEnded})}  */}
                                <Icon onClick={this.toggleChat} className="enable" style={{ fontSize: 60 }}>phone_enabled</Icon>
                                {/* {!chatEnded ? 
                <FirstCop />
            :
            null} */}
                   

                </div> }
                {this.state.chatReady ?
                                    <MyChatBot  chat={this.state.chatEnded}
                                    /> :
                                  null
                                    }
                
               
             
        </div>
        
         );
        }
}
 
export default Intro;