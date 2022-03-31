
//import './App.css';
//import {useState} from 'react';
//import {useEffect} from 'react';
//import {connect} from 'react-redux';
//import {connect, useDispatch, useSelector} from 'react-redux';
//import {useSelector} from 'react-redux';
//import {useSelector, useDispatch,} from 'react-redux';
//import {red} from './action/ColorAction';
//import {blue} from './action/ColorAction';
//import {green} from './action/ColorAction';
//import {orange} from './action/ColorAction';
//import {increment} from './action/CounterAction';
//import {decrement} from './action/CounterAction';
//import {useDispatch} from 'react-redux';
//import ColorReducer from './reducer/ColorReducer';
//import App from './App';
//import Post from './component/Post';
//import './style.css';
//import styles from './mystyle.module.css';
//function App(props) {
 // console.log('Inside UI');
 // console.log(props);
  //const counter = useSelector(state=>state);
  //const counterincrement = useSelector(state=>state);
  //const counterdecrement = useSelector(state=>state+1);
//import User from './User';
//import { useEffect } from "react";
import {useEffect} from 'react';
import {useSelector, useDispatch,} from 'react-redux';
import './style.css';

const containerStyle = {
  backgroundColor: "lightpink",
  marginTop: "30px",
  paddingBottom: "300px"
} 
function App(props){

  //const[color, setColor] = useState(null);
  //let dispatch = useDispatch();
  let dispatch = useDispatch();
  const colorVal = useSelector(state => state.color);
  console.log("COLVAL ", colorVal.flat(2));
  useEffect(() => {
  console.log(props);
    
  })


  //console.log('Outside of handle change: ', colorVal);
  const handleChange = (e) => {
    if (e.target.checked){
      // 'ADD_COLOR'
      dispatch({
        type: 'ADD_COLOR',
        payload: e.target.value
      })
    } 
    else {
      // 'REMOVE_COLOR'
      dispatch({
          type: 'REMOVE_COLOR',
          payload: e.target.value
      })
    }
  }
  return (
    <div className = "App" style = {containerStyle}> 
    <h1 className = "heading" style = {{backgroundColor: "lightgreen", color:"black", fontStyle: "italic"}}>Choose your favorite color </h1>
    <br></br>    
     <br></br> 
    
     <hr></hr> 
     <input type ="checkbox" className = "inputStyle" name = "color" value = "Red"  onClick={handleChange}/>Red 
     <input type ="checkbox" className = "inputStyle" name = "color" value = "Blue" onClick={handleChange}/>Blue 
     <input type ="checkbox" className = "inputStyle" name = "color" value = "Green" onClick={handleChange}/>Green
     <input type ="checkbox" className = "inputStyle" name = "color" value = "Orange" onClick={handleChange}/>Orange 
     <hr></hr> 
     <br></br>    
     <br></br>  
      
     <h2 style = {{backgroundColor: "black", color: "cyan"}}>Your favorite color is: {colorVal} </h2>  
    </div>
  );
}
export default App;

  /*useEffect(() => {
    console.log(props);
  },[])
  const handleChange = (e)=>{
    setColor(e.target.value);
  }*/
   /* dispatch({
      type: "CHANGE_COLOR",
      payload:e.target.value
    })
  }*/
