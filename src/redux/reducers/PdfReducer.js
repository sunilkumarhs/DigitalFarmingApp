import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

const pdfReducer = createSlice({
    name: "files",
    initialState,

    reducers: {
        addfile: (state, action) => {
            state.push(action.payload);
            return state;
        },
    },
});

export const {addfile}=pdfReducer.actions;
export const PdfReducer = pdfReducer.reducer;