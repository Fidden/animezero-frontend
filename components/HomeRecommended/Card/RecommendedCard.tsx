import {withRecommendedCardSmall} from '@/components/HomeRecommended/Card/_small/RecommendedCardSmall';
import {cnRecommendedCard, IRecommendedCardProps} from '@/components/HomeRecommended/Card/index';
import Button from '@/components/ui/Button/Button';
import NextLink from '@/components/ui/NextLink';
import useTransformCSS from '@/hooks/useTransformCSS';
import {compose} from '@bem-react/core';
import Image from 'next/image';
import styles from 'components/HomeRecommended/Card/RecommendedCard.module.scss';


function RecommendedCardNoMod({className, as: Compoenent = 'div', film, ...props}: IRecommendedCardProps) {
    const transformedCss = useTransformCSS(styles, cnRecommendedCard({}, [className]));
    return (
        <Compoenent className={transformedCss} {...props}>
            <div className={styles.recommendedCard_shadow}/>
            {film.poster &&
                <div className={styles.recommendedCard_image}>
                    <Image
                        src={film.poster}
                        alt={film.title}
                        layout={'fill'}
                    />
                </div>
            }
            <p className={styles.recommendedCard_rating}>
                {film.rating.toFixed(1)}
            </p>
            <div className={styles.recommendedCard_info}>
                <article>
                    <h3 className={styles.recommendedCard_title}>
                        {film.title}
                    </h3>
                    <p className={styles.recommendedCard_description}>
                        {film.description}
                    </p>
                    <p className={styles.recommendedCard_genres}>
                       <span>Жанры:</span>{film.genres.map((genre) => genre.name).join(', ')}
                    </p>
                </article>
                <NextLink href={`/film/${film.id}`} className={styles.recommendedCard_button}>
                    <Button>
                        Смотреть
                    </Button>
                </NextLink>
            </div>
        </Compoenent>
    );
}

export default compose(
    withRecommendedCardSmall
)(RecommendedCardNoMod);
