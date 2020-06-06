import React from 'react';
import ChatBot from 'react-simple-chatbot';


const MyChatBot = ()=>{
    return(
        <ChatBot
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
    )
}

export default MyChatBot;