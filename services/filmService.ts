import {removeEmpty} from '@/helpers/removeEmpty';
import {IFilm} from '@/interfaces/IFilm';
import {IGenre} from '@/interfaces/IGenre';
import {IHomePage} from '@/interfaces/IHomePage';
import {IPaginateResponse} from '@/interfaces/IPaginateResponse';
import {IQueryFilter} from '@/interfaces/IQueryFilter';
import {IResponse} from '@/interfaces/IResponse';
import {request} from '@/pages/_app';
import {TBlock} from '@/types/TBlock';

export const filmService = {
    async getHomePage(blocks: TBlock[]) {
        const res = await request.get<IResponse<IHomePage>>(`/homepage`, {
            params: {
                blocks: blocks.toString()
            }
        });

        return res.data.data;
    },
    async getFilm(id: number) {
        const res = await request.get<IResponse<IFilm>>(`/film/${id}`);
        return res.data.data;
    },
    async getAllByFilter(params: IQueryFilter, filledOnly = false) {
        const newParams: IQueryFilter = filledOnly ? removeEmpty(params) : params;
        const res = await request.get<IPaginateResponse<IFilm>>(`/film`, {
            params: newParams
        });
        return res.data;
    },
    async getGenres() {
        const res = await request.get<IResponse<IGenre[]>>(`/film/genre`);
        return [
            ...[{ id: -1, name: 'Все', value: null }],
            ...res.data.data
        ];
    },
};
