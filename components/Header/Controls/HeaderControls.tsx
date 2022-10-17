import Button from '@/components/ui/Button/Button';
import {useAppDispatch} from '@/hooks/redux';
import {modalActions} from '@/store/slices/modalSlice';
import styles from './HeaderControls.module.scss';

function HeaderControls() {
    const dispatch = useAppDispatch();

    const handleLoginClick = (e: MouseEvent) => {
        e.stopPropagation();
        dispatch(modalActions.openModal());
    };

    return (
        <div className={styles.header__controls}>
            <Button
                icon
                onClick={handleLoginClick}
            >
                <i className="fal fa-sign-in"/>
                Вход
            </Button>
        </div>
    );
}

export default HeaderControls;
