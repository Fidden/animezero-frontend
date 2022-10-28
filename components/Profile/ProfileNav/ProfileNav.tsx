import NextLink from '@/components/ui/NextLink';
import classNames from 'classnames';
import {useRouter} from 'next/router';
import styles from './ProfileNav.module.scss';

export const navData = [
    {
        title: 'Отслеживаемое',
        href: '/profile/tracked'
    },
    {
        title: 'Недавно просмотренные',
        href: '/profile/watched'
    },
    {
        title: 'Буду смотреть',
        href: '/profile/want-watch'
    },
    {
        title: 'Настройки',
        href: '/profile'
    }
];

function ProfileNav() {
    const router = useRouter();

    return (
        <ul className={styles.profile__nav}>
            {navData.map(route =>
                <li
                    className={classNames(styles.profile__navItem, {
                        [styles.profile__navItemActive]: route.href === router.pathname
                    })}
                    key={route.title}
                >
                    <NextLink href={route.href}>
                        {route.title}
                    </NextLink>
                </li>
            )}
        </ul>
    );
}

export default ProfileNav;
