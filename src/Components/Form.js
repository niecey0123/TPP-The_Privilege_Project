// import React, { Component } from 'react';
// import { quizData } from "./QuizData";
// import Button from '@material-ui/core/Button';


// class Form extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             currentQuestion: 0,
//             myAnswer: null,
//             options: [],
//             score: 0,
//             disabled: true,
//             isEnd: false
//         }
//     }
//     loadQuizData = () => {
//         // console.log(quizData[0].question)
//         this.setState(() => {
//           return {
//             questions: quizData[this.state.currentQuestion].question,
//             answer: quizData[this.state.currentQuestion].answer,
//             options: quizData[this.state.currentQuestion].options
//           };
//         });
//       };
    
//       componentDidMount() {
//         this.loadQuizData();
//       }

//       nextQuestionHandler = () => {
//         // console.log('test')
//         const { myAnswer, answer, score } = this.state;
    
//         if (myAnswer === answer) {
//           this.setState({
//             score: score + 1
//           });
//         }
    
//         this.setState({
//           currentQuestion: this.state.currentQuestion + 1
//         });
//         console.log(this.state.currentQuestion);
//       };

//       componentDidUpdate(prevProps, prevState) {
//         if (this.state.currentQuestion !== prevState.currentQuestion) {
//           this.setState(() => {
//             return {
//               disabled: true,
//               questions: quizData[this.state.currentQuestion].question,
//               options: quizData[this.state.currentQuestion].options,
//               answer: quizData[this.state.currentQuestion].answer
//             };
//           });
//         }
//       }

//       checkAnswer = answer => {
//         this.setState({ myAnswer: answer, disabled: false });
//       };
//       finishHandler = () => {
//         if (this.state.currentQuestion === quizData.length - 1) {
//           this.setState({
//             isEnd: true
//           });
//         }
//         if (this.state.userAnswer === this.state.correctAnswer) {
//           this.setState({
//             score: this.state.score + 1
//           });
//         }
//       };
//     render() { 
//         const { options, myAnswer, currentQuestion, isEnd } = this.state;
//         if (isEnd) {
//             return (
//               <div className="result">
//            </div>
//             );
//         } else {
//             return (
//               <div className="grandParent">
//                 <h1>{this.state.questions} </h1>
//                 {/* <span className="remain">{`Questions ${currentQuestion}  out of ${quizData.length -
//                   1} remaining `}</span> */}
//             <div className="parent">
//                 {options.map(option => (
//                       <button
//                     key={option.id}
//                     className={`yes 
//                ${myAnswer === option ? "selected" : null}
//                `}
//                     onClick={() => this.checkAnswer(option)}
//                   >
//                     {option}
//                   </button>
//                 ))}
//                 </div>
//                 <br></br>
//                 {currentQuestion < quizData.length - 1 && (
//                   <button
//                     className="ui inverted button"
//                     disabled={this.state.disabled}
//                     onClick={this.nextQuestionHandler}
//                   >
//                     Next
//                   </button>
                 
//                 )}
//                 {/* //adding a finish button */}
//                 {currentQuestion === quizData.length - 1 && (
//                   <Button  onClick={this.finishHandler}>
//                     Finish
//                   </Button>
//                 )}
//               </div>
//             );
//                 }
//         // return ( 
//         //     <form className="qTemplate">
//         //         <div className="grandParent">
//         //             <h2>Has someone ever crossed the street in order to <b>avoid</b> passing you?</h2>
//         //             <div className="parent">
//         //             <button id="yes"  onClick={() =>console.log( this.setState({ count: 1}))}>Yes</button>
                    
//         //             <div id="no"> No</div>
//         //             </div>
//         //         </div>

//         //     </form>
//         //  );
//     }
// }
 
// export default Form;