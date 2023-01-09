import { userRequest } from "../../requestMethods";
import { productStart, productSuccess, productFailure } from "../productSlice";

// GET all products
export const fetchProducts = async (dispatch) => {
    dispatch(productStart());

    try {
        const res = await userRequest.get('/products')
        dispatch(productSuccess(res.data))
    } catch (err) {
        dispatch(productFailure())
    }
}