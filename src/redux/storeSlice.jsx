import { createSlice } from '@reduxjs/toolkit';

const storeSlice = createSlice({
    name: "stores",
    initialState: {
        storeList: [],
        store: null,
        isFetching: false,
        error: false
    },
    reducers: {
        // GET Store
        storeStart: (state) => {
            state.isFetching = true;
        },
        storeSuccess: (state, action) => {
            state.isFetching = false;
            state.storeList = action.payload;
        },
        storeFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

        // DELETE Store
        deleteStoreStart: (state) => {
            state.isFetching = true;
        },
        deleteStoreSuccess: (state, action) => {
            state.isFetching = false;
            let index = state.storeList.findIndex((item) => item.id === action.payload)
            state.storeList.splice(index, 1)
        },
        deleteStoreFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

        // SHOW a Store
        getStoreStart: (state) => {
            state.isFetching = true;
        },
        getStoreSuccess: (state, action) => {
            state.isFetching = false;
            state.store = action.payload;
        },
        getStoreFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

        // Add a Store
        addStoreStart: (state) => {
            state.isFetching = true;
        },
        addStoreSuccess: (state, action) => {
            state.isFetching = false;
            state.storeList.push(action.payload);
        },
        addStoreFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

        // UPDATE a store
        updateStoreStart: (state) => {
            state.isFetching = true;
        },
        updateStoreSuccess: (state, action, id) => {
            state.isFetching = false;
            let index = state.storeList.findIndex((item) => item._id === id)
            state.storeList[index] = action.payload
        },
        updateStoreFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    }
});

export const { 
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
} = storeSlice.actions;
export default storeSlice.reducer;