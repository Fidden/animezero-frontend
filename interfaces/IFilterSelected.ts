import {TSort} from '@/types/TSort';

export interface IFilterSelected {
    genres?: string;
    statuses?: string[];
    years?: string;
    rating: TSort;
}
