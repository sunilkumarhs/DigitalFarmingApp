import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { FarmerReducer } from "./reducers/FarmerReducer";
import {PdfReducer} from "./reducers/PdfReducer";

const rootReducer = combineReducers({
    pdf : PdfReducer,
    farm : FarmerReducer,
  })

const store = configureStore({
    reducer: rootReducer,
})

export default store;