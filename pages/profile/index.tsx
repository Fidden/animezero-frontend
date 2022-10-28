import ProfileBar from '@/components/Profile/ProfileBar/ProfileBar';
import styles from '@/styles/pages/Profile.module.scss';
import dynamic from 'next/dynamic';

const ProfileInfoGate = dynamic(() => import('@/components/Profile/ProfileInfoGate'), {
    ssr: false
});

function Index() {
    return (
        <ProfileInfoGate>
            <main className={styles.profile}>
                <ProfileBar/>
                <div className={styles.profile__container}>
                    <h2 className={styles.profile__containerTitle}>
                        Настройки
                    </h2>
                </div>
            </main>
        </ProfileInfoGate>
    );
}

export default Index;
