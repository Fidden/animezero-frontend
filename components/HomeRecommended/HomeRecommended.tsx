import RecommendedCard from '@/components/HomeRecommended/Card/RecommendedCard';
import {IFilm} from '@/interfaces/IFilm';
import styles from 'components/HomeRecommended/HomeRecommended.module.scss';

interface IHomeRecommendedProps {
    films: IFilm[];
}

function HomeRecommended(props: IHomeRecommendedProps) {
    return (
        <section className={styles.homeRecommended}>
            <header className={styles.homeRecommended__header}>
                <h2 className={styles.homeRecommended__title}>
                    <i className="fas fa-film"/>
                    Рекомендуем
                </h2>
            </header>
            <div className={styles.homeRecommended__body}>
                <RecommendedCard
                    film={props.films[0]}
                />
                <RecommendedCard
                    small
                    film={props.films[1]}
                />
                <RecommendedCard
                    small
                    film={props.films[2]}
                />
            </div>
        </section>
    );
}

export default HomeRecommended;
