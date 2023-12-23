import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


/// create action
export const createUser = createAsyncThunk("createUSer", async (data,{rejectedWithValue})=>{
    try{
        const result = await axios.post(`${import.meta.env.VITE_BASE_URL}/crud`,data).then((res)=>{
            return res
        })
    }catch(err){
        return rejectedWithValue(err.response)
    }
    
})

//// show user
export const showUser = createAsyncThunk("showUser",async (data,{rejectedWithValue})=>{
    try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/crud`);
            const result = await res.json()
            return result
        
    }catch(err){
        return rejectedWithValue(err)
    }
})

const userSlice = createSlice({
    name:"user",
    initialState:{
        users:[],
        loading:false,
        error:null
    },
    extraReducers:{
        ///// create user
        [createUser.pending]:(state)=>{
            state.loading = true;
        },
        [createUser.fulfilled]:(state,action)=>{
            state.loading = false;
            state.users.push(action.payload);
        },
        [createUser.rejected]:(state,action)=>{
            state.loading = false;
            state.error = action.message
        },

        ///// show user data
        [showUser.pending]:(state)=>{
            state.loading = true;
        },
        [showUser.fulfilled]:(state,action)=>{
            state.loading = false;
            state.users = action.payload;
        },
        [showUser.rejected]:(state,action)=>{
            state.loading = false;
            state.error = action.message
        }
    }

})

export default userSlice.reducer