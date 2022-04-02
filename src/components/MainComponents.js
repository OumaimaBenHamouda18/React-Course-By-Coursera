import React, { Component } from 'react';
import Menu from './MenuComponent.js';
import DishDetail from './DishDetailComponent.js';
import {DISHES} from '../shared/dishes.js';
import Header from './HeaderComponent.js'
import Footer from './FooterComponent.js'
import Home from './HomeComponent';
import Contact from './contact.js';
import About from './AboutComponent.js';
import {LEADERS} from '../shared/leaders.js';
import {COMMENTS} from '../shared/comments.js';
import {PROMOTIONS} from '../shared/promotions.js';
import {Routes, Route} from 'react-router-dom';

class MainComponent extends Component {
  constructor(props){
    super(props);
    this.state={
        dishes:DISHES,
        comments:COMMENTS,
        promotions:PROMOTIONS,
        leaders:LEADERS
    };
  }
  
  render(){
    const HomePage = () => {
      return(
          <Home 
          dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
          promotion={this.state.promotions.filter((promotion)=>promotion.featured)[0]}
          leader={this.state.leaders.filter((leader)=>leader.featured)[0]}/>
          //only if featured is true
      );
    }
  
    return (
      
      <div>
        <Header/>
        <Routes>
              <Route path="/home" element={<HomePage/>} />
              <Route path="/menu" element={<Menu dishes={this.state.dishes} />} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/about" element={<About leaders={this.state.leaders}/>} />
              <Route path='/menu/:dishId' element={<DishDetail comments={this.state.comments} dishes={this.state.dishes}/>} />

        </Routes>
        <Footer/>
      </div>
    );
  }
   
 
  
}

export default MainComponent;
