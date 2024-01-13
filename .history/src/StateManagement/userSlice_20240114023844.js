import { createSlice } from "@reduxjs/toolkit";

const userSlice= createSlice({
    name:"user",
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
            return action.payload;
        },
        editUser:(state,action)=>{
            return null;
        }
    }
})
export const {addUser, editUser} = userSlice.actions;
export default userSlice.reducer;