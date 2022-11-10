import classNames from 'classnames';
import {ChangeEvent, InputHTMLAttributes, memo} from 'react';

import styles from './ModalInput.module.scss';

interface IModalInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    placeholder?: string;
    type: 'text' | 'password' | 'email';
    error?: string | string[];
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function ModalInput(props: IModalInputProps) {
    return (
        <label className={styles.label}>
            {props.label &&
                <span className={styles.labelText}>
                    {props.label}
                </span>
            }
            <input
                onChange={props.onChange}
                type={props.type}
                placeholder={props.placeholder}
                className={classNames(styles.input, {
                    [styles.inputText]: props.type === 'text',
                    [styles.inputPassword]: props.type === 'password',
                    [styles.inputEmail]: props.type === 'email',
                    [styles.inputError]: props.error
                })}
            />
            {props.error &&
                <p className={styles.labelError}>
                    {props.error}
                </p>
            }
        </label>
    );
}

export default memo(ModalInput);
