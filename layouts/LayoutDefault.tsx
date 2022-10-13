import Header from '@/components/Header/Header';
import {PropsWithChildren} from 'react';

function LayoutDefault({children}: PropsWithChildren) {
    return (
        <>
            <Header/>
            {children}
        </>
    );
}

export default LayoutDefault;
