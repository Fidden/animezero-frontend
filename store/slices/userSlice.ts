import {IUser} from '@/interfaces/IUser';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface UserState {
    token: string | null;
    email: string | null;
    info: IUser | null;
}

const initialState: UserState = {
    token: null,
    email: null,
    info: null
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken(state, action: PayloadAction<string | null>) {
            state.token = action.payload;
        },
        setEmail(state, action: PayloadAction<string>) {
            state.email = action.payload;
        },
        setInfo(state, action: PayloadAction<IUser>) {
            state.info = action.payload;
        },
        clear(state) {
            state.info = null;
            state.token = null;
            state.email = null;
        }
    }
});
export const userActions = userSlice.actions;
export default userSlice.reducer;
