
const ColorChooseReducer = (color= 'none', action) =>{
    //Reducer has switch to select the action 
    console.log("Inside Color Reducer"); 
    switch(action.type){
        case 'RED':
            console.log("red");
            return color = 'Red'; 
        case 'BLUE':
            return color = 'Blue';
        case 'GREEN':
            return color = 'Green';
        case 'ORANGE':
            return color = 'Orange';
        default:
            return color = 'none';

    } 
}
export default ColorChooseReducer;