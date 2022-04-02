import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import MainComponent from './components/MainComponents';

class App extends Component {

  render(){
    return (
      <BrowserRouter>
        <div>
          <MainComponent/>
        </div>
      </BrowserRouter>
      
    );

  }
   
 
  
}

export default App;
