/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            'st.kp.yandex.net',
            'adonius.club',
            'shikimori.one',
            'avatars.githubusercontent.com'
        ]
    },
    sassOptions: {
        includePaths: ['./'],
        prependData: `@import "@/styles/variables.scss";`
    }
};

module.exports = nextConfig;
