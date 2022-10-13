import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import {PropsWithChildren} from 'react';

function LayoutDefault({children}: PropsWithChildren) {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    );
}

export default LayoutDefault;
