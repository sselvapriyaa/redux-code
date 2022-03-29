import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {fetchPostAction} from '../action/fetchPostAction';
import {useSelector} from 'react-redux';

function Post(props){
    const dispatch = useDispatch();
    const value = useSelector(state=>state);
    useEffect(()=> {
        dispatch(fetchPostAction());
    },[])
     return(
         <div>
             <h1>Data from API call :{value}</h1>
         </div>
     )

}
export default Post;