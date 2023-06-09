import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios, {Axios} from "axios";

const fetchUserData = createAsyncThunk('auth/fetchUserData', async (userLogin:string) => {const response = await userLogin});
export const fetchRelatedPersons = createAsyncThunk<
    any,
    void,
    {
        rejectValue: any;
    }
    >('relatedPersons/fetch', async (_, { rejectWithValue, getState }) => {
    try {
        const response = await axios.post<any>(`http://localhost:7000/api/auth/login`, {
            login:'myName',
            password:'passNot123',
        });
        console.log('==========>response.data = ' , response)
        return response.data;
    } catch (err: any) {
        console.log('==========>err = ' , err)
    }
});

interface UserSlice {
    user:{
        login: string;
        password:string;
        mail: string;
    }
}

const initialState = {
    user:{
        login:null,
        password:null,
        mail:null,
    }
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchUserData.fulfilled, (state, action) => {
            state.user = action.payload;
        })
    }
})

export default userSlice.reducer;
