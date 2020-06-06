import React , {Component} from 'react';
import 'react-h5-audio-player/lib/styles.css';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import PhoneDisabledIcon from '@material-ui/icons/PhoneDisabled';

let audio = null;

class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isActive: true,
            play: null
         }
         this.url = "https://s21.aconvert.com/convert/p3r68-cdx67/6g56t-5x91q.mp3";
         this.audio = new Audio(this.url);
        //  this.phoneRings = this.phoneRings.bind(this);
    }

  handleHide = () =>{
    this.setState({
        isActive: false
    })
}

  componentDidMount(){

  audio = setTimeout(() => this.phoneRings(), 10000)
 
    
  }

  componentWillUnmount() {
    clearTimeout(audio);
  }

  phoneRings = ()=> {
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
                                <PhoneEnabledIcon />
                                <PhoneDisabledIcon />
                            {/* <source src="https://s21.aconvert.com/convert/p3r68-cdx67/6g56t-5x91q.mp3" type="audio/mpeg" /> */}
                            </audio>

                </div> }
        </div>
         );
        }
}
 
export default Intro;