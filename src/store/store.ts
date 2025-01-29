import { configureStore } from '@reduxjs/toolkit';
import episodeReducer from './episodeSlice';

export const store = configureStore({
    reducer: {
        episodes: episodeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
