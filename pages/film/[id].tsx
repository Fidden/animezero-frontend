import {IFilm} from '@/interfaces/IFilm';
import {filmService} from '@/services/filmService';
import {userFilmActions} from '@/store/slices/userFilmSlice';
import styles from '@/styles/pages/Film.module.scss';
import classNames from 'classnames';
import Button from 'components/ui/Button/Button';
import {useAppDispatch, useAppSelector} from 'hooks/redux';
import {GetServerSidePropsContext} from 'next';
import Image from 'next/image';
import {filmsApi} from 'store/api/filmsApi';

interface IFilmProps {
    film: IFilm;
}

function Film(props: IFilmProps) {
    const dispatch = useAppDispatch();
    const [addWantWatch] = filmsApi.useAddWantWatchMutation();
    const [removeWantWatch] = filmsApi.useRemoveWatchedMutation();
    const [addWatched] = filmsApi.useAddWatchedMutation();
    const isWantWatch = useAppSelector(state =>
        state.userFilm.wantWatch.findIndex(film_id => film_id === props.film.id) !== -1
    );

    const isWatched = useAppSelector(state =>
        state.userFilm.watched.findIndex(film_id => film_id === props.film.id) !== -1
    );

    const handleAddWantWatch = () => {
        if (isWantWatch) {
            removeWantWatch(props.film.id).unwrap().then(() => {
                dispatch(userFilmActions.removeWantWatch(props.film.id));
            });
        } else {
            addWantWatch(props.film.id)
                .unwrap()
                .then(() => dispatch(userFilmActions.addWantWatch(props.film.id)))
                .catch(() => console.log('error'));
        }
    };

    const handleAddWatched = () => {
        if (isWatched) {
            removeWantWatch(props.film.id).unwrap().then(() => {
                dispatch(userFilmActions.removeWatched(props.film.id));
            });
        } else {
            addWatched(props.film.id)
                .unwrap()
                .then(() => dispatch(userFilmActions.addWatched(props.film.id)))
                .catch(() => console.log('error'));
        }
    };

    return (
        <main className={styles.film}>
            <aside className={styles.film__aside}>
                <div className={styles.film__poster}>
                    <Image
                        src={props.film.poster}
                        alt={props.film.title}
                        layout={'fill'}
                    />
                </div>
                <div className={styles.film__buttons}>
                    <Button
                        icon
                        className={classNames(styles.film__buttonsWant, {
                            [styles.film__buttonsWantActive]: isWantWatch
                        })}
                        onClick={handleAddWantWatch}
                    >
                        {isWantWatch
                            ? <i className="fal fa-check"/>
                            : <i className="fal fa-plus"/>
                        }
                        Буду смотреть
                    </Button>
                    <Button
                        icon
                        className={classNames(styles.film__buttonsWatched, {
                            [styles.film__buttonsWatchedActive]: isWatched
                        })}
                        onClick={handleAddWatched}
                    >
                        <i className="fas fa-eye"/>
                    </Button>
                </div>
            </aside>
            <section className={styles.film__container}>
                <h2 className={styles.film__containerTitle}>
                    {props.film.title}
                </h2>
                <h3 className={styles.film__containerTitleOrig}>
                    {props.film.title_orig}
                </h3>
                <iframe
                    className={styles.film__containerVideo}
                    src={props.film.player_link}
                />
                <div className={styles.film__info}>
                    <div className={styles.film__description}>
                        <h2>Описание</h2>
                        <p>
                            {props.film.description}
                        </p>
                    </div>
                    <div className={styles.film__about}>
                        <h2>О фильме</h2>
                        <table>
                            <tbody>
                            <tr>
                                <td>Год</td>
                                <td>{props.film.year}</td>
                            </tr>
                            <tr>
                                <td>Страна</td>
                                <td>{props.film.countries.map(item => item.name).toString()}</td>
                            </tr>
                            {props.film.genres.length > 0 &&
                                <tr>
                                    <td>Жанр</td>
                                    <td>{props.film.genres?.at(0)?.name}</td>
                                </tr>
                            }
                            <tr>
                                <td>Режиссер</td>
                                <td>{props.film.directors.map(item => item.name).toString()}</td>
                            </tr>
                            <tr>
                                <td>Время</td>
                                <td>{props.film.duration} мин</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </main>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    try {
        const film = await filmService.getFilm(Number(context.params?.id));
        return {
            props: {
                film
            }
        };
    } catch (e) {
        return {
            notFound: true
        };
    }
}

export default Film;
