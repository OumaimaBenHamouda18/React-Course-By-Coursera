import React, { Component } from 'react';
import Menu from './MenuComponent.js';
import DishDetail from './DishDetailComponent.js';
import Header from './HeaderComponent.js'
import Footer from './FooterComponent.js'
import Home from './HomeComponent';
import Contact from './contact.js';
import About from './AboutComponent.js';

import {Routes, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";

const mapStateToProps=(state)=>{
  //content of state will be avaiable as props
  return{
    dishes:state.dishes,
    comments:state.comments,
    promotions:state.promotions,
    leaders:state.leaders
  }
    
}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}
class MainComponent extends Component {
  constructor(props){
    super(props);
   
  }
 
  
  render(){
    const HomePage = () => {
      return(
          <Home 
          dish={this.props.dishes.filter((dish)=>dish.featured)[0]}
          promotion={this.props.promotions.filter((promotion)=>promotion.featured)[0]}
          leader={this.props.leaders.filter((leader)=>leader.featured)[0]}/>
          //only if featured is true
      );
    }
  
    return (
      
      <div>
        <Header/>
        <Routes>
              <Route path="/home" element={<HomePage/>} />
              <Route path="/menu" element={<Menu dishes={this.props.dishes} />} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/about" element={<About leaders={this.props.leaders}/>} />
              <Route path='/menu/:dishId' element={<DishDetail comments={this.props.comments} dishes={this.props.dishes}/>} />

        </Routes>
        <Footer/>
      </div>
    );
  }
   
 
  
}

export default withRouter(connect(mapStateToProps)(MainComponent));
