import styled, { keyframes } from "styled-components"
import { theme } from "../../../style/Theme"
import { font } from "../../../style/Common"
import { FlexWrapper } from "../../../components/FlexWrapper"


const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    padding: 0 20px 50px;
    ${FlexWrapper}{
        justify-content: space-evenly;
    }
    
`
const Info = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const ButtonWrapper = styled.div`
    margin-top: 50px;
    display: flex;
    gap: 20px;
`
const SmallText = styled.span`
    text-decoration: underline;
    font-size: 14px;
    font-weight: 400;
    color: ${theme.colors.accent};
    
`
const Title = styled.h1`
    ${font({ weight: 400, Fmax: 25, Fmin: 18 })}
    color: ${theme.colors.accent};
`
const Name = styled.h2`
    ${font({ weight: 400, Fmax: 35, Fmin: 22 })}
    margin: 10px 0;
    white-space: nowrap;
`
const animLogo = keyframes`
    0%, 100% {
        border-radius: 70% 30% 72% 28% /27% 61% 39% 73%;
    }
    50%{
        border-radius: 77% 23% 54% 46% / 40% 38% 62% 60%
    }
`
const Logo = styled.img`
    position: relative;
    max-width: 500px;
    width: 100%;
    background-color: #fff;
    border: 2px dotted ${theme.colors.accent};
    animation: 4s ease-in-out infinite normal none running ${animLogo};
    object-fit: cover;
    background-position: center center;
    @media ${theme.media.tablet}{
        max-width: 350px;
        height: 350px;
    }
`


export const S = {
    Main,
    Info,
    ButtonWrapper,
    SmallText,
    Title,
    Name,
    Logo,
    
}