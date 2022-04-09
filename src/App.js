import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import MainComponent from './components/MainComponents';
import {Provider} from 'react-redux';//configure react app so redux store becomes available for all my react components
import {ConfigureStore} from './redux/configureStore';
const store=ConfigureStore();

class App extends Component {

  render(){
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div>
          <MainComponent/>
        </div>
      </BrowserRouter>
      </Provider>
      
    );

  }
   
 
  
}

export default App;
