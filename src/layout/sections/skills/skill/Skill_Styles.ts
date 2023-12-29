import styled from "styled-components"
import { theme } from "../../../../style/Theme"
import { font } from "../../../../style/Common"

const Skill = styled.div`
    width: 275px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    text-align: center;
    background-color: ${theme.colors.primaryBg};
    border: 1px solid #a5a1a12e;
    border-radius: 20px;
    color: ${theme.colors.accent};
    @media ${theme.media.tablet}{
        width: 200px;
        
    flex-grow: 1;
    }
`
const Title = styled.h2`

${font({ weight: 400, Fmax: 20, Fmin: 18 })};
    &::first-letter{
        text-transform: uppercase;
    }
`

export const S = {
    Skill,
    Title,
}