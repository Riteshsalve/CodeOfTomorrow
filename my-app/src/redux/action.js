import axios from "axios"
import { GETCARDS_FAILURE, GETCARDS_REQUEST, GETCARDS_SUCCESS } from "./actionType"


export const getCards=()=>(dispatch)=>{
    dispatch({type:GETCARDS_REQUEST})
    axios.get(`https://jsonplaceholder.typicode.com/posts?page=1&&limit=10`)
    .then((res)=>dispatch({type:GETCARDS_SUCCESS,payload:res.data}))
    .catch(()=>dispatch({type:GETCARDS_FAILURE}))
}