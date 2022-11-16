import Input from '@/components/ui/Input/Input';
import ProfileBar from '@/components/Profile/ProfileBar/ProfileBar';
import Button from '@/components/ui/Button/Button';
import {useAppSelector} from '@/hooks/redux';
import styles from '@/styles/pages/Profile.module.scss';
import dynamic from 'next/dynamic';
import {useRef} from 'react';

const ProfileInfoGate = dynamic(() => import('@/components/Profile/ProfileInfoGate'), {
    ssr: false
});

interface IUserInfo {
    login: string;
    email: string;
    password: string;
    password_repeat: string;
}

function Index() {
    const userInfo = useAppSelector(state => state.user.info);
    const newUserInfo = useRef<IUserInfo>({
        login: '',
        email: '',
        password: '',
        password_repeat: ''
    });

    const handleChangeData = () => {
        console.log(newUserInfo);
    };

    return (
        <ProfileInfoGate>
            <main className={styles.profile}>
                <ProfileBar/>
                <div className={styles.profile__container}>
                    <h2 className={styles.profile__containerTitle}>
                        Настройки
                    </h2>
                    <ul className={styles.profile__body}>
                        <li className={styles.profile__bodyItem}>
                            <h3 className={styles.profile__bodyItemTitle}>
                                Ваш ник
                            </h3>
                            <Input
                                type={'text'}
                                placeholder={userInfo?.login}
                                onChange={(e) => newUserInfo.current.login = e.target.value}
                            />
                        </li>
                        <li className={styles.profile__bodyItem}>
                            <h3 className={styles.profile__bodyItemTitle}>
                                Ваш email
                            </h3>
                            <Input
                                type={'email'}
                                placeholder={userInfo?.email}
                                onChange={(e) => newUserInfo.current.email = e.target.value}
                            />
                        </li>
                        <li className={styles.profile__bodyItem}>
                            <h3 className={styles.profile__bodyItemTitle}>
                                Ваш пароль
                            </h3>
                            <Input
                                type={'password'}
                                placeholder={'Ваш новый пароль'}
                                onChange={(e) => newUserInfo.current.password = e.target.value}
                            />
                            <Input
                                type={'password'}
                                placeholder={'Повторите новый пароль'}
                                onChange={(e) => newUserInfo.current.password_repeat = e.target.value}
                            />
                        </li>
                        <li>
                            <Button
                                style={{marginLeft: 'auto'}}
                                onClick={handleChangeData}
                            >
                                Сохранить
                            </Button>
                        </li>
                    </ul>
                </div>
            </main>
        </ProfileInfoGate>
    );
}

export default Index;
