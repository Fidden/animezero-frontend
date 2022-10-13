import Button from '@/components/ui/Button/Button';
import styles from './HeaderControls.module.scss';

function HeaderControls() {
    return (
        <div className={styles.header__controls}>
            <Button icon>
                <i className="fal fa-sign-in"/>
                Вход
            </Button>
        </div>
    );
}

export default HeaderControls;
