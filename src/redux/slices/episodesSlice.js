import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodesService} from "../../services/episodesService";

const initialState = {
    episodes: [],
    errors: null
}

const allEpisodes = createAsyncThunk(
    'episodesSlice/all',
    async (_, thunkAPI) => {
        try {
            const {data} = await episodesService.getAll()
            return data.results
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const episodesSlice = createSlice({
    name: "episodesSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(allEpisodes.fulfilled, (state, action) => {
                state.episodes = action.payload
            })
})

const {reducer: episodesReducer} = episodesSlice;


const episodesActions = {
    allEpisodes,
}

export {
    episodesActions,
    episodesReducer
}