import {IRegisterData} from '@/interfaces/IRegisterData';
import {IResponse} from '@/interfaces/IResponse';
import {request} from '@/pages/_app';

export const userService = {
    async register(data: IRegisterData) {
        const res = await request.post<IResponse<{ token: string }>>('/user/register', {
            body: data
        });

        return res.data.data;
    }
};
