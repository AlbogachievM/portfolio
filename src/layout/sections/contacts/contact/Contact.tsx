import { S } from './Contact_Styles';
import { Icon } from '../../../../components/icon/Icon';

type CardPropsType = {
    icon: string
    title: string
    text?: string
    color?: string
    href?: string
}

export const Contact = (props: CardPropsType) => {
    return (
        <S.Card>
            <a href={props.href}>
                <Icon iconId={props.icon} width='50px' height='50px' viewBox='0 0 25 25' />
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
            </a>
        </S.Card>
    );
};
