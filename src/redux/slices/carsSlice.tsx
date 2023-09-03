import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {carService} from "../../services/carService";
import {AxiosError} from "axios";
import {RootState} from "../store";
import {ICar, ICarPhoto, IPagination} from "../../interfaces";

interface IState {
    cars: ICar[],
    carForUpdate: ICar,
    page: number,
    next: { page: number },
    prev: { page: number },
    carPhoto: ICarPhoto
}

const initialState: IState = {
    cars: [],
    carForUpdate: null,
    page: 1,
    next: null,
    prev: null,
    carPhoto: null
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

const insertPhoto = createAsyncThunk<void, { id: number, photo: ICarPhoto }>(
    'carSlice/insertPhoto',
    async ({id, photo}, {rejectWithValue, dispatch, getState}) => {
        try {
            await carService.insertPhotoByID(id, photo)
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
        setCarPhoto: (state, action: PayloadAction<{ photo: ICarPhoto }>) => {
            state.carPhoto = action.payload.photo
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
            .addCase(insertPhoto.fulfilled, (state) => {
                state.carPhoto = null
            })

})

const {reducer: carReducer, actions} = carSlice;

const carActions = {
    ...actions,
    getAll,
    create,
    update,
    remove,
    insertPhoto
}

export {
    carReducer,
    carActions
}