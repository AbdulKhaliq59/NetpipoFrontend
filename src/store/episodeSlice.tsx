import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Episode, PaginationInfo } from "../types/types";
import { client, GET_EPISODES } from "../services/api";


interface EpisodeState {
    episodes: Episode[];
    paginationInfo: PaginationInfo | null;
    loading: boolean;
    error: string | null;
    currentPage: number;
    filter: {
        name?: string;
        episode?: string;
    };
}

const initialState: EpisodeState = {
    episodes: [],
    paginationInfo: null,
    loading: false,
    error: null,
    currentPage: 1,
    filter: {},
};

export const fetchEpisodes = createAsyncThunk(
    'episodes/fetchEpisodes',
    async ({ page, filter }: { page: number; filter?: { name?: string; episode?: string } }) => {
        const response = await client.query({
            query: GET_EPISODES,
            variables: { page, filter },
        });
        console.log("Response", response.data.episodes);

        return response.data.episodes;
    }
);

const episodeSlice = createSlice({
    name: 'episodes',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
            state.currentPage = 1;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEpisodes.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchEpisodes.fulfilled, (state, action) => {
                state.loading = false;
                state.episodes = action.payload.results;
                state.paginationInfo = action.payload.info;
            })
            .addCase(fetchEpisodes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch episodes';
            });
    },
});

export const { setFilter, setCurrentPage } = episodeSlice.actions;
export default episodeSlice.reducer;