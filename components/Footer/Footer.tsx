import FooterInfo from '@/components/Footer/Info/FooterInfo';
import FooterNav from '@/components/Footer/Nav/FooterNav';
import FooterSocials from '@/components/Footer/Socials/FooterSocials';
import FooterSupport from '@/components/Footer/Support/FooterSupport';

import styles from './Footer.module.scss';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <FooterNav/>
                <FooterInfo/>
                <FooterSocials/>
                <FooterSupport/>
            </div>
        </footer>
    );
}

export default Footer;
