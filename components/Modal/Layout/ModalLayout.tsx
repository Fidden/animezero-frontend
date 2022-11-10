import {useAppDispatch, useAppSelector} from '@/hooks/redux';
import {modalActions} from '@/store/slices/modalSlice';
import {TModal} from '@/types/TModal';

import classNames from 'classnames';
import {FormEvent, memo, MouseEvent, PropsWithChildren, useEffect} from 'react';

import styles from './ModalLayout.module.scss';

interface IModalProps {
    title: string;
    subTitle?: string;
    footerText?: string;
    formMessage?: string;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
    onClose?: () => void;
    navigation?: {
        enable: boolean;
        prev: string;
        next: {
            text: string;
            state: TModal;
        }
    };
}

function ModalLayout(props: PropsWithChildren<IModalProps>) {
    const dispatch = useAppDispatch();
    const isOpen = useAppSelector(state => state.modal.open);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSubmit(e);
    };

    const handleClickOutside = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        e.target === e.currentTarget && dispatch(modalActions.closeModal());
    };

    useEffect(() => {
        const bodyRef = document.getElementsByTagName('body')[0];
        isOpen && (bodyRef.style.overflow = 'hidden');
        !isOpen && (bodyRef.style.overflow = 'auto');

        if (props.onClose) {
            props.onClose();
        }

    }, [isOpen]);

    return (<>
        {isOpen &&
            <div
                onMouseDown={handleClickOutside}
                className={styles.modal__backdrop}
            >
                <form
                    className={styles.modal}
                    onSubmit={handleSubmit}
                >
                    <h2 className={styles.modal__title}>
                        {props.title}
                    </h2>
                    <p className={styles.modal__subtitle}>
                        {props.subTitle}
                    </p>
                    {props.formMessage &&
                        <p className={styles.modal__message}>
                            {props.formMessage}
                        </p>
                    }
                    <div
                        className={classNames(styles.modal__body, {
                            [styles.modal__bodyMessage]: props?.formMessage
                        })}>
                        {props.children}
                    </div>
                    {(props.footerText && props.navigation?.enable) &&
                        <footer className={styles.modal__footer}>
                            <p className={styles.modal__footerText}>
                                {props.footerText}
                            </p>

                            <div className={styles.modal__footerNavigation}>
                                {props.navigation.prev &&
                                    <p className={styles.modal__footerNavigationPrev}>
                                        {props.navigation.prev}
                                    </p>
                                }
                                {props.navigation.next &&
                                    <p
                                        className={styles.modal__footerNavigationNext}
                                        onClick={() => dispatch(modalActions.setType(props.navigation?.next.state))}>
                                        {props.navigation.next.text}
                                    </p>
                                }
                            </div>
                        </footer>
                    }
                </form>
            </div>
        }
    </>);

}

export default memo(ModalLayout);
