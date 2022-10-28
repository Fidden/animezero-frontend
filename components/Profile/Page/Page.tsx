import FilmGrid from '@/components/Film/Grid/FilmsGrid';
import ProfileBar from '@/components/Profile/ProfileBar/ProfileBar';
import {IFilm} from '@/interfaces/IFilm';
import {IPaginateResponse} from '@/interfaces/IPaginateResponse';
import styles from '@/styles/pages/Profile.module.scss';

interface IProfilePageProps {
    title: string;
    films?: IPaginateResponse<IFilm>;
    isLoading?: boolean;
    onPageChange: (page: number) => void;
}

function ProfilePage(props: IProfilePageProps) {
    return (
        <main className={styles.profile}>
            <ProfileBar/>
            <div className={styles.profile__container}>
                <h2 className={styles.profile__containerTitle}>
                    {props.title}
                </h2>
                {(props.films && !props.isLoading) &&
                    <FilmGrid
                        films={props.films.data}
                        links={props.films.meta.links}
                        onPageChange={props.onPageChange}
                    />
                }
                {props.isLoading &&
                    <div className={styles.profile__containerLoader}>
                        <h2>Загрузка...</h2>
                    </div>
                }
            </div>
        </main>
    );
}

export default ProfilePage;
