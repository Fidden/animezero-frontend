import Button from '@/components/ui/Button/Button';

function FooterSupport() {
    return (
        <div className="footer__block">
            <p className="footer__title">
                Поддержка
            </p>
            <Button
                style={{height: 'auto'}}
            >
                Написать в чате
            </Button>
        </div>
    );
}

export default FooterSupport;
