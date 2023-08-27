import {configureStore} from "@reduxjs/toolkit";
import {carReducer} from "./slices/carsSlice";
import {authReducer} from "./slices/authSlice";

const store = configureStore({
    reducer: {
        cars: carReducer,
        auth: authReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export {
    store
}