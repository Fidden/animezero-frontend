import ModalLayout from '@/components/Modal/Layout/ModalLayout';
import Button from '@/components/ui/Button/Button';
import InputCode from '@/components/ui/InputCode/InputCode';
import {useAppDispatch} from '@/hooks/redux';
import {userApi} from '@/store/api/userApi';
import {fetchUserFilms} from '@/store/extraReducers/fetchUserFilms';
import {modalActions} from '@/store/slices/modalSlice';
import {userActions} from '@/store/slices/userSlice';
import {useState} from 'react';
import styles from './ModalEmail.module.scss';

function ModalEmail() {
    const dispatch = useAppDispatch();
    const {data: user, refetch} = userApi.useInfoQuery();
    const [inputCode, setInputCode] = useState<string>('');
    const [verifyEmail] = userApi.useVerifyEmailMutation();
    const [resendEmail] = userApi.useResendEmailMutation();
    const [formMessage, setFormMessage] = useState<string>('');

    const handleSubmit = () => {
        verifyEmail({code: inputCode})
            .unwrap()
            .then(() => {
                if (user) {
                    refetch();
                    dispatch(userActions.setInfo(user.data));
                    dispatch(fetchUserFilms());
                }
                dispatch(modalActions.closeModal());
            })
            .catch(() => setFormMessage('Кажется ты ввел неверный код, попробуй еще раз ;)'));
    };

    const handleResend = () => {
        resendEmail()
            .unwrap()
            .then(() => setFormMessage('Код отправлен повторно'))
            .catch(() => setFormMessage('Не так быстро, ты превысил лимит, прийдется подождать.'));
    };

    const handleClose = () => {
        setFormMessage('');
    };

    return (
        <ModalLayout
            title={'Подтверждение входа'}
            subTitle={`Введите 6х значный код который мы выслали вам на ${user?.data.email}`}
            onSubmit={handleSubmit}
            formMessage={formMessage}
            onClose={handleClose}
        >
            <InputCode
                onChange={setInputCode}
            />
            <Button
                className={'form__button'}
                type={'submit'}
            >
                Подтвердить
            </Button>
            <p className={styles.info}>Не пришёл код?</p>
            <button
                type={'button'}
                onClick={handleResend}
                className={styles.resend}
            >
                Выслать повторно
            </button>
        </ModalLayout>
    );
}

export default ModalEmail;
