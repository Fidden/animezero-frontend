import ModalInput from '@/components/Modal/Input/ModalInput';
import ModalLayout from '@/components/Modal/Layout/ModalLayout';
import Button from '@/components/ui/Button/Button';
import {useAppDispatch} from '@/hooks/redux';
import useForm from '@/hooks/useForm';
import {IRegisterRequest, userApi} from '@/store/api/userApi';
import {modalActions} from '@/store/slices/modalSlice';
import {userActions} from '@/store/slices/userSlice';
import {memo} from 'react';


function ModalRegister() {
    const dispatch = useAppDispatch();
    const [userRegister] = userApi.useRegisterMutation();

    const registerForm = useForm<IRegisterRequest>({
        login: '',
        email: '',
        password: '',
        password_repeat: ''
    });

    const handleRegister = async () => {
        dispatch(userActions.setEmail(registerForm.form().email));
        userRegister(registerForm.form())
            .unwrap()
            .then((data) => {
                dispatch(userActions.setToken(data.data.token));
                dispatch(modalActions.setType('email'));
            })
            .catch((error) => registerForm.setFormErrors(error.data.errors));
    };

    const handleClose = () => {
        registerForm.onClose();
    };

    return (
        <ModalLayout
            title={'Регистрация'}
            subTitle={'Добро пожаловать'}
            onSubmit={handleRegister}
            onClose={handleClose}
            footerText={'Нажимая "Зарегистрироваться", Вы соглашаетесь с политикой обработки персональных данных'}
            navigation={{
                enable: true,
                prev: 'Уже есть аккаунт?',
                next: {
                    text: 'Войти',
                    state: 'login'
                }
            }}
        >
            <ModalInput
                onChange={(e) => registerForm.form().login = e.target.value}
                label={'Как тебя называть'}
                type={'text'}
                placeholder={'Имя или никнейм'}
                error={registerForm.formErrors()?.login}
            />

            <ModalInput
                onChange={(e) => registerForm.form().email = e.target.value}
                label={'А твоя почта...?'}
                type={'email'}
                placeholder={'Электронная почта'}
                error={registerForm.formErrors()?.email}
            />

            <ModalInput
                onChange={(e) => registerForm.form().password = e.target.value}
                label={'Куда уж без этого'}
                type={'password'}
                placeholder={'Пароль'}
                error={registerForm.formErrors()?.password}
            />

            <ModalInput
                onChange={(e) => registerForm.form().password_repeat = e.target.value}
                type={'password'}
                placeholder={'Повторение пароля'}
                error={registerForm.formErrors()?.password_repeat}
            />

            <Button
                className={'form__button'}
                type={'submit'}
            >
                Зарегистрироваться
            </Button>
        </ModalLayout>
    );
}

export default memo(ModalRegister);
