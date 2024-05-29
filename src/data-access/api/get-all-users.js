import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiEndPoint } from "../api-path";
import axios from "axios";

export const getAllUsers = createAsyncThunk(
    "user/getAllUsers",
    async (value, thunkApi) => {
        try {
            const url = `${process.env.REACT_APP_API_URL}${ApiEndPoint.getAllUsers}`;
            const { data } = await axios.get(url);
            return thunkApi.fulfillWithValue(data);
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)