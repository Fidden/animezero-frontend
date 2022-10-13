import HeaderControls from '@/components/Header/Controls/HeaderControls';
import HeaderNav from '@/components/Header/Nav/HeaderNav';
import HeaderSearch from '@/components/Header/Search/HeaderSearch';
import styles from '@/components/Header/Header.module.scss';
import NextLink from '@/components/ui/NextLink';

function Header() {
    return (
        <header className={styles.header}>
            <NextLink href={'/'}>
                <h1 className={styles.header__title}>
                    Anime
                    <span className={styles.header__titleColor}>
                    Zero
                </span>
                </h1>
            </NextLink>
            <HeaderNav/>
            <HeaderSearch/>
            <HeaderControls/>
        </header>
    );
}

export default Header;
