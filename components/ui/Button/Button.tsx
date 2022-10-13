import {withButtonIcon} from '@/components/ui/Button/_icon/Button_icon';
import {cnButton, IButtonProps} from '@/components/ui/Button/index';
import useTransformCSS from '@/hooks/useTransformCSS';
import {compose} from '@bem-react/core';
import styles from './Button.module.scss';

export function ButtonNoMod({children, className, as: Component = 'button', ...props}: IButtonProps) {
    const transformedCss = useTransformCSS(styles, cnButton({}, [className]));
    return (
        <Component {...props} className={transformedCss}>
            {children}
        </Component>
    );
}

export default compose(
    withButtonIcon
)(ButtonNoMod);
