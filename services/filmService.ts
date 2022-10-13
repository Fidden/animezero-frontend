import {IFilm} from '@/interfaces/IFilm';
import {IHomePage} from '@/interfaces/IHomePage';
import {IResponse} from '@/interfaces/IResponse';
import {request} from '@/pages/_app';
import {TBlock} from '@/types/TBlock';

export const filmService = {
    async homePage(blocks: TBlock[]) {
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
    }
};
