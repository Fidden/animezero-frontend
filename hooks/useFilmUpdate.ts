import {removeEmpty} from '@/helpers/removeEmpty';
import {IFilm} from '@/interfaces/IFilm';
import {IFilterSelected} from '@/interfaces/IFilterSelected';
import {IPaginateResponse} from '@/interfaces/IPaginateResponse';
import {filmService} from '@/services/filmService';
import {NextRouter} from 'next/router';

export async function useFilmUpdate(data: IFilterSelected, router: NextRouter, type: 'film' | 'serial', callback: (films: IPaginateResponse<IFilm>) => void) {
    const films = await filmService.getAllByFilter({
        type: type,
        page: 1,
        years: data?.years,
        rating: data?.rating,
        genres: data?.genres
    }, true);

    await router.push({
        pathname: type === 'serial' ? '/serials' : '/films',
        query: removeEmpty({
            type: type,
            page: 1,
            years: data?.years,
            rating: data?.rating,
            genres: data?.genres
        })
    }, undefined, {shallow: true});

    callback(films);
}
