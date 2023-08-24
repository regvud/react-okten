import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICar} from "../../interfaces/carInterface";
import {carService} from "../../services/carService";
import {AxiosError} from "axios";

interface IState {
    cars: ICar[],
    carForUpdate: ICar
}

const initialState: IState = {
    cars: [],
    carForUpdate: null
}

const getAll = createAsyncThunk<void, ICar[]>(
    'carSlice/getAll',
    async (data, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll()
            return data
        } catch (e) {
            const err = e as AxiosError
            rejectWithValue(err.response.data)
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action: PayloadAction<ICar>) => {
            state.carForUpdate = action.payload
        }
    },
    extraReducers: {}
})

const {reducer: carReducer, actions} = carSlice;

const carActions = {
    ...actions
}

export {
    carReducer
}