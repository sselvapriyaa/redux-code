export const myLogger = store => {
    return next =>{
        return action =>{
            console.log('Middlewarer Ran..')
            return next(action);
        }
    }
}
export default myLogger;