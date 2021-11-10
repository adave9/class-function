import React from 'react';
import './App.css';
import Cars from './Cars.js';

class App extends React.Component{

    constructor(){
      super();
      this.state={color:"Red"}
    }
  render(){
        return(
              <div>
                  <p>Hello this is a {this.state.color} car.</p>
                  <Cars color="green"/>
              </div>
        );
    }
}
export default App;