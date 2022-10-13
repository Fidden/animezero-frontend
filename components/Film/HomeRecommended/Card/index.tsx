import {IFilm} from '@/interfaces/IFilm';
import {cn} from '@bem-react/classname';
import {IClassNameProps} from '@bem-react/core';
import {ElementType} from 'react';

export interface IRecommendedCardProps extends IClassNameProps {
    as: ElementType;
    film: IFilm;
}

export const cnRecommendedCard = cn('recommendedCard');
