import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {PdfReducer} from "./reducers/PdfReducer";

const rootReducer = combineReducers({
    pdf : PdfReducer,
  })

const store = configureStore({
    reducer: rootReducer,
})

export default store;