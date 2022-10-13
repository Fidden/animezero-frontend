import styles from './HeaderSearch.module.scss';

function HeaderSearch() {
    return (
        <div className={styles.header__search}>
            <input
                placeholder={'Популярные новинки'}
                className={styles.header__searchInput}
                type="text"
            />
            <button className={styles.header__searchButton}>
                <i className="far fa-search"/>
            </button>
        </div>
    );
}

export default HeaderSearch;
