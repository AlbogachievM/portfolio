import styled from "styled-components"
import { theme } from "../../style/Theme"

const Social = styled.aside`
    max-width: 80px;
    width: 100%;
    border-left: 1px dotted ${theme.colors.font};
    @media ${theme.media.tablet}{
        display: none;
    }
 
`
const SocialWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    gap: 15px;
    position: sticky;
    top: 50%;
    transform: translateY(-50%);


    svg{
        fill: ${theme.colors.font};
        stroke: ${theme.colors.font};
        transition: ease 0.2s;
     
    }
`
const Title = styled.h4`
    writing-mode: vertical-rl;
    letter-spacing: 10px;
`
const Link = styled.a`
    position: relative;
    display: inline-block;
    
    span{
        max-width: 200px;
        font-size: 0;
        text-align: center;
        display: block;
        padding: 5px;
        border-radius: 10px;
        word-break: keep-all;
        width: 0;
        position: absolute;
        top: 50%;
        left: -20%;
        transform: translate(-100%, -50%);
        color: ${theme.colors.accent};
        background-color: ${theme.colors.accent};
        -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
        -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
        box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
        transition: all 0.2s;
    }
     &:hover{
            svg{
                transform: scale(1.2);
                stroke: ${theme.colors.font};
            }
            span{
                background-color: ${theme.colors.font};
                padding: 8px;
                font-size: 14px;
                width: 200px;
            }

         }
`

export const S = {
    Social,
    SocialWrapper,
    Title,
    Link,
}