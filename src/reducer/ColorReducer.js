
const initialState = {
    color:[]
}

const ColorReducer = (state = initialState, action)=>{
    const newState = {...state};
    console.log('ADDING COLOR NEWSTATE....', newState.color);
    //console.log('Original State:',state)
    //console.log('Mutated State:',newState)
  
    switch(action.type){
        case 'ADD_COLOR':
          return{
            newState,
            color:[newState.color, action.payload]
            
          }
        case 'REMOVE_COLOR':
            let val = newState.color.flat(2);
    
            return{
                newState,
                color:[val.filter(value=>value!== action.payload)]                         
               }
             
        default:
            return newState;    
    };
       
}
export default ColorReducer;