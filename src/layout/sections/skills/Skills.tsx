import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Card } from '../../../components/card/Card';
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper justify='space-around' wrap='wrap'>
                <Card icon={'code'} title={'html5'} />
                <Card icon={'css'} title={'css3'} />
                <Card icon={'styled'} title={'styled components'} />
                <Card icon={'typescript'} title={'typescript'} />
                <Card icon={'react'} title={'react'} />
            </FlexWrapper>
        </StyledSkills>
    );
};


const StyledSkills = styled.section`
    
`