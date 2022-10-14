import FilmCard from '@/components/Film/Card/FilmCard';
import Button from '@/components/ui/Button/Button';
import NextLink from '@/components/ui/NextLink';
import {IFilm} from '@/interfaces/IFilm';
import Flickity, {FlickityOptions} from 'react-flickity-component';
import styles from './FilmRow.module.scss';

interface IFilmRowProps {
    films: IFilm[];
    icon: string;
    title: string;
    href: string;
}

const flickityOptions: FlickityOptions = {
    initialIndex: 0,
    wrapAround: false,
    cellAlign: 'left',
    pageDots: false
};

function FilmRow(props: IFilmRowProps) {
    return (
        <section className={styles.filmRow}>
            <header className={styles.filmRow__header}>
                <h2 className={styles.filmRow__title}>
                    <i className={props.icon}/>
                    {props.title}
                </h2>
                <NextLink
                    href={props.href}
                    className={styles.filmRow__button}
                >
                    <Button>
                        Показать все
                    </Button>
                </NextLink>
            </header>
            <div className={styles.filmRow__body}>
                <Flickity
                    options={flickityOptions}
                >
                    {props.films.map(film => (
                        <div
                            className={styles.filmRow__cell}
                            key={film.id}
                        >
                            <FilmCard
                                film={film}
                            />
                        </div>
                    ))}
                </Flickity>
            </div>
        </section>
    );
}

export default FilmRow;
