import styled from "styled-components"
import { theme } from "../../../../style/Theme"
import { font } from "../../../../style/Common"

const Link = styled.a`
    display: flex;
    flex-direction: column;
    height: 100%;
`
const Text = styled.span`
    display: block;
    text-align: center;
    text-transform: uppercase;
    color: ${theme.colors.font};
    background-color: ${theme.colors.accent};
    transition: ease-in 0.2s;

`
const Title = styled.h3`
    ${font({ weight: 400, Fmax: 22, Fmin: 18 })}
    margin: 10px 0 10px 20px;
    color: ${theme.colors.accent};
`
const Image = styled.img`
    width: 100%;
    flex-grow: 1;
`
const Project = styled.article`
    cursor: pointer;
    width: 465px;
    flex-grow: 1;
    background-color: ${theme.colors.primaryBg};
    border: 1px solid #a5a1a12e;
    border-radius: 20px;
    overflow: hidden;
    &:hover{
        ${Text}{
            letter-spacing: 5px;
            color: ${theme.colors.accent};
            background-color: ${theme.colors.font};
            font-weight: 700;
        }
    }
`

export const S = {
    Link,
    Text,
    Title,
    Image,
    Project,
}