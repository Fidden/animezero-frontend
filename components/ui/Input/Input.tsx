import classNames from 'classnames';
import {InputHTMLAttributes, memo} from 'react';

import styles from './Input.module.scss';

interface IModalInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string | string[];
}

function Input(props: IModalInputProps) {
    return (
        <label className={styles.label}>
            {props.label &&
                <span className={styles.labelText}>
                    {props.label}
                </span>
            }
            <input
                className={classNames(styles.input, {
                    [styles.inputError]: props.error
                })}
                {...props}
            />
            {props.error &&
                <p className={styles.labelError}>
                    {props.error}
                </p>
            }
        </label>
    );
}

export default memo(Input);
