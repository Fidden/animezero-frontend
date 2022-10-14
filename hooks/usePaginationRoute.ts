import {removeEmpty} from 'helpers/removeEmpty';
import {IFilm} from 'interfaces/IFilm';
import {IPaginateResponse} from 'interfaces/IPaginateResponse';
import {NextRouter} from 'next/router';
import {filmService} from 'services/filmService';
import {TSort} from 'types/TSort';


export default async function usePaginationRoute(page: number, router: NextRouter, type: 'film' | 'serial', callback: (films: IPaginateResponse<IFilm>) => void) {
    const films = await filmService.getAllByFilter({
        type: type,
        page,
        years: router.query?.years?.toString(),
        rating: router.query?.rating as TSort,
        genres: router.query?.genres?.toString()
    }, true);

    await router.push({
        pathname: type === 'serial' ? '/serials' : '/films',
        query: removeEmpty({
            type: type,
            page,
            years: router.query?.years?.toString(),
            rating: router.query?.rating as TSort,
            genres: router.query?.genres?.toString()
        })
    }, undefined, {shallow: true});

    callback(films);
}
