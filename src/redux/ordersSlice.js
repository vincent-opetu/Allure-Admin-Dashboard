import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
    name: "orders",
    initialState: {
        ordersList: [],
        order: null,
        isFetching: false,
        error: false
    },
    reducers: {
        // GET Orders
        ordersStart: (state) => {
            state.isFetching = true;
        },
        ordersSuccess: (state, action) => {
            state.isFetching = false;
            state.ordersList = action.payload;
        },
        ordersFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

        // DELETE product
        deleteOrderStart: (state) => {
            state.isFetching = true;
        },
        deleteOrderSuccess: (state, action) => {
            state.isFetching = false;
            let index = state.ordersList.findIndex((item) => item._id === action.payload)
            state.ordersList.splice(index, 1)
        },
        deleteOrderFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

        // SHOW a order
        getOrderStart: (state) => {
            state.isFetching = true;
        },
        getOrderSuccess: (state, action) => {
            state.isFetching = false;
            state.order = action.payload;
        },
        getOrderFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

        // UPDATE a success
        updateOrderStart: (state) => {
            state.isFetching = true;
        },
        updateOrderSuccess: (state, action, id) => {
            state.isFetching = false;
            let index = state.ordersList.findIndex((item) => item._id === id)
            state.ordersList[index] = action.payload
        },
        updateOrderFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    }
});

export const { 
    ordersStart, 
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
    updateOrderFailure, 
} = orderSlice.actions;
export default orderSlice.reducer;