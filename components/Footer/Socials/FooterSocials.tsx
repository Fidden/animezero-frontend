import styles from './FooterSocials.module.scss';

function FooterSocials() {
    return (
        <aside className={'footer__block'}>
            <p className={'footer__title'}>
                Мы в соцсетях
            </p>
            <div className={styles.socials__body}>
                <a
                    href={'https://vk.com'}
                    target={'_blank'}
                    rel={'noreferrer'}>
                    <i className={'fab fa-vk'}/>
                </a>
                <a
                    href={'https://vk.com'}
                    target={'_blank'}
                    rel={'noreferrer'}>
                    <i className={'fab fa-telegram-plane'}></i>
                </a>
                <a
                    href={'https://vk.com'}
                    target={'_blank'}
                    rel={'noreferrer'}>
                    <i className={'fas fa-envelope'}></i>
                </a>
            </div>
        </aside>
    );
}

export default FooterSocials;
