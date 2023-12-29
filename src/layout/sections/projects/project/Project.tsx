import { S } from "./Project_Styles";

type ProjectPropsType = {
    title: string
    image: string
    link: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <S.Project>
            <S.Link href={props.link}>
                <S.Title>{props.title}</S.Title>
                <S.Image src={props.image} alt="image's project" />
                <S.Text>see the sourse</S.Text>
            </S.Link>
        </S.Project>
    );
};
