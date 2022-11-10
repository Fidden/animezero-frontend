import SearchCard from '@/components/Film/SearchCard/SearchCard';
import ClickAwayListener from '@/components/ui/ClickAwayListener';
import useDebounce from '@/hooks/useDebounce';
import {IFilm} from '@/interfaces/IFilm';
import {filmsApi} from '@/store/api/filmsApi';
import {useEffect, useState} from 'react';

import styles from './HeaderSearch.module.scss';

function HeaderSearch() {
    const [query, setQuery] = useState('');
    const [searchResult, setSearchResult] = useState<IFilm[]>([]);
    const [showResult, setShowResult] = useState<boolean>(false);
    const debouncedSearch = useDebounce<typeof query>(query, 500);
    const [filmSuggestions] = filmsApi.useLazySuggestionQuery();

    useEffect(() => {
        (async () => {
            if (!debouncedSearch.trim().length) {
                return;
            }

            const suggestions = await filmSuggestions(debouncedSearch).unwrap();
            setSearchResult(suggestions.data);
            setShowResult(true);
        })();
    }, [debouncedSearch]);

    return (
        <ClickAwayListener
            className={styles.header__search}
            onClickAway={() => setShowResult(false)}
        >
            <div className={styles.header__search}>
                <input
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={'Популярные новинки'}
                    className={styles.header__searchInput}
                    type="text"
                />
                <button className={styles.header__searchButton}>
                    <i className="far fa-search"/>
                </button>
                {showResult &&
                    <ul className={styles.header__searchResult}>
                        {searchResult.map(film => (
                            <li
                                onClick={() => setShowResult(false)}
                                className={styles.header__searchResultItem}
                                key={film.id}
                            >
                                <SearchCard
                                    film={film}
                                />
                            </li>
                        ))}
                    </ul>
                }
            </div>
        </ClickAwayListener>
    );
}

export default HeaderSearch;
