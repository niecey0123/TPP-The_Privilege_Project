import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import FirstCop from './FirstCop';



class MyChatBot extends Component{

 
    constructor(props) {
      super(props);
    this.state = {
      chatEnded: this.props.chat
    }
    }
  
     componentDidMount(){
       console.log(this.props.chat);
       
     }
 
  render(){
    
    
    return(
    
      <div>
       
      {!this.props.chat ? 
        <ChatBot
        botAvatar="https://thesource.com/wp-content/uploads/2016/10/image11.jpeg"
        headerTitle	="Steph"

    steps={[
      {
        id: '1',
        message: 'Yurrrrrrr.....Wyd bro?',
        trigger: '2',
      },
      {
        id: '2',
        options: [
          { value: 1, label: 'Making my rounds', trigger: '6' },
          { value: 2, label: 'Chillen...whats the word?', trigger: '3' },
          { value: 3, label: 'Heading to work, why wassup?', trigger: '4' },
        ],
      },
      {
        id: '3',
        message: 'The fam having a BBQ later, you should come through',
        end: true,
      },
      {
        id: '4',
        message: 'Was gonna tell you to pull up but you heading to work. Hit me up when you get off bro.',
        end: true,
      },
      {
        id: '5',
        options: [
            { value: 1, label: 'yea, should be there in like 20 mins', trigger: '7' },
            { value: 2, label: 'nah bro.... I got some stuff to handle later on', trigger: '8' },
          ],
      },
      {
        id: '6',
        message: 'Oh iight, you still pulling up later?',
        trigger: '5',
      },
      {
        id: '7',
        message: 'say less',
        end: true,
      },
      {
        id: '8',
        message: 'Cool, hit my line ',
        end: true,
      },
    ]}
    
  />
  :
<FirstCop />


       }

  </div>
    )
  }
}

export default MyChatBot;