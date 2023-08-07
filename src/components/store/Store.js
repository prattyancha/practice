import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../reducer/TodoReducer";

const store = configureStore({
    reducer: {
        todo: todoReducer
    }
}); 

export default store;