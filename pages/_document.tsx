import {Head, Html, Main, NextScript} from 'next/document';

function Document() {
    return (
        <Html>
            <Head>
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap"
                    rel="stylesheet"
                />
                <link
                    crossOrigin="anonymous"
                    href="https://pro.fontawesome.com/releases/v5.12.0/css/all.css"
                    rel="stylesheet"
                />
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}

export default Document;
