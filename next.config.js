/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            'st.kp.yandex.net',
            'adonius.club'
        ]
    }
};

module.exports = nextConfig;
