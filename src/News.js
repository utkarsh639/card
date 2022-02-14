import React, {Component} from 'react';
import './App.css';

class News extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
              <div className='container'>
                  <div className="sport">
                      <div className="sportflex">
                    <img src={this.props.src} className="image" />
                  <h2>{this.props.heading}</h2>
                  <p>{this.props.para}</p>
                      </div>

                  </div>
              </div>
            </>
        )
    }
}

export default News ; 