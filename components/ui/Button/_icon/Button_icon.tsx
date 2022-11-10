import {withBemMod} from '@bem-react/core';

import {cnButton, IButtonProps} from '../index';

export interface IButtonIconProps {
    icon?: boolean;
}

export const withButtonIcon = withBemMod<IButtonIconProps, IButtonProps>(
    cnButton(),
    {icon: true},
    // eslint-disable-next-line react/display-name
    (Button) => (props) => <Button {...props}/>
);
