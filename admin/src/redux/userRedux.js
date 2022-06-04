import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState: {
        users:[],
        currentUser: null,
        isFetching: false,
        error: false
    },
    reducers: {
        loginStart: (state) =>{
            state.isFetching = true
        },
        loginSuccess: (state, action) =>{
            state.isFetching = false;
            state.currentUser = action.payload
        },
        loginFailure: (state) =>{
            state.isFetching = false;
            state.error = true
        },

        logout: (state) => {
            state.currentUser = null
            console.log(state.currentUser)
        },
        
        getUserStart: (state) => {
            state.isFetching = true;
            state.error = false
        },

        getUserSuccess: (state, action) => {
            state.isFetching = false;
            state.users = action.payload
        },
    
        getUserFailure: (state) =>{
            state.isFetching = false;
            state.error = true
        },

        addUserStart: (state) => {
            state.isFetching = true
            state.error = false
        },

        addUserSuccess: (state, action) => {
            state.isFetching = false
            state.users.push(action.payload)
        },

        addUserFailure: (state) => {
            state.isFetching = false
            state.error = true
        },

        deleteUserStart: (state) => {
            state.isFetching = false
            state.error = false
        },

        deleteUserSuccess: (state, action) => {
            state.isFetching = true
            state.users.splice(state.users.findIndex((item) => item._id === action.payload), 1)
        },

        deleteUserFailure: (state) => {
            state.isFetching = false
            state.error = true
        }
    }
})

export const { loginStart, loginSuccess, loginFailure,
    getUserStart,
    getUserSuccess,
    getUserFailure,
    logout,
    addUserStart,
    addUserSuccess,
    addUserFailure,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFailure
} = userSlice.actions;
export default userSlice.reducer
export const user = (state) => state.user.currentUser
