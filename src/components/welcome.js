import React, {Component} from 'react';
class Welcome extends  Component{
    render(){
        return(
            <h1> Welcome {this.props.name}known as  {this.props.heroName}, children: {this.props.children}</h1>
        );

    }
}
export default Welcome;