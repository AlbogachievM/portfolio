import React from 'react';
import styled from 'styled-components';

type ButtonPropsType = {
    text: string
}

export const Button = (props: ButtonPropsType) => {
    return (
        <StyledButton>{props.text}</StyledButton>
    );
};


const StyledButton = styled.button`
    margin-right: 20px;
`