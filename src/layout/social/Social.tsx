import React from 'react';
import { Icon } from '../../components/icon/Icon';
import { S } from './Socia_Styles';


export const Social: React.FC = () => {
    return (
        <S.Social>
            <S.SocialWrapper>
                <S.Title>My contacts:</S.Title>
                <S.Link href="https://t.me/ALEM_OF_STEEL" aria-label='telegram'>
                    <Icon width='24px' height='24px' viewBox='0 0 24 24' iconId={'telegram'} aria-hidden='true' />
                    <span>Telegram</span>
                </S.Link>
                <S.Link href="mailto:albogachiev-2014@mail.ru" aria-label='mail'>
                    <Icon width='24px' height='24px' viewBox='0 0 24 24' iconId={'email'} aria-hidden='true' />
                    <span>Email</span>
                </S.Link>
                <S.Link href="#" aria-label='mail'>
                    <Icon width='24px' height='24px' viewBox='0 0 24 24' iconId={'phone'} aria-hidden='true' />
                    <span>+7 (922) 677-10-88</span>
                </S.Link>
            </S.SocialWrapper>
        </S.Social>
    );
};
