import { api } from "./api"
import * as ActionType from "./constant";
export const actListOrder=()=>{
  
    return (dispatch)=>{
        dispatch(actListOrderRequest());
        api.get("/orders")
        .then((result)=>{
            console.log("run");
            console.log(result.data);

        })
        .catch(
            (err)=>{
                dispatch(actListOrderFaied(err));
                
            }
           
        );
    }

}
const actListOrderRequest=()=>{
    return{
        type:ActionType.LIST_ORDER_REQUEST,
    }
}
const actListOrderSucces=()=>{
    return{
        type:ActionType.LIST_ORDER_SUCCESS,
        payload:data
    }

}
const actListOrderFaied=()=>{
    return{
        type:ActionType.LIST_ORDER_FAILED,
        payload:err,
    }
}