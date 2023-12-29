import { S } from './Contact_Styles';
import { Icon } from '../../../../components/icon/Icon';

type CardPropsType = {
    icon: string,
    title: string,
    text?: string,
    color?: string
}

export const Contact = (props: CardPropsType) => {
    return (
        <S.Card>
            <Icon iconId={props.icon} width='50px' height='50px' viewBox='0 0 50 50'/>
            <S.Title>{props.title}</S.Title>
            <S.Text>{props.text}</S.Text>
        </S.Card>
    );
};
