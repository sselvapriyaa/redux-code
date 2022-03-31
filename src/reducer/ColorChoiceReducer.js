const initialState={
    color: 'White'
}

const ColorChoiceReducer = (state = initialState, action) =>{
    const newState = {...state};
    switch(action.type){
        case 'CHANGE_COLOR':
        newState.color = action.payload;
        break;
        default:
            return newState;
    } 
    console.log('NewState',newState);
    return newState;
    }
    export default ColorChoiceReducer;
