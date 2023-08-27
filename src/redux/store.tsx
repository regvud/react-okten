import {configureStore} from "@reduxjs/toolkit";
import {carReducer} from "./slices/carsSlice";

const store = configureStore({
    reducer: {
        cars: carReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export {
    store
}