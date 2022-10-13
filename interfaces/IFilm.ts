import {ICountry} from '@/interfaces/ICountry';
import {IDirector} from '@/interfaces/IDirector';
import {IGenre} from '@/interfaces/IGenre';
import {IStatus} from '@/interfaces/IStatus';
import {IType} from '@/interfaces/IType';

export interface IFilm {
    id: number;
    player_link: string;
    title: string;
    title_orig: string;
    description: string;
    year: number;
    poster: string;
    rating: number;
    minimal_age?: number;
    duration: number;
    genres: IGenre[];
    status: IStatus;
    type: IType;
    directors: IDirector[];
    countries: ICountry[];
}
