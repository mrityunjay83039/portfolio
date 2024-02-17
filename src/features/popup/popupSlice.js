import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:false
}

const popupSlice = createSlice({
    name:"popup",
    initialState,
    reducers:{
        showPopup:(state)=>{
            state.value = true
        },
        closePopup:(state)=>{
            state.value = false;
        }
    }
})

export const {showPopup, closePopup} = popupSlice.actions;
export default popupSlice.reducer;