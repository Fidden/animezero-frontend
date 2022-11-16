import ModalEmail from '@/components/Modal/Email/ModalEmail';
import ModalLogin from '@/components/Modal/Login/ModalLogin';
import ModalRegister from '@/components/Modal/Register/ModalRegister';
import ModalSubmit from '@/components/Modal/Submit/ModalSubmit';
import {useAppSelector} from '@/hooks/redux';

function Modal() {
    const type = useAppSelector(store => store.modal.type);

    switch (type) {
        case 'login':
            return <ModalLogin/>;
        case 'register':
            return <ModalRegister/>;
        case 'email':
            return <ModalEmail/>;
        case 'submit':
            return <ModalSubmit/>;
        default:
            return <ModalLogin/>;
    }
}

export default Modal;