//methods used for color selector radio button
//const color = useSelector(state=>state);
//const dispatch = useDispatch();
//console.log(color);
/*const containerStyle = {
  backgroundColor: "lightpink",
  marginTop: "30px",
  paddingBottom: "300px"
} */
//function App(props){

  //const[color, setColor] = useState(null);
  //let dispatch = useDispatch();
  /*let dispatch = useDispatch();
  const colorVal = useSelector(state => state.color);
  console.log("COLVAL ", colorVal.flat(2));
  useEffect(() => {
  console.log(props);
    
  })
  

  //console.log('Outside of handle change: ', colorVal);
  const handleChange = (e) => {
    if (e.target.checked){
      // 'ADD_COLOR'
      dispatch({
        type: 'ADD_COLOR',
        payload: e.target.value
      })
    } 
    else {
      // 'REMOVE_COLOR'
      dispatch({
          type: 'REMOVE_COLOR',
          payload: e.target.value
      })
    }
  }*/
  /*const[user, setUser] = useState(null);
  const[error, setError] = useState('');

  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((response)=> response.json())
      .then((user)=> setUser(user))
      .catch((error) => setError(error.message));
  },[]);
      if(error){
        return <span>{error}</span>
      }
      return(
        <div className="App">
            {user ? <User user = {user}/> :<span>Loading..</span>}
        </div>
      );
      }*/
   /*return (
    window.fetch = jest.fn(() => {
      const user = {name : 'JACK', email: 'jack@abc.com'}
      return Promise.resolve({
        json: () => Promise.resolve(user),
    });
  
    test('user name is rendered',  async() => {
      render(<App />);
    
      const userName = await screen.findByText('Jack');
      expect(userName).toBeInTheDocument();*/
    /*<div className = "App">
     <ul className= 'animals'>
        <li>Lion</li>
        <li>Tiger</li>
        <li>Cat</li>
        <li>Dog</li>
   </ul>  
      {/*<h1>Hello World from React!</h1>
   </div>*/
  /*<div className = "App" style = {containerStyle}> 
  <h1 className = "heading" style = {{backgroundColor: "lightgreen", color:"black", fontStyle: "italic"}}>Choose your favorite color </h1>*/
    /* <h1> Choose your favorite color </h1>*/
    /* <h1>Counter Increment: {counterincrement}</h1> 
     <button onClick = {()=>dispatch(increment())}>+</button>

     <h1>Counter Decrement: {counterdecrement}</h1> 
     <button onClick = {()=>dispatch(decrement())}>-</button>
     <h1> Choose your favorite color </h1>
     <input type ="radio"color name = "color" value = "red" onClick={handleChange}/>Red
     <input type ="radio" name = "color" value = "blue" onClick={handleChange}/>Blue
     <input type ="radio" name = "color" value = "green" onClick={handleChange}/>Green
     <input type ="radio" name = "color" value = "yellow" onClick={handleChange}/>Yellow
     <input type ="radio" name = "color" value = "red" onClick={()=>dispatch(red())}/>Red
     <input type ="radio" name = "color" value = "blue" onClick={()=>dispatch(blue())}/>Blue
     <input type ="radio" name = "color" value = "green" onClick={()=>dispatch(green())}/>Green
     <input type ="radio" name = "color" value = "orange" onClick={()=>dispatch(orange())}/>Orange
     <h3>
          Your favorite color is: {color}
         
</h3>*/
    /* <br></br>    
     <br></br> 
    
     <hr></hr> 
     <input type ="checkbox" className = "inputStyle" name = "color" value = "Red"  onClick={handleChange}/>Red 
     <input type ="checkbox" className = "inputStyle" name = "color" value = "Blue" onClick={handleChange}/>Blue 
     <input type ="checkbox" className = "inputStyle" name = "color" value = "Green" onClick={handleChange}/>Green
     <input type ="checkbox" className = "inputStyle" name = "color" value = "Orange" onClick={handleChange}/>Orange 
     <hr></hr> 
     <br></br>    
     <br></br>  
      

     <h2 style = {{backgroundColor: "black", color: "cyan"}}>Your favorite color is: {colorVal} </h2>  
    </div>
  );
}*/
/*const mapStateToProps = state => {
  return{
    data: state
  }
}
const mapDispatchToProps = dispatch =>{
    return{
      changeColor: (color) => dispatch({
        type: "CHANGE_COLOR", payload: color
      })
    }
} */

//It will connect a react component to a redux store
//export default connect(mapStateToProps,mapDispatchToProps)(App);
//export default App;
