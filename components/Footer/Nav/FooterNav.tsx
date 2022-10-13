import NextLink from '@/components/ui/NextLink';

function FooterNav() {
    return (
        <aside className={'footer__block'}>
            <p className={'footer__title'}>
                Разделы
            </p>
            <NextLink
                className={'footer__link'}
                href={'/'}
            >
                Главная
            </NextLink>
            <NextLink
                className={'footer__link'}
                href={'/films'}
            >
                Фильмы
            </NextLink>
            <NextLink
                className={'footer__link'}
                href={'/serials'}
            >
                Сериалы
            </NextLink>
        </aside>
    );
}

export default FooterNav;
