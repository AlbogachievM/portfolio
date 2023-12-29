import styled from "styled-components";
import { theme } from "../style/Theme";
import { font } from "../style/Common";
import image from '../assets/images/textBg.png'


export const SectionText = styled.p`
    position: relative;
    ${font({weight:400, Fmax: 18, Fmin:16})}
    text-align: center;
    line-height: 1.6;
    letter-spacing: 2px;
    margin: 40px 0;

    @media ${theme.media.mobile}{
        text-align: justify;
    }

`