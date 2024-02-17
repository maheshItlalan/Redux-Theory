import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";

// react store
export const store = configureStore({
    reducer:{
        counter : counterReducer, 
    },
});

//function in store as with return type "getState"
export type RootState = ReturnType<typeof store.getState>;

//
export type AppDispatch = typeof store.dispatch;
