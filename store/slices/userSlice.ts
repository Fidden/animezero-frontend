import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface UserState {
    token: string | null;
    email: string | null;
    isAuth: boolean;
}

const initialState: UserState = {
    token: null,
    email: null,
    isAuth: false
};

export const userSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setToken(state, action: PayloadAction<string>) {
            state.token = action.payload;
        },
        setEmail(state, action: PayloadAction<string>) {
            state.email = action.payload;
        },
        setAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload;
        }
    }
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
