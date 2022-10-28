import {TRole} from '@/types/TRole';

export interface IUser {
    id: number;
    login: string;
    email: string;
    avatar: string;
    role: TRole;
    verified: boolean;
}
