import {IFilmPreview} from '@/interfaces/IFilmPreview';
import Image from 'next/image';
import styles from './FilmPreviewCard.module.scss';

interface IFilmPreviewCardProps {
    film: IFilmPreview;
}

function FilmPreviewCard(props: IFilmPreviewCardProps) {
    return (
        <div className={styles.filmPreviewCard}>
            <Image
                src={props.film.poster}
                alt={props.film.poster}
                layout={'fill'}
            />
        </div>
    );
}

export default FilmPreviewCard;
