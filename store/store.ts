import {filmsApi} from '@/store/api/filmsApi';
import {userApi} from '@/store/api/userApi';
import modalReducer from '@/store/slices/modalSlice';
import userFilmReducer from '@/store/slices/userFilmSlice';
import userReducer from '@/store/slices/userSlice';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['user', 'userFilm'],
    blacklist: ['modal']
};

const rootReducer = combineReducers({
    modal: modalReducer,
    user: userReducer,
    userFilm: userFilmReducer,
    [userApi.reducerPath]: userApi.reducer,
    [filmsApi.reducerPath]: filmsApi.reducer
});

const reducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
            .concat(userApi.middleware)
            .concat(filmsApi.middleware)
});


export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
