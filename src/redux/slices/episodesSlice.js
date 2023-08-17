import {createAsyncThunk} from "@reduxjs/toolkit";
import {episodesService} from "../../services/episodesService";


const allEpisodes = createAsyncThunk(
    'episodesSlice/all',
    async (_, thunkAPI) => {
        try {
            const {data} = await episodesService.getAll()
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const initialState = {
    episodes: [],
    errors: null
}
const episodesSlice = {
    name: "episodesSlice",
    initialState,
    reducers: {
        // setEpisodes: (state, action) => {
        //     state.episodes = action.payload
        // }
    },
    extraReducers: builder =>
        builder
            .addCase(allEpisodes.fulfilled, (state, action) => {
                state.episodes = action.payload
            })
}

const {reducer: episodesReducer} = episodesSlice;


const episodesActions = {
    allEpisodes,
}

export {
    episodesActions,
    episodesReducer
}