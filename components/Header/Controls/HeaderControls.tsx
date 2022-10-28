import Button from '@/components/ui/Button/Button';
import {useAppDispatch, useAppSelector} from '@/hooks/redux';
import {modalActions} from '@/store/slices/modalSlice';
import {userActions} from '@/store/slices/userSlice';
import {useRouter} from 'next/router';
import styles from './HeaderControls.module.scss';

function HeaderControls() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const isVerified = useAppSelector((store) => store.user?.info?.verified);
    const isProfilePage = router.pathname.includes('/profile');

    const handleLoginClick = () => {
        if (isProfilePage) {
            router.push('/').then(() => {
                dispatch(userActions.clear());
                dispatch(modalActions.setType('login'));
            });
        } else if (isVerified) {
            router.push('/profile');
        } else {
            dispatch(modalActions.openModal());
        }
    };

    return (
        <div className={styles.header__controls}>
            <Button
                icon
                onClick={handleLoginClick}
            >
                <i className="fal fa-sign-in"/>
                {isVerified ? isProfilePage ? 'Выйти' : 'Профиль' : 'Войти'}
            </Button>
        </div>
    );
}

export default HeaderControls;
