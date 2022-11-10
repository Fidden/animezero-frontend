import ModalLayout from '@/components/Modal/Layout/ModalLayout';
import Button from '@/components/ui/Button/Button';
import {useAppDispatch} from '@/hooks/redux';
import {userApi} from '@/store/api/userApi';
import {fetchUserFilms} from '@/store/extraReducers/fetchUserFilms';
import {modalActions} from '@/store/slices/modalSlice';
import {userActions} from '@/store/slices/userSlice';

import classNames from 'classnames';
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
            <div className={styles.code}>
                {Array(7).fill(0).map((_, i) => (
                        <div
                            className={classNames(styles.codeBlock, {
                                [styles.codeBlockActive]: inputCode?.at(i > 3 ? i - 1 : i)
                            })}
                            key={i}
                        >
                            <span>{inputCode?.at(i > 3 ? i - 1 : i)}</span>
                        </div>
                    )
                )}
                <input
                    className={styles.codeInput}
                    type="text"
                    maxLength={6}
                    onChange={(e) => setInputCode(e.target.value)}
                />
            </div>
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
