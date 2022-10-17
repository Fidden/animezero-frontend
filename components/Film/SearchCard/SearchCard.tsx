import NextLink from '@/components/ui/NextLink';
import {IFilm} from '@/interfaces/IFilm';
import Image from 'next/image';
import styles from './SearchCard.module.scss';

interface ISearchCardProps {
    film: IFilm;
}

function SearchCard(props: ISearchCardProps) {
    return (
        <NextLink
            href={`/film/${props.film.id}`}
            className={styles.searchCard}
        >
            <div className={styles.searchCard__poster}>
                <Image
                    src={props.film.poster}
                    alt={props.film.title}
                    layout={'fill'}
                />
            </div>
            <div className={styles.searchCard__body}>
                <h2 className={styles.searchCard__title}>
                    {props.film.title}
                </h2>
                <div className={styles.searchCard__info}>
                    <p className={styles.searchCard__infoRating}>
                        {props.film.rating}
                    </p>
                    <p className={styles.searchCard__infoType}>
                        {props.film.type.name}
                    </p>
                    <p className={styles.searchCard__infoYear}>
                       {props.film.year}
                    </p>
                </div>
            </div>
        </NextLink>
    );
}

export default SearchCard;
