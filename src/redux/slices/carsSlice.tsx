import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICar} from "../../interfaces/carInterface";
import {carService} from "../../services/carService";
import {AxiosError} from "axios";
import {IPagination} from "../../interfaces/paginationInterface";
import {RootState} from "../store";

interface IState {
    cars: ICar[],
    carForUpdate: ICar,
    page: number,
    next: { page: number },
    prev: { page: number }
}

const initialState: IState = {
    cars: [],
    carForUpdate: null,
    page: 1,
    next: null,
    prev: null
}

const getAll = createAsyncThunk<IPagination<ICar>, { page: number }>(
    'carSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll(page)
            return data
        } catch (e) {
            const err = e as AxiosError
            rejectWithValue(err.response.data)
        }
    }
)

const create = createAsyncThunk<void, ICar>(
    'carSlice/create',
    async (car, {rejectWithValue, dispatch, getState}) => {
        try {
            await carService.create(car)
            const {cars: {page}} = getState() as RootState;
            await dispatch(getAll({page}))
        } catch (e) {
            const err = e as AxiosError
            rejectWithValue(err.response.data)
        }
    }
)

const update = createAsyncThunk<void, { car: ICar, id: number }>(
    'carSlice/update',
    async ({car, id}, {rejectWithValue, dispatch, getState}) => {
        try {
            await carService.updateByID(car, id)
            const {cars: {page}} = getState() as RootState;
            await dispatch(getAll({page}))
        } catch (e) {
            const err = e as AxiosError
            rejectWithValue(err.response.data)
        }
    }
)

const remove = createAsyncThunk<void, { id: number }>(
    'carSlice/remove',
    async ({id}, {rejectWithValue, dispatch, getState}) => {
        try {
            await carService.deleteByID(id)
            const {cars: {page}} = getState() as RootState;
            await dispatch(getAll({page}))
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
        setCarForUpdate: (state, action: PayloadAction<{ car: ICar }>) => {
            state.carForUpdate = action.payload.car
        },
        incrementPage: (state) => {
            state.page += 1
        },
        decrementPage: (state) => {
            state.page -= 1
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload.items
                state.next = action.payload.next
                state.prev = action.payload.prev
            })
            .addCase(update.fulfilled, (state) => {
                state.carForUpdate = null
            })

})

const {reducer: carReducer, actions} = carSlice;

const carActions = {
    ...actions,
    getAll,
    create,
    update,
    remove
}

export {
    carReducer,
    carActions
}