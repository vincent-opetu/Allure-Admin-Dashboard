import { userRequest } from '../../requestMethods'
import {
    storeStart, 
    storeSuccess, 
    storeFailure, 
    deleteStoreStart, 
    deleteStoreSuccess, 
    deleteStoreFailure, 
    getStoreStart, 
    getStoreSuccess, 
    getStoreFailure, 
    addStoreStart, 
    addStoreSuccess, 
    addStoreFailure, 
    updateStoreStart, 
    updateStoreSuccess, 
    updateStoreFailure,
} from '../storeSlice'

// GET all stores
export const fetchStores = async (dispatch) => {
    dispatch(storeStart());

    try {
        const res = await userRequest.get('/stores')
        dispatch(storeSuccess(res.data))
    } catch (err) {
        dispatch(storeFailure())
    }
}

// Get store
export const getStore = async (dispatch, storeId) => {
    dispatch(getStoreStart());

    try {
        const res = await userRequest.get(`/stores/${storeId}`)
        dispatch(getStoreSuccess(res.data))
    } catch (err) {
        dispatch(getStoreFailure())
    }
}
