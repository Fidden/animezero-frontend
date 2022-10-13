import axios from 'axios';
import type {AppProps} from 'next/app';
import 'styles/globals.scss';

export const request = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
});

function MyApp({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;

