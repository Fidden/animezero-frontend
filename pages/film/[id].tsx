import {IFilm} from '@/interfaces/IFilm';
import LayoutDefault from '@/layouts/LayoutDefault';
import {filmService} from '@/services/filmService';
import styles from '@/styles/pages/Film.module.scss';
import {GetServerSidePropsContext} from 'next';
import Image from 'next/image';

interface IFilmProps {
    film: IFilm;
}

function Film(props: IFilmProps) {
    return (
        <LayoutDefault>
            <main className={styles.film}>
                <aside className={styles.film__aside}>
                    <div className={styles.film__poster}>
                        <Image
                            src={props.film.poster}
                            alt={props.film.title}
                            layout={'fill'}
                        />
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
                                    <td>{props.film.duration}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </main>
        </LayoutDefault>
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
