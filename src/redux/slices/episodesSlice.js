import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodesService} from "../../services/episodesService";

const initialState = {
    episodes: [],
    errors: null,
    prevPage: null,
    nextPage: null,
    episodeByID: null
}

const allEpisodes = createAsyncThunk(
    'episodesSlice/all',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await episodesService.getAll(page)
            console.log(page);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const byID = createAsyncThunk(
    'episodesSlice/byID',
    async ({id}, thunkAPI) => {
        try {
            const {data} = await episodesService.byID(id)
            return data
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
                state.episodes = action.payload;
                state.nextPage = action.payload.info.next
                state.prevPage = action.payload.info.prev
            })
            .addCase(byID.fulfilled, (state, action) => {
                state.episodeByID = action.payload
            })
})

const {reducer: episodesReducer} = episodesSlice;


const episodesActions = {
    allEpisodes,
    byID
}

export {
    episodesActions,
    episodesReducer
}