import styled from 'styled-components';
import { theme } from '../style/Theme';


export const SectionTitle = styled.h2`
    position: relative;
    text-align: center;
    text-transform: uppercase;
    &::before{
        content: '';
        position: absolute;
        top: 50%;
        left: 65%;
        right: 0;
        transform: translateY(-50%);
        background-color: ${theme.colors.accent};
        height: 2px;
        @media ${theme.media.tablet}{
            left: 75%;
        }
        @media ${theme.media.mobile}{
            opacity: 0;
        }
    }
    &::after{
        content: '';
        display: inline-block;
        position: absolute;
        top: 50%;
        right:65%;
        left: 0;
        transform: translateY(-50%);
        background-color: ${theme.colors.accent};
        height: 2px;
        @media ${theme.media.tablet}{
            right: 75%;
        }        
        @media ${theme.media.mobile}{
            top: auto;
            right: auto;
            bottom: -20px;
            width: 80px;
            left: 50%;
            transform: translateX(-50%);

        }
    }
`