
import React, {Component} from 'react';
/*import Card from './Card.js';*/

/*import Counter from './Counter.js';*/

/*import Signup from './signupform';*/
/*import FormParent from './Parent.js' */
import News from './News.js';

class App extends Component{

   render(){
     return(
/*   Code for Card.js 
       <div className='App'>
        <Card name="Utkarsh Chaudhary" age={21} yoe = {0} />
        <Card name="Butny Chaudhary"    age={19} yoe={0} />
        <br />
        <Card name="Prashant Chaudhary" age ={20} yoe = {0}/>
        <Card name= "Happy Chaudhary" age={21} yoe = {0} />
       </div>

      */ 

       /*
       <div className='counter'>
          
          <Counter />
       </div>
       */
       <div className='container'>
           <h1>| Sport</h1>
       <div className='fl'>
       <News src={"https://free4kwallpapers.com/uploads/wallpaper/lionel-messi-wallpaper-640x480-mobile-wallpaper.jpg"} heading ="Messi strike denies Man Utd"  para ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>

       <News src={"https://img.etimg.com/thumb/msid-73167024,width-640,resizemode-4,imgsize-826182/the-cies-algorithm-some-surprises.jpg"} heading ="Newcastle beat fellow strugglers Everton"  para ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>

       <News src={"https://bonpic.com/download_img.php?dimg=4515&raz=640x480"} heading ="Team India Win The U19 World"  para ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
    </div>
         </div>
     )
   }
  }
export default App;