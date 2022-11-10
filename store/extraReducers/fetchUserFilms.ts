import {filmService} from '@/services/filmService';
import {RootState} from '@/store/store';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchUserFilms = createAsyncThunk(
    'users/fetchUserFilms',
    async (dispatch, Thunk) => {
        const store = Thunk.getState() as RootState;
        const token = store.user.token;
        try {
            if (!token) {
                return Promise.reject(new Error('token is null'));
            }

            return await Promise.all([
                filmService.getAllWatched(token),
                filmService.getAllWantWatch(token),
                filmService.getAllTracked(token)
            ]);
        } catch (e) {
            return Thunk.rejectWithValue(e);
        }
    }
);
