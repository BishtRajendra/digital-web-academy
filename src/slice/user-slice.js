import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from '../data-access/api/login-user-api';
import { getAllUsers } from '../data-access/api/get-all-users';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: null,
        message: null,
        statuscodes: null,
        loading: false,
        isLoggedIn: false, // Add login state
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.statuscodes = action.payload.statuscodes;
                state.message = action.payload.message;
                state.isLoggedIn = true; // Set isLoggedIn to true when login is successful
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.message = action.payload.message;
            })
            .addCase(getAllUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
                state.message = action.payload.message;
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.loading = false;
                state.message = action.payload.message;
            })
    },
});

export default userSlice.reducer;
