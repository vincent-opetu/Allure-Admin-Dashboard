import { userRequest } from "../../requestMethods";
import { 
    productStart, 
    productSuccess, 
    productFailure,
    getProductStart,
    getProductSuccess,
    getProductFailure
} from "../productSlice";

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

// Get Product
export const getProduct = async (dispatch, productId) => {
    dispatch(getProductStart());

    try {
        const res = await userRequest.get(`/products/${productId}`)
        dispatch(getProductSuccess(res.data))
    } catch (err) {
        dispatch(getProductFailure())
    }
}