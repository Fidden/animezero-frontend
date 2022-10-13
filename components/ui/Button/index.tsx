import {cn} from '@bem-react/classname';
import {IClassNameProps} from '@bem-react/core';
import {ElementType, PropsWithChildren} from 'react';

export interface IButtonProps extends PropsWithChildren<IClassNameProps> {
    as?: ElementType;
}

export const cnButton = cn('button');
