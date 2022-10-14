import {cnRecommendedCard, IRecommendedCardProps} from '@/components/HomeRecommended/Card';
import {withBemMod} from '@bem-react/core';

export interface IRecommendedCardSmallProps {
    small?: boolean;
}

export const withRecommendedCardSmall = withBemMod<IRecommendedCardSmallProps, IRecommendedCardProps>(
    cnRecommendedCard(),
    {small: true},
    // eslint-disable-next-line react/display-name
    (RecommendedCard) => (props) => <RecommendedCard {...props}/>
);
