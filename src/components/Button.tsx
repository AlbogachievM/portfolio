import React from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '../style/Theme';
import { NavLink } from 'react-router-dom';

type ButtonPropsType = {
    text: string
    to: string
}

export const Button = (props: ButtonPropsType) => {
    return (
        <StyledButton to={props.to}>{props.text}</StyledButton>
    );
};

const ButtonAfter = keyframes`
    0%{
        right: 35px}
    50%{
        right: 135px
    }
    100%{
        right: 35px
    }
`
const ButtonBefore = keyframes`
    0%{
        left: 35px
    }    
    50%{
        left: 135px
    }100%{
        left: 35px
}
`

const StyledButton = styled(NavLink)`
    position: relative;
    text-decoration: none;
    text-align: center;
    font-size: 16px;
    color: ${theme.colors.font};
    padding: 10px 0;
    max-width: 200px;
    width: 100%;
    background-color: ${theme.colors.primaryBg};
    border: 1px solid ${theme.colors.accent};
    border-radius: 8px;
    &::after{
        position: absolute;
        content: "";
        top: -1px;
        right: 35px;
        width: 30px;
        height: 1px;
        background-color: ${theme.colors.primaryBg};
        transition: all 0.3s ease 0s;
    }
    &::before{
        position: absolute;
        content: "";
        bottom: -1px;
        left: 35px;
        width: 30px;
        height: 1px;
        background-color: ${theme.colors.primaryBg};
        transition: all 0.5s ease 0s;
    }
    &:hover::after{
        animation-name: ${ButtonAfter};
        animation-duration: 1s;
    }
    &:hover::before{
        animation-name: ${ButtonBefore};
        animation-duration: 1s;
    }
`