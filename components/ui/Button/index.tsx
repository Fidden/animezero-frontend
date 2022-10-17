import {cn} from '@bem-react/classname';
import {IClassNameProps} from '@bem-react/core';
import {ButtonHTMLAttributes, PropsWithChildren} from 'react';

export interface IButtonProps extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>, IClassNameProps {
    type?: 'button' | 'submit' | 'reset';
}

export const cnButton = cn('button');
