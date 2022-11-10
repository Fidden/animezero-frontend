import ModalInput from '@/components/Modal/Input/ModalInput';
import ModalLayout from '@/components/Modal/Layout/ModalLayout';
import Button from '@/components/ui/Button/Button';
import {useAppDispatch} from '@/hooks/redux';
import useForm from '@/hooks/useForm';
import {ILoginRequest, userApi} from '@/store/api/userApi';
import {fetchUserFilms} from '@/store/extraReducers/fetchUserFilms';
import {modalActions} from '@/store/slices/modalSlice';
import {userActions} from '@/store/slices/userSlice';
import {memo} from 'react';

function ModalLogin() {
    const dispatch = useAppDispatch();
    const [userInfo] = userApi.useLazyInfoQuery();
    const [userLogin] = userApi.useLoginMutation();
    const [resendEmail] = userApi.useResendEmailMutation();

    const loginForm = useForm<ILoginRequest>({
        login: '',
        password: ''
    });

    const handleSubmit = () => {
        // set token to null to prevent errors
        dispatch(userActions.setToken(null));
        userLogin(loginForm.form())
            .unwrap()
            .then((data) => {
                dispatch(userActions.setToken(data.data.token));
                userInfo()
                    .then((result) => {
                        if (result?.data?.data) {
                            dispatch(userActions.setInfo(result.data.data));
                            dispatch(fetchUserFilms());
                        }
                    })
                    .finally(() => dispatch(modalActions.closeModal()));
            })
            .catch((error) => {
                //reset form errors
                loginForm.onClose();

                if (error.status === 403) {
                    dispatch(userActions.setToken(error.data.error.payload.token));
                    resendEmail().then(() => {
                        dispatch(modalActions.setType('email'));
                    });
                }

                // cant login form error 401 code
                error.data?.error?.message && loginForm.setFormMessage(error.data.error.message);

                //regular form errors with code 442
                error.data?.message && loginForm.setFormMessage(error.data.message);
                error.data?.errors && loginForm.setFormErrors(error.data.errors);
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
                type={'password'}
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
