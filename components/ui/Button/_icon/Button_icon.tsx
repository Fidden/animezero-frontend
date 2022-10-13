import {withBemMod} from '@bem-react/core';
import {cnButton, IButtonProps} from '../index';

export interface IButtonIconProps {
    icon?: string;
}

export const withButtonIcon = withBemMod<IButtonIconProps, IButtonProps>(
    cnButton(),
    {icon: true},
    // eslint-disable-next-line react/display-name
    (Button) => (props) => <Button {...props}/>
);
