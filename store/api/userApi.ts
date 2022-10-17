import {IResponse} from '@/interfaces/IResponse';
import {RootState} from '@/store/store';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BaseQueryApi} from '@reduxjs/toolkit/src/query/baseQueryTypes';

export interface IRegisterRequest {
    login: string;
    email: string;
    password: string;
    password_repeat: string;
}

export interface ILoginRequest {
    login: string;
    password: string;
}

export interface IVerifyRequest {
    code: string;
}

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
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
    }),
    endpoints: (builder) => ({
        login: builder.mutation<IResponse<{ token: string }>, ILoginRequest>({
            query: ({login, password}) => ({
                url: '/user/login',
                method: 'POST',
                body: {
                    login,
                    password
                }
            })
        }),
        register: builder.mutation<IResponse<{ token: string }>, IRegisterRequest>({
            query: (body: IRegisterRequest) => ({
                url: '/user/register',
                method: 'POST',
                body
            })
        }),
        verifyEmail: builder.mutation<IResponse<{ message: string }>, IVerifyRequest>({
            query: (body: IVerifyRequest) => ({
                url: '/email/verify',
                method: 'POST',
                body
            })
        }),
        resendEmail: builder.mutation<IResponse<{ message: string }>, void>({
            query: () => ({
                url: '/email/resend',
                method: 'POST'
            })
        })
    })
});
