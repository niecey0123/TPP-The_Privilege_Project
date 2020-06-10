import React, { Component } from 'react';

import '../App.css'
import {convoData} from './ConvoData'
import CopCar from './CopCar';

class FirstCop extends Component{
    state = {
        currentQuestion: 0,
        myAnswer: null,
        options: [],
        score: 0,
        disabled: true,
        isEnd: false
      };

      loadQuizData = () => {
        // console.log(quizData[0].question)
        this.setState(() => {
          return {
            questions: convoData[this.state.currentQuestion].question,
            answer: convoData[this.state.currentQuestion].answer,
            options: convoData[this.state.currentQuestion].options
          };
        });
      };

      componentDidMount() {
        this.loadQuizData();
        
      }
    
    nextQuestionHandler = () => {
        // console.log('test')
        const { myAnswer, answer, score } = this.state;
    
        if (myAnswer === answer) {
          this.setState({
            score: score + 1
          });
        }
    
        this.setState({
          currentQuestion: this.state.currentQuestion + 1
        });
        console.log(this.state.currentQuestion);
      };

     componentDidUpdate(prevProps, prevState) {
        if (this.state.currentQuestion !== prevState.currentQuestion) {
          this.setState(() => {
            return {
              disabled: true,
              questions: convoData[this.state.currentQuestion].question,
              options: convoData[this.state.currentQuestion].options,
              answer: convoData[this.state.currentQuestion].answer
            };
          });
        }
      }
      checkAnswer = answer => {
        this.setState({ myAnswer: answer, disabled: false });
      };

      finishHandler = () => {
        if (this.state.currentQuestion === convoData.length - 1) {
          this.setState({
            isEnd: true
          });
        }
        if (this.state.userAnswer === this.state.correctAnswer) {
          this.setState({
            score: this.state.score + 1
          });
        }
      };
      
render(){    
    const { options, myAnswer, currentQuestion, isEnd } = this.state;
    console.log(options);

    if (isEnd) {
        return (
         
           <CopCar />
          
        );
      } else {
return(
    <div className="scene2">
       
        
        <div className="thought">
            <p>{this.state.questions}</p>
           
        </div>
        <div className="copAns">
        {options.map(option => (
            <p
              key={option.toString()}
              className={`options
         ${myAnswer === option ? "selected" : null}
         `}
              onClick={() => this.checkAnswer(option)}
            >
              {option}
            </p>
          ))}
     
        

        </div>
             {currentQuestion < convoData.length - 1 && (
            <button
              className="copAnsBtn "
              disabled={this.state.disabled}
              onClick={this.nextQuestionHandler}
            >
              Next
            </button> 
          )} 
           {currentQuestion === convoData.length - 1 && (
            <button className="copAnsBtn" onClick={this.finishHandler}>
              Finish
            </button>
          )}
    </div>
)
}
}
}


export default FirstCop;