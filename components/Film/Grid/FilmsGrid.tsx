import FilmCard from '@/components/Film/Card/FilmCard';
import Pagination from '@/components/ui/Pagination/Pagination';
import {IFilm} from '@/interfaces/IFilm';
import {IMetaLink} from '@/interfaces/IMetaLink';
import styles from 'components/Film/Grid/FilmsGrid.module.scss';
import {memo} from 'react';


interface IFilmsGridProps {
    films: IFilm[];
    links: IMetaLink[];
    onPageChange: (page: number) => void;
}

function FilmsGrid(props: IFilmsGridProps) {
    return (
        <section className={styles.grid}>
            <div className={styles.grid__container}>
                {props.films?.map(film => (
                    <FilmCard film={film} key={film.id}/>
                ))}
            </div>
            {props.films.length <= 0 &&
                <div className={styles.grid__notfound}>
                    <h2>Кажется, ничего не нашлось...</h2>
                </div>
            }
            {props.links?.length > 3 &&
                <Pagination
                    onPageChange={props.onPageChange}
                    links={props.links}/>
            }
        </section>
    );
}

export default memo(FilmsGrid);
