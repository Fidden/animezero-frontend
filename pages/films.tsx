import Filter from '@/components/Filter/Filter';
import BreadCrumb from '@/components/ui/BreadCrumb/BreadCrumb';
import {useFilmUpdate} from '@/hooks/useFilmUpdate';
import usePaginationRoute from '@/hooks/usePaginationRoute';
import {IFilm} from '@/interfaces/IFilm';
import {IFilter} from '@/interfaces/IFilter';
import {IFilterSelected} from '@/interfaces/IFilterSelected';
import {IPaginateResponse} from '@/interfaces/IPaginateResponse';
import {filmService} from '@/services/filmService';
import styles from '@/styles/pages/Films.module.scss';
import {TSort} from '@/types/TSort';
import FilmsGrid from 'components/Film/Grid/FilmsGrid';
import {GetServerSidePropsContext} from 'next';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';

interface IFilmsPageProps {
    films: IPaginateResponse<IFilm>;
    filters: IFilter;
}

function Films(props: IFilmsPageProps) {
    const [newFilms, setNewFilms] = useState(props.films);
    const router = useRouter();

    useEffect(() => {
        setNewFilms(props.films);
    }, []);

    const filmUpdate = async (data: IFilterSelected) => {
        await useFilmUpdate(data, router, 'film', (films) => {
            setNewFilms(films);
        });
    };


    const pageChange = async (page: number) => {
        await usePaginationRoute(page, router, 'film', (films) => {
            setNewFilms(films);
        });
    };

    return (
        <main
            className={'mainContainer'}
            style={{marginTop: '50px'}}
        >
            <BreadCrumb
                className={styles.breadCrumb}
                pageTitle={'Фильмы'}
                title={'Фильмы смотреть онлайн'}
                subtitle={'В нашем каталоге вы найдете фильмы любых жанров. Не упустите возможность смотреть фильмы онлайн бесплатно без регистрации.'}
            />
            <Filter
                onFilmUpdate={filmUpdate}
                filters={props.filters}
            />
            <FilmsGrid
                onPageChange={pageChange}
                films={newFilms.data}
                links={newFilms.meta.links}
            />
        </main>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    try {
        const films = await filmService.getAllByFilter({
            type: 'film',
            page: Number(context.query.page) || 1,
            years: String(context.query.years),
            rating: context.query.rating as TSort
        }, true);

        const genres = await filmService.getGenres();

        return {
            props: {
                films,
                filters: {
                    genres
                }
            }
        };
    } catch (e) {
        return {
            notFound: true
        };
    }
}

export default Films;
