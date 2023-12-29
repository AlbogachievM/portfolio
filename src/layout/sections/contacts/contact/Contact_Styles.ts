import styled from "styled-components"
import { theme } from "../../../../style/Theme"
import { font } from "../../../../style/Common"

const Card = styled.div`
    width: 275px;
    min-height: 200px;
    flex-grow: 1;
    background-color: ${theme.colors.primaryBg};
    border: 1px solid #a5a1a12e;
    border-radius: 20px;
    svg{
        fill: ${theme.colors.font};
        stroke: ${theme.colors.font};
    }
    a{
        
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    height: 100%;
    text-align: center;
    }
    
`

const Title = styled.h2`
    ${font({weight:400, Fmax: 20, Fmin: 18})};
    color: ${theme.colors.accent};
    &::first-letter{
        text-transform: uppercase;
    }
`
const Text = styled.p`
    ${font({weight:200, Fmax: 18, Fmin: 16})};
`

export const S = {
    Card,
    Title,
    Text,
}