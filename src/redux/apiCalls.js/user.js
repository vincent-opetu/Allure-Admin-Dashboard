import { loginFailure, loginStart, loginSuccess, logoutStart } from "../userSlice";
import { userRequest } from "../../requestMethods";


export const adminLogin = async (dispatch, user) => {
    dispatch(loginStart());

    try {
        const res = await userRequest.post('/users/login', user)
        dispatch(loginSuccess(res.data))
    } catch (err) {
        dispatch(loginFailure())
    }
}

export const adminLogout = async (dispatch, email) => {
    try {
       await userRequest.post('/users/logout', {email: email})
       dispatch(logoutStart())
    } catch (err) {
        console.log(err.message)
    }
}
