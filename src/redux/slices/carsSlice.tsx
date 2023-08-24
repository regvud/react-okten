import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICar} from "../../interfaces/carInterface";
import {carService} from "../../services/carService";
import {AxiosError} from "axios";

interface IState {
    cars: ICar[],
    carForUpdate: ICar | null
}

const initialState: IState = {
    cars: [],
    carForUpdate: null
};

const getAll = createAsyncThunk<ICar[], void>(
    'carsSlice/getALl',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll()
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const deleteByID = createAsyncThunk<void, { id: number }>(
    'carsSlice/deleteByID',
    async ({id}, {rejectWithValue, dispatch}) => {
        try {
            await carService.deleteByID(id)
            await dispatch(getAll())
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const updateByID = createAsyncThunk<void, { car: ICar, id: number }>(
    'carsSlice/updateByID',
    async ({car, id}, {rejectWithValue, dispatch}) => {
        try {
            await carService.updateByID(car, id)
            await dispatch(getAll())
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const create = createAsyncThunk<void, { car: ICar }>(
    'carsSlice/create',
    async ({car}, {rejectWithValue, dispatch}) => {
        try {
            await carService.create(car)
            await dispatch(getAll())
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)


const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action: PayloadAction<{ car: ICar }>) => {
            state.carForUpdate = action.payload.car
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })
            .addCase(updateByID.fulfilled, (state, action) => {
                state.carForUpdate = null
            })
    }
})

const {reducer: carReducer, actions} = carsSlice;

const carActions = {
    ...actions,
    getAll,
    deleteByID,
    updateByID,
    create
}

export {
    carActions,
    carReducer,
}