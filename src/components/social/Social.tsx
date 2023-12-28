import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';

export const Social = () => {
    return (
        <StyledSocial>
            <Icon iconId={'logo'}/>
            <div>
                <span>Свяжитесь с нами:</span>
                <a href=""><Icon iconId={''}/></a>
                <a href=""><Icon iconId={''}/></a>
            </div>
        </StyledSocial>
    );
};

const StyledSocial = styled.div`
    width: 5%;
    border-left: 2px dotted #333;
`