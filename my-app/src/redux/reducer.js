import { GETCARDS_FAILURE, GETCARDS_REQUEST, GETCARDS_SUCCESS } from "./actionType";

const initialState={
    carddata:[],
    isLoding:false,
    isError:false
}

export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case GETCARDS_REQUEST:
            return {
  ...state,isLoding:true
            }
        case GETCARDS_SUCCESS:
            return {
  ...state, isLoding:false,carddata:payload 
            }
        case GETCARDS_FAILURE:
            return {
  ...state,isError:true ,isLoding:false
            }
    }
}