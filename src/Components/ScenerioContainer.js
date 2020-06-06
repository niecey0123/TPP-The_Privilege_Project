import React from 'react';

import {scenerioData} from './ScenerioData'
import ScenerioList from './ScenerioList'

class ScenerioContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      chapters:[]
     }
  }
  loadData = ()=>{
    this.setState(() => {
      return {
        chapters: scenerioData

      };

    })}

    componentDidMount() {
      this.loadData();      
      console.log(scenerioData);

    }
  render() { 
    const {chapters}= this.state;
    return (  
      <ul className="card-container">
      {chapters.map((chapter) =>
        <ScenerioList key={chapter.id}
                  value={chapter} />
      )}
    </ul>
    );
  }
}
 
export default ScenerioContainer;