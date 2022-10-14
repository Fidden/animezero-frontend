import useRequest from '@/hooks/useRequest';
import type {AppProps} from 'next/app';
import 'styles/globals.scss';

export const request = useRequest();

function MyApp({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;

