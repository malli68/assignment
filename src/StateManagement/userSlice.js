import { createSlice } from "@reduxjs/toolkit";

const userSlice= createSlice({
    name:"user",
    initialState:[]
    ,
    reducers:{
        addUser:(state,action)=>{
            state.push(action.payload);
        },
        editUser:(state,action)=>{
            return null;
        }
    }
})
export const {addUser, editUser} = userSlice.actions;
export default userSlice.reducer;