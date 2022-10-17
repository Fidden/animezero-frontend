import ModalInput from '@/components/Modal/Input/ModalInput';
import ModalLayout from '@/components/Modal/Layout/ModalLayout';
import Button from '@/components/ui/Button/Button';
import {useAppDispatch} from '@/hooks/redux';
import useForm from '@/hooks/useForm';
import {ILoginRequest, userApi} from '@/store/api/userApi';
import {userActions} from '@/store/slices/userSlice';
import {memo} from 'react';

function ModalLogin() {
    const dispatch = useAppDispatch();
    const [userLogin] = userApi.useLoginMutation();

    const loginForm = useForm<ILoginRequest>({
        login: '',
        password: ''
    });

    const handleSubmit = () => {
        userLogin(loginForm.form())
            .unwrap()
            .then((data) => {
                dispatch(userActions.setToken(data.data.token));
                dispatch(userActions.setAuth(true));
            })
            .catch((error) => {
                error.data.message && loginForm.setFormMessage(error.data.message);
                error.data.errors && loginForm.setFormErrors(error.data.errors);
            });
    };


    const handleClose = () => {
        loginForm.onClose();
    };

    return (
        <ModalLayout
            title={'Вход'}
            subTitle={'С возвращением'}
            onSubmit={handleSubmit}
            footerText={'Нажимая "Войти", Вы соглашаетесь с политикой обработки персональных данных'}
            formMessage={loginForm.formMessage()}
            onClose={handleClose}
            navigation={{
                enable: true,
                prev: 'Еще нет аккаунта?',
                next: {
                    text: 'Регистрация',
                    state: 'register'
                }
            }}
        >
            <ModalInput
                label={'Напомнишь свой логин?'}
                placeholder={'Логин'}
                type={'text'}
                onChange={(e) => loginForm.form().login = e.target.value}
                error={loginForm.formErrors()?.login}
            />

            <ModalInput
                label={'И пароль :)'}
                placeholder={'Пароль'}
                type={'text'}
                onChange={(e) => loginForm.form().password = e.target.value}
                error={loginForm.formErrors()?.password}
            />
            <Button
                className={'form__button'}
                type={'submit'}
            >
                Войти
            </Button>
        </ModalLayout>
    );
}

export default memo(ModalLogin);
