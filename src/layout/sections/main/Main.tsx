import { FlexWrapper } from '../../../components/FlexWrapper';
import logo from '../../../assets/images/logo.png'
import React from 'react';
import { Button } from '../../../components/Button';
import { S } from './Main_Styles';

export const Main: React.FC = () => {
    return (
        <S.Main>
            <FlexWrapper justify='space-between' wrap='wrap-reverse' align='center' gap='20px'>
                <S.Info>
                    <S.SmallText>Hi There!</S.SmallText>
                    <S.Name>I'm Magomed Albogachiev</S.Name>
                    <S.Title>Front - End Developer</S.Title>
                    <S.ButtonWrapper>
                        <Button to='/Skills' text={'My skills'} />
                        <Button to='/Contacts' text={'My contacts'} />
                    </S.ButtonWrapper>
                </S.Info>
                    <S.Logo src={logo} alt="logo" />
            </FlexWrapper>
        </S.Main>
    );
};