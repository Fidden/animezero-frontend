import FilmPreviewCard from '@/components/Film/PreviewCard/FilmPreviewCard';
import {IFilmPreview} from '@/interfaces/IFilmPreview';
import styles from 'components/HomePreview/HomePreview.module.scss';

interface IHomePreviewProps {
    films: IFilmPreview[];
}

function HomePreview(props: IHomePreviewProps) {
    const filmsCountInRow = Math.floor(props.films.length / 3);
    const filmSlice = [
        props.films.slice(0, filmsCountInRow),
        props.films.slice(filmsCountInRow, 2 * filmsCountInRow),
        props.films.slice(2 * filmsCountInRow, 3 * filmsCountInRow)
    ];

    return (
        <section className={styles.homePreview}>
            <div className={styles.homePreview__row}>
                {filmSlice[0].map(film => (
                    <FilmPreviewCard film={film} key={film.id}/>
                ))}
            </div>
            <div className={styles.homePreview__row}>
                {filmSlice[1].map(film => (
                    <FilmPreviewCard film={film} key={film.id}/>
                ))}
            </div>
            <div className={styles.homePreview__row}>
                {filmSlice[2].map(film => (
                    <FilmPreviewCard film={film} key={film.id}/>
                ))}
            </div>
        </section>
    );
}

export default HomePreview;
