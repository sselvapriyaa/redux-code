
const ColorChooseReducer = (color= 'color not selected', action) =>{
    console.log("Inside Color Reducer"); 
    switch(action.type){
        case 'RED':
            //console.log("red");
            return color = 'Red'; 
        case 'BLUE':
            return color = 'Blue';
        case 'GREEN':
            return color = 'Green';
        case 'ORANGE':
            return color = 'Orange';
        default:
            return color = 'color not selected';

    } 
}
export default ColorChooseReducer;