import { createSlice } from "@reduxjs/toolkit";

const userSlice= createSlice({
    name:"user",
    initialState:{
        user:0
    },
    reducers:{
        addUser:(state,action)=>{
            return state + 1;
        },
        editUser:(state,action)=>{
            return null;
        }
    }
})
export const {addUser, editUser} = userSlice.actions;
export default userSlice.reducer;