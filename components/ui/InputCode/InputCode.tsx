import classNames from 'classnames';
import {useEffect, useState} from 'react';
import styles from './InputCode.module.scss';

interface IInputCodeProps {
    onChange: (value: string) => void;
}

function InputCode(props: IInputCodeProps) {
    const [inputCode, setInputCode] = useState<string>('');

    useEffect(() => {
        props.onChange(inputCode);
    }, [inputCode]);

    return (
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
    );
}

export default InputCode;
