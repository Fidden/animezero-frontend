import {TSort} from '@/types/TSort';

export interface IQueryFilter {
    statuses?: string;
    genres?: string;
    type?: 'film' | 'serial';
    years?: string;
    rating?: TSort;
    title?: TSort;
    page?: number;
}
