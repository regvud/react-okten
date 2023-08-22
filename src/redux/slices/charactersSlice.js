import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {charactersService} from "../../services/charactersService";

const initialState = {
    episodeCharacters: [],
    errors: null
};

const getMultipleCharacters = createAsyncThunk(
    'charactersSlice/getMultipleCharacters',
    async ({ids}, thunkAPI) => {
        try {
            const {data} = await charactersService.byIDs(ids)
            return data

        } catch (e) {
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

// const byID = createAsyncThunk(
//     'charactersSlice/All',
//     async ({id}, thunkAPI) => {
//         try {
//             const {data} = await charactersService.byID(id)
//             return data
//         } catch (e) {
//             thunkAPI.rejectWithValue(e.response.data)
//         }
//
//     }
// )

const charactersSlice = createSlice({
    name: 'charactersSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getMultipleCharacters.fulfilled, (state, action) => {
                state.episodeCharacters = action.payload
            })
    }
})

const {reducer: charactersReducer} = charactersSlice;
const charactersActions = {
    getMultipleCharacters
};

export {
    charactersReducer,
    charactersActions
}