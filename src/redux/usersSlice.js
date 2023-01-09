import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "users",
    initialState: {
        usersList: [],
        user: null,
        isFetching: false,
        error: false
    },
    reducers: {
        // GET Users
        usersStart: (state) => {
            state.isFetching = true;
        },
        usersSuccess: (state, action) => {
            state.isFetching = false;
            state.usersList = action.payload;
        },
        usersFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

        // DELETE user
        deleteUserStart: (state) => {
            state.isFetching = true;
        },
        deleteUserSuccess: (state, action) => {
            state.isFetching = false;
            let index = state.usersList.findIndex((item) => item._id === action.payload)
            state.usersList.splice(index, 1)
        },
        deleteUserFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

        // SHOW a user
        getUserStart: (state) => {
            state.isFetching = true;
        },
        getUserSuccess: (state, action) => {
            state.isFetching = false;
            state.user = action.payload;
        },
        getUserFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

        // UPDATE a user
        updateUserStart: (state) => {
            state.isFetching = true;
        },
        updateUserSuccess: (state, action, id) => {
            state.isFetching = false;
            let index = state.usersList.findIndex((item) => item._id === id)
            state.usersList[index] = action.payload
        },
        updateUserFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    }
});

export const { 
    usersStart, 
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
    updateUserFailure, 
} = userSlice.actions;
export default userSlice.reducer;