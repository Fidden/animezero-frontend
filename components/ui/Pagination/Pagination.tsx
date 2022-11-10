import {IMetaLink} from '@/interfaces/IMetaLink';

import classNames from 'classnames';
import {memo} from 'react';

import styles from './Pagination.module.scss';

interface IPaginationProps {
    links: IMetaLink[];
    onPageChange: (page: number) => void;
}

function Pagination(props: IPaginationProps) {

    const linkToNumber = (url: string | undefined): number => {
        if (!url) {
            return 1;
        }

        return Number(url.split('?page=')[1]);
    };

    const paginationLabel = (label: string) => {
        if (label === 'prev') {
            return <i className={'far fa-xs fa-chevron-left'}/>;
        } else if (label === 'next') {
            return <i className={'far fa-xs fa-chevron-right'}/>;
        }

        return label;
    };

    return (
        <aside className={styles.pagination}>
            <ul className={styles.pagination__list}>
                {props.links.map(item => (
                    <li
                        className={classNames(styles.pagination__listItem, {
                            [styles.pagination__listItemActive]: item.active
                        })}
                        onClick={() => props.onPageChange(linkToNumber(item.url))}
                        key={item.label}
                    >
                        {paginationLabel(item.label)}
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default memo(Pagination);
