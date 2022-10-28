import {RootState} from '@/store/store';
import {fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {BaseQueryApi} from '@reduxjs/toolkit/src/query/baseQueryTypes';

export default fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000/api',
    prepareHeaders: (headers: Headers, {getState}: Pick<BaseQueryApi, 'getState'>) => {
        // https://redux-toolkit.js.org/rtk-query/api/fetchBaseQuery#setting-default-headers-on-requests
        const token = (getState() as RootState).user.token;
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        headers.set('Content-Type', 'application/json');
        headers.set('Accept', 'application/json');
        return headers;
    }
});
