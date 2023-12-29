
import { Icon } from '../../../../components/icon/Icon';
import { S } from './Skill_Styles';

type SkillPropsType = {
    icon: string,
    title: string,
    text?: string,
    color?: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <Icon iconId={props.icon} />
            <S.Title>{props.title}</S.Title>
        </S.Skill>
    );
};
