import NextLink from '@/components/ui/NextLink';
import classNames from 'classnames';
import {useRouter} from 'next/router';
import styles from './HeaderNav.module.scss';


const links = [
    {
        title: 'Каталог',
        href: '/'
    },
    {
        title: 'Фильмы',
        href: '/films'

    },
    {
        title: 'Сериалы',
        href: '/serials'
    }
];

function HeaderNav() {
    const {pathname} = useRouter();
    return (
        <nav className={styles.header__nav}>
            {
                links.map(link => (
                    <NextLink
                        href={link.href}
                        key={link.href}
                        className={classNames(styles.header__navLink, {
                            [styles.header__navLinkActive]: pathname === link.href
                        })}>
                        {link.title}
                    </NextLink>
                ))
            }
        </nav>
    );
}

export default HeaderNav;
