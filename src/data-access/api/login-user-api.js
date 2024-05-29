import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiEndPoint } from "../api-path";
import axios from 'axios';

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (value, thunkAPI) => {
        try {
            const url = `${process.env.REACT_APP_API_URL}${ApiEndPoint.signIn}`;
            const { data } = await axios.post(url, value);
            return thunkAPI.fulfillWithValue(data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);