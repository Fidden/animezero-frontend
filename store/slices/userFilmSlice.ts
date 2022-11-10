import {fetchUserFilms} from '@/store/extraReducers/fetchUserFilms';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface State {
    watched: number[];
    wantWatch: number[];
    tracked: number[];
}

const initialState: State = {
    watched: [],
    wantWatch: [],
    tracked: []
};

const userFilmSlice = createSlice({
    name: 'userFilm',
    initialState,
    reducers: {
        setWatched: (state, action: PayloadAction<number[]>) => {
            state.watched = action.payload;
        },
        addWatched: (state, action: PayloadAction<number>) => {
            state.watched.push(action.payload);
        },
        removeWatched: (state, action: PayloadAction<number>) => {
            state.watched = state.watched.filter((id) => id !== action.payload);
        },
        setWantWatch: (state, action: PayloadAction<number[]>) => {
            state.wantWatch = action.payload;
        },
        addWantWatch: (state, action: PayloadAction<number>) => {
            state.wantWatch.push(action.payload);
        },
        removeWantWatch: (state, action: PayloadAction<number>) => {
            state.wantWatch = state.wantWatch.filter(item => item !== action.payload);
        },
        setTracked: (state, action: PayloadAction<number[]>) => {
            state.tracked = action.payload;
        },
        addTracked: (state, action: PayloadAction<number>) => {
            state.tracked.push(action.payload);
        },
        removeTracked: (state, action: PayloadAction<number>) => {
            state.tracked = state.tracked.filter(item => item !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserFilms.fulfilled, (state, action) => {
            if (action.payload?.length) {
                state.watched = action.payload[0];
                state.wantWatch = action.payload[1];
                state.tracked = action.payload[2];
            }
        });
    }
});

export default userFilmSlice.reducer;
export const userFilmActions = userFilmSlice.actions;
