const counterReducer = (state = 0, action) =>{
    console.log('Inside Reducer');
    switch(action.type){
        case 'INCREMENT':
            return state+1;
        case 'DECREMENT':
            return state-1;
        
    }
}
export default counterReducer;

