import {useRef, useState} from 'react';

function useForm<T>(body: T) {
    const form = useRef<T>(body);
    const [formErrors, setFormErrors] = useState<Partial<T>>({});
    const [formMessage, setFormMessage] = useState<string>('');

    return {
        form: () => form.current,
        formErrors: () => formErrors,
        formMessage: () => formMessage,
        setFormErrors: (errors: Partial<T>) => setFormErrors(errors),
        setFormMessage: (message: string) => setFormMessage(message),
        onClose: () => {
            setFormMessage('');
            setFormErrors({});
        }
    };
}

export default useForm;
