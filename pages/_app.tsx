import Modal from '@/components/Modal/Modal';
import useRequest from '@/hooks/useRequest';
import {store} from '@/store/store';
import type {AppProps} from 'next/app';
import {Provider} from 'react-redux';
import 'styles/globals.scss';

export const request = useRequest();

function MyApp({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
            <Modal/>
        </Provider>
    );
}

export default MyApp;

