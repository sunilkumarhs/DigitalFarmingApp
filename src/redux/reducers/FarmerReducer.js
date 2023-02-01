import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

const farmerReducer = createSlice({
    name: "farmers",
    initialState,

    reducers: {
        addfarmer: (state, action) => {
            state.push(action.payload);
            return state;
        },
    },
});

export const {addfarmer}=farmerReducer.actions;
export const FarmerReducer = farmerReducer.reducer;