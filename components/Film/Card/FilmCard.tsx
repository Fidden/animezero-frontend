import NextLink from '@/components/ui/NextLink';
import {IFilm} from '@/interfaces/IFilm';
import Image from 'next/image';
import styles from './FilmCard.module.scss';

interface IFilmCardProps {
    film: IFilm;
}

function FilmCard(props: IFilmCardProps) {
    return (
        <NextLink
            href={`/film/${props.film.id}`}
            className={styles.filmCard}
        >
            <p className={styles.filmCard__rating}>
                {props.film.rating.toFixed(1)}
            </p>
            <div className={styles.filmCard__image}>
                <Image
                    src={props.film.poster}
                    alt={props.film.title}
                    layout={'fill'}
                />
            </div>
            <p className={styles.filmCard__title}>
                {props.film.title}
            </p>
            <p className={styles.filmCard__info}>
                {props.film.year}
                {props.film.genres?.at(0) && `, ${props.film.genres?.at(0)?.name}`}
            </p>
        </NextLink>
    );
}

export default FilmCard;
