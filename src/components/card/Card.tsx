import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';

type CardPropsType = {
    title: string,
    text?: string,
    icon: string,
}

export const Card = (props: CardPropsType) => {
    return (
        <StyledCard>
            <Icon iconId={props.icon} />
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
        </StyledCard>
    );
};

const StyledCard = styled.div`
    gap: 20px;
    width: 220px;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #6464641a;
    border: 1px solid #a5a1a12e;
    border-radius: 20px;
    
`

const Title = styled.div`
    
`

const Text = styled.div`
    
`