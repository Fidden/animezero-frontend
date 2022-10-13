import NextLink from '@/components/ui/NextLink';

function FooterInfo() {
    return (
        <aside className={'footer__block'}>
            <p className={'footer__title'}>
                Пользователям и партнёрам
            </p>
            <NextLink
                className={'footer__link'}
                href={'/'}
            >
                Сотрудничество
            </NextLink>
            <NextLink
                className={'footer__link'}
                href={'/'}
            >
                О проекте
            </NextLink>
            <NextLink
                className={'footer__link'}
                href={'/'}
            >
                Политика конфиденциальности
            </NextLink>
            <NextLink
                className={'footer__link'}
                href={'/'}
            >
                Для правообладателей
            </NextLink>
        </aside>
    );
}

export default FooterInfo;
