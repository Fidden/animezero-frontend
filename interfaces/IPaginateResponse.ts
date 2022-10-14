import {ILink} from '@/interfaces/ILink';
import {IMeta} from '@/interfaces/IMeta';
import {IResponse} from '@/interfaces/IResponse';

export interface IPaginateResponse<T> extends IResponse<T[]> {
    links: ILink;
    meta: IMeta;
}
