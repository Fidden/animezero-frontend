import {IResponse} from '@/interfaces/IResponse';
import {IUser} from '@/interfaces/IUser';
import baseQuery from '@/store/helpers/baseQuery';
import {createApi} from '@reduxjs/toolkit/query/react';

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
    baseQuery: baseQuery,
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
        }),
        info: builder.query<IResponse<IUser>, void>({
            query: () => '/user/info'
        })
    })
});
