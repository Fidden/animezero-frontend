import styles from './HeaderNav.module.scss';
import useClassNames from '@/hooks/useClassNames';

function HeaderNav() {
    return (
        <nav className={styles.header__nav}>
            <button className={useClassNames(styles.header__navButton, styles.header__navButtonActive)}>
                Каталог
            </button>
            <button className={styles.header__navButton}>
                Фильмы
            </button>
            <button className={styles.header__navButton}>
                Сериалы
            </button>
        </nav>
    );
}

export default HeaderNav;
