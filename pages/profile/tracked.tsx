import ProfilePage from '@/components/Profile/Page/Page';

import {filmsApi} from '@/store/api/filmsApi';
import dynamic from 'next/dynamic';
import {useRouter} from 'next/router';

const ProfileInfoGate = dynamic(() => import('@/components/Profile/ProfileInfoGate'), {
    ssr: false
});

function ProfileTracked() {
    const router = useRouter();
    const page = Number(router.query.page) || 1;
    const {data: films} = filmsApi.useTrackedQuery(page);

    return (
        <ProfileInfoGate>
            <ProfilePage
                title={'Отслеживаемое'}
                films={films}
                onPageChange={() => console.log('page change')}
            />
        </ProfileInfoGate>
    );
}

export default ProfileTracked;
