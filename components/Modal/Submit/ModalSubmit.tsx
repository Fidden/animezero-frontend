import ModalLayout from '@/components/Modal/Layout/ModalLayout';
import Button from '@/components/ui/Button/Button';
import InputCode from '@/components/ui/InputCode/InputCode';

function ModalSubmit() {
    return (
        <ModalLayout
            title={'Подтверждение действия'}
            subTitle={'Вы уверены ?'}
            onSubmit={() => console.log('submit')}
            onClose={() => console.log('close')}
        >
            <InputCode
                onChange={() => console.log('change')}
            />
            <Button
                type={'submit'}
            >
                Подтвердить
            </Button>
        </ModalLayout>
    );
}

export default ModalSubmit;
