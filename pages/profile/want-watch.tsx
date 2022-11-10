import ProfilePage from '@/components/Profile/Page/Page';
import {filmsApi} from '@/store/api/filmsApi';

import dynamic from 'next/dynamic';
import {useState} from 'react';

const ProfileInfoGate = dynamic(() => import('@/components/Profile/ProfileInfoGate'), {
    ssr: false
});


function ProfileWantWatch() {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const {data: films, isLoading} = filmsApi.useWantWatchQuery(currentPage, {
        refetchOnMountOrArgChange: true
    });

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <ProfileInfoGate>
            <ProfilePage
                title={'Хочу посмотреть'}
                films={films}
                isLoading={isLoading}
                onPageChange={handlePageChange}
            />
        </ProfileInfoGate>
    );
}

export default ProfileWantWatch;
