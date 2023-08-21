import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {charactersService} from "../../services/charactersService";

const initialState = {
    characters: [],
    errors: null
};

const allCharacters = createAsyncThunk(
    'charactersSlice/All',
    async (_, thunkAPI) => {
        try {
            const {data} = await charactersService.getAll()
            return data
        } catch (e) {
            thunkAPI.rejectWithValue(e.response.data)
        }

    }
)

const charactersSlice = createSlice({
    name: 'charactersSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(allCharacters.fulfilled, (state, action) => {
                state.characters = action.payload.results
            })
})

const {reducer: charactersReducer} = charactersSlice;
const charactersActions = {
    allCharacters
};

export {
    charactersReducer, charactersActions
}