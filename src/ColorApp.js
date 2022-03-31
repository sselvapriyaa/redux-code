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