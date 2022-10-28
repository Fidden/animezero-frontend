import Modal from '@/components/Modal/Modal';
import useRequest from '@/hooks/useRequest';
import LayoutDefault from '@/layouts/LayoutDefault';
import {persistor, store} from '@/store/store';
import type {AppProps} from 'next/app';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import 'styles/globals.scss';

export const request = useRequest();

function MyApp({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <LayoutDefault>
                    <Component {...pageProps} />
                    <Modal/>
                </LayoutDefault>
            </PersistGate>
        </Provider>
    );
}

export default MyApp;

