import {withButtonIcon} from '@/components/ui/Button/_icon/Button_icon';
import {cnButton, IButtonProps} from '@/components/ui/Button/index';
import useTransformCSS from '@/hooks/useTransformCSS';

import {compose} from '@bem-react/core';
import {memo} from 'react';

import styles from './Button.module.scss';

export function ButtonNoMod({children, className, type = 'button', ...props}: IButtonProps) {
    const transformedCss = useTransformCSS(styles, cnButton({}, [className]));
    return (
        <button type={type} {...props} className={transformedCss}>
            {children}
        </button>
    );
}

export default compose(
    withButtonIcon
)(memo(ButtonNoMod));
