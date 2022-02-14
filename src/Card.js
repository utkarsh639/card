import React, {Component} from 'react';
import './App.css';

class Card extends Component{
      
  constructor(props){
    super(props);
  }
     render(){
       return(
         <>
         <div className="container">
          <div className='card'>
           <h1>This is the card components</h1>
           <p>My Name is:{this.props.name}</p>
           <p>My Age is:{this.props.age}</p>
           <p>My Year of Exprience is:{this.props.yoe}</p>
         </div>
         </div>
         </>
       )
     }
}
export default Card;
