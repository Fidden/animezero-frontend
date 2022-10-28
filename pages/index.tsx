import FilmRow from '@/components/Film/Row/FilmRow';
import HomePreview from '@/components/HomePreview/HomePreview';
import HomeRecommended from '@/components/HomeRecommended/HomeRecommended';
import BreadCrumb from '@/components/ui/BreadCrumb/BreadCrumb';
import Button from '@/components/ui/Button/Button';
import {IHomePage} from '@/interfaces/IHomePage';
import {filmService} from '@/services/filmService';
import styles from '@/styles/pages/Home.module.scss';

interface IHomeProps {
    films: IHomePage;
}

function Home(props: IHomeProps) {
    return (
        <main className="mainContainer">
            <div className={styles.home__preview}>
                <BreadCrumb
                    pageTitle={'Каталог'}
                    title={'Смотрите онлайн фильмы на AnimeZero'}
                    subtitle={'Смотрите фильмы в хорошем качестве только у нас !'}
                >
                    <Button icon>
                        <i className="fal fa-play"/> Перейти к просмотру
                    </Button>
                </BreadCrumb>
                <HomePreview films={props.films.preview}/>
            </div>
            <FilmRow
                films={props.films.newest}
                icon={'fal fa-chart-bar fa-xs'}
                title={'Новинки'}
                href={'/newest'}
            />
            {props.films.recommended.length > 0 &&
                <HomeRecommended
                    films={props.films.recommended}
                />
            }
            <FilmRow
                films={props.films.ongoing}
                icon={'fal fa-chart-bar fa-xs'}
                title={'Онгоинги'}
                href={'/ongoing'}
            />
        </main>

    );
}

// Todo: вынести в отделный хук функцию которая будет принимать колбек и дженерик пропсов странциы
//  (для типизирования getServerSideProps), и будет отлавливать ошибки с возможностью управлдения поведением страницы
export async function getServerSideProps() {
    try {
        const films = await filmService.getHomePage(['preview', 'newest', 'ongoing', 'recommended']);
        return {
            props: {
                films
            }
        };
    } catch (e) {
        return {
            notFound: true
        };
    }
}

export default Home;
