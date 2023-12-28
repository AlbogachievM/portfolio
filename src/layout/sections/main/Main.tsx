import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import photo from '../../../assets/images/photo.jpeg'
import { Button } from '../../../components/Button';
export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper justify='space-between'>
                <div>
                    <span>Hi There</span>
                    <Name>I'm Magomed Albogachiev</Name>
                    <Title>A Frontend Developer</Title>
                    <Text>I'm a beginner front-end developer.</Text>
                    <Button text={'Learn more'} />
                    <Button text={'My contacts'}/>
                </div>
                <Photo src={photo} />
            </FlexWrapper>
        </StyledMain>
    );
};


const StyledMain = styled.div`
    
`

const Title = styled.h1`
    font-size: 1.5em;
`;

const Name = styled.h2`
    font-size: 1.5em;
`;

const Text = styled.p`
    font-size: 1.5em;
`;


const Photo = styled.img`
      width: 350px;
    height: 430px;
    object-fit: cover;

`