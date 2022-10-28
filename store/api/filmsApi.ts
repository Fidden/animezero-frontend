import {IFilm} from '@/interfaces/IFilm';
import {IPaginateResponse} from '@/interfaces/IPaginateResponse';
import {IResponse} from '@/interfaces/IResponse';
import baseQuery from '@/store/helpers/baseQuery';
import {createApi} from '@reduxjs/toolkit/query/react';

export const filmsApi = createApi({
    reducerPath: 'filmsApi',
    baseQuery: baseQuery,
    tagTypes: ['Watched', 'WantWatch', 'Tracked'],
    endpoints: (builder) => ({
        watched: builder.query<IPaginateResponse<IFilm>, number>({
            query: (page: number) => ({
                url: 'film/watched',
                params: {
                    page
                }
            }),
            providesTags: ['Watched']
        }),
        allWatched: builder.query<IResponse<number[]>, void>({
            query: () => ({
                url: 'film/watched/all'
            })
        }),
        addWatched: builder.mutation<IPaginateResponse<IFilm>, number>({
            query: (film_id: number) => ({
                url: 'film/watched',
                method: 'POST',
                body: {film_id}
            }),
            invalidatesTags: ['Watched']
        }),
        removeWatched: builder.mutation<null, number>({
            query: (film_id: number) => ({
                url: `film/watched/${film_id}`,
                method: 'DELETE'
            })
        }),
        wantWatch: builder.query<IPaginateResponse<IFilm>, number>({
            query: (page: number) => ({
                url: 'film/want-to-watch',
                params: {page}
            }),
            providesTags: ['WantWatch']
        }),
        allWantWatch: builder.query<IResponse<number[]>, void>({
            query: () => ({
                url: 'film/want-to-watch/all'
            })
        }),
        addWantWatch: builder.mutation<IPaginateResponse<IFilm>, number>({
            query: (film_id: number) => ({
                url: 'film/want-to-watch',
                method: 'POST',
                body: {film_id}
            }),
            invalidatesTags: ['WantWatch']
        }),
        removeWantWatch: builder.mutation<null, number>({
            query: (film_id: number) => ({
                url: `film/want-to-watch/${film_id}`,
                method: 'DELETE'
            })
        }),
        tracked: builder.query<IPaginateResponse<IFilm>, number>({
            query: (page: number) => ({
                url: 'film/tracked',
                params: {page}
            }),
            providesTags: ['Tracked']
        }),
        allTracked: builder.query<IResponse<number[]>, void>({
            query: () => ({
                url: 'film/tracked/all'
            })
        }),
        addTracked: builder.mutation<IPaginateResponse<IFilm>, number>({
            query: (film_id: number) => ({
                url: 'film/tracked',
                method: 'POST',
                body: {film_id}
            }),
            invalidatesTags: ['Tracked']
        }),
        removeTracked: builder.mutation<null, number>({
            query: (film_id: number) => ({
                url: `film/tracked/${film_id}`,
                method: 'DELETE'
            })
        }),
        suggestion: builder.query<IResponse<IFilm[]>, string>({
            query: (query: string) => ({
                url: 'film/suggestions',
                params: {query}
            })
        })
    })
});
