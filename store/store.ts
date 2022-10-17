import {userApi} from '@/store/api/userApi';
import modalReducer from '@/store/slices/modalSlice';
import userReducer from '@/store/slices/userSlice';
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        user: userReducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(userApi.middleware)
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
