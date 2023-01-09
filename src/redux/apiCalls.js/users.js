import { usersStart, 
    usersSuccess, 
    usersFailure, 
    deleteUserStart, 
    deleteUserSuccess, 
    deleteUserFailure, 
    getUserStart, 
    getUserSuccess, 
    getUserFailure,  
    updateUserStart, 
    updateUserSuccess, 
    updateUserFailure, } from "../usersSlice";
import { userRequest } from "../../requestMethods";

export const getUsers = async (dispatch) => {
    dispatch(usersStart())

    try {
        const res = await userRequest.get('/users')
        console.log("Users", res)
        // dispatch(usersSuccess())
    } catch (err) {
        dispatch(usersFailure())
    }
}