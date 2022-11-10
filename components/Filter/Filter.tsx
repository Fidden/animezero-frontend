import {rating, years} from '@/components/Filter/FilterData';
import FilterItem, {IFilterUpdate} from '@/components/Filter/Item/FilterItem';
import {IFilter} from '@/interfaces/IFilter';
import {IFilterSelected} from '@/interfaces/IFilterSelected';
import {memo, useState} from 'react';

import styles from './Filter.module.scss';

interface IFilterProps {
    filters: IFilter;
    onFilmUpdate: (data: IFilterSelected) => void;
}

function Filter(props: IFilterProps) {
    const [selectedFilters, setSelectedFilters] = useState<IFilterSelected>({
        rating: 'asc',
        statuses: []
    });

    function resetFilters() {
        const newData: IFilterSelected = {
            rating: 'asc',
            statuses: []
        };

        setSelectedFilters(newData);
        props.onFilmUpdate(newData);
    }

    const filterUpdate = (data: IFilterUpdate) => {
        const newData = {
            ...selectedFilters,
            [data.type]: data.value
        };

        setSelectedFilters(newData);
        props.onFilmUpdate(newData);
    };

    return (
        <section className={styles.filter}>
            <h4 className={styles.filter__title}>
                Фильтры
            </h4>
            <div className={styles.filter__container}>
                <FilterItem
                    onFilterUpdate={filterUpdate}
                    title="Жанры"
                    elements={props.filters.genres}
                    type="genres"
                />
                <FilterItem
                    onFilterUpdate={filterUpdate}
                    title="Статусы"
                    elements={props.filters.statuses}
                    type="statuses"
                />
                <FilterItem
                    onFilterUpdate={filterUpdate}
                    title="Годы выхода"
                    elements={years}
                    type="years"
                />
                <FilterItem
                    onFilterUpdate={filterUpdate}
                    title="Рейтинг"
                    elements={rating}
                    type="rating"
                />
            </div>
            <button
                onClick={resetFilters}
                className={styles.filter__reset}
            >
                <i className={'fal fa-lg fa-times'}/>
                <span>Сбросить фильтры</span>
            </button>
        </section>
    );
}

export default memo(Filter);
