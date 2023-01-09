import { ordersStart, 
    ordersSuccess, 
    ordersFailure, 
    deleteOrderStart, 
    deleteOrderSuccess, 
    deleteOrderFailure, 
    getOrderStart, 
    getOrderSuccess, 
    getOrderFailure,  
    updateOrderStart, 
    updateOrderSuccess, 
    updateOrderFailure } from "../ordersSlice";
import { userRequest } from "../../requestMethods";

export const getOrders = async (dispatch) => {
    dispatch(ordersStart())

    try {
        const res = await userRequest.get('/orders')
        console.log("Orders", res)
        // dispatch(ordersSuccess())
    } catch (err) {
        dispatch(ordersFailure())
    }
}

