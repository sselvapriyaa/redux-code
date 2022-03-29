
import './App.css';
//import {useState} from 'react';
//import {useState, useEffect} from 'react';
//import {connect} from 'react-redux';
//import {connect, useDispatch, useSelector} from 'react-redux';
//import {useSelector} from 'react-redux';
import {useSelector, useDispatch,} from 'react-redux';
import {red} from './action/ColorAction';
import {blue} from './action/ColorAction';
import {green} from './action/ColorAction';
import {orange} from './action/ColorAction';
//import {increment} from './action/CounterAction';
//import {decrement} from './action/CounterAction';
//import {useDispatch} from 'react-redux';
//import ColorReducer from './reducer/ColorReducer';

//import Post from './component/Post';

function App() {
  console.log('Inside UI');
  //console.log(props);
  //const counter = useSelector(state=>state);
  //const counterincrement = useSelector(state=>state);
  //const counterdecrement = useSelector(state=>state+1);
  //const dispatch = useDispatch();

  //const[color, setColor] = useState(null);
  //let dispatch = useDispatch();
  /*const colVal = useSelector(state => state.color);*/
  
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
const color = useSelector(state=>state);
const dispatch = useDispatch();
console.log(color);
  return (
    <div className="App"> 
     {/*<h1>My favorite color is: {colVal}</h1>*/}
     {/* <h1>My favorite color is: {color}</h1>*/}
    {/* <h1>Counter Increment: {counterincrement}</h1> 
     <button onClick = {()=>dispatch(increment())}>+</button>

     <h1>Counter Decrement: {counterdecrement}</h1> 
     <button onClick = {()=>dispatch(decrement())}>-</button>*/}
     <h1> Choose your favorite color </h1>
     {/*<input type ="radio"color name = "color" value = "red" onClick={handleChange}/>Red
     <input type ="radio" name = "color" value = "blue" onClick={handleChange}/>Blue
     <input type ="radio" name = "color" value = "green" onClick={handleChange}/>Green
     <input type ="radio" name = "color" value = "yellow" onClick={handleChange}/>Yellow*/}
     <input type ="radio" name = "colr" value = "red" onClick={()=>dispatch(red())}/>Red
     <input type ="radio" name = "colr" value = "blue" onClick={()=>dispatch(blue())}/>Blue
     <input type ="radio" name = "colr" value = "green" onClick={()=>dispatch(green())}/>Green
     <input type ="radio" name = "colr" value = "orange" onClick={()=>dispatch(orange())}/>Orange
     <h3>
          Your favorite color is:{color}
         
     </h3>

    </div>
  );
}
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
export default App;
