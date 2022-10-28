import ProfileNav from '@/components/Profile/ProfileNav/ProfileNav';
import {useAppSelector} from '@/hooks/redux';
import styles from '@/styles/pages/Profile.module.scss';
import Image from 'next/image';

function ProfileBar() {
    const userInfo = useAppSelector(state => state.user.info);

    return (
        <aside className={styles.profile__aside}>
            <div className={styles.profile__image}>
                <Image
                    src={'https://avatars.githubusercontent.com/u/38431646?v=4'}
                    alt={userInfo?.login}
                    layout={'fill'}
                />
            </div>
            <div className={styles.profile__info}>
                <h3 className={styles.profile__infoName}>
                    {userInfo?.login}
                </h3>
                <p className={styles.profile__infoEmail}>
                    {userInfo?.email}
                </p>
            </div>
            <ProfileNav/>
        </aside>
    );
}

export default ProfileBar;
