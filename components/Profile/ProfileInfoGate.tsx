import {useAppDispatch, useAppSelector} from '@/hooks/redux';
import {userApi} from '@/store/api/userApi';
import {modalActions} from '@/store/slices/modalSlice';
import {userActions} from '@/store/slices/userSlice';
import {useRouter} from 'next/router';
import {PropsWithChildren, useEffect} from 'react';

function ProfileInfoGate({children}: PropsWithChildren) {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const token = useAppSelector(state => state.user.token);
    const isVerified = useAppSelector(state => state.user?.info?.verified);
    if (!token || !isVerified) {
        router.push('/', undefined, {shallow: true}).then(() => {
            dispatch(modalActions.setType(!isVerified ? {type: 'email'} : {type: 'login'}));
            dispatch(modalActions.openModal());
        });

        return null;
    }

    const {data: user} = userApi.useInfoQuery();

    useEffect(() => {
        if (user) {
            dispatch(userActions.setInfo(user.data));
        }
    }, [user]);

    return (<>{children}</>);
}

export default ProfileInfoGate;
