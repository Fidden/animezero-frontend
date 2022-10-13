import {IFilm} from '@/interfaces/IFilm';
import {IFilmPreview} from '@/interfaces/IFilmPreview';

export interface IHomePage {
    preview: IFilmPreview[];
    newest: IFilm[];
    ongoing: IFilm[];
    recommended: IFilm[];
}
