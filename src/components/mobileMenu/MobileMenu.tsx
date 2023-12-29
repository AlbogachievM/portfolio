import React, { useState } from 'react';
import { Icon } from '../icon/Icon';
import { S } from './MobileMenu_Styled';

const items = [
    { href: '/Main', icon: 'main' },
    { href: '/Skills', icon: 'skills' },
    { href: '/Projects', icon: 'projects', viewBoxIcon: '0 0 72 72' },
    { href: '/Contacts', icon: 'contact', viewBoxIcon: '0 0 62 62' },
]

export const MobileMenu: React.FC = () => {

    return (
        <S.MobileMenu>
            <S.MobileMenuList>
                {items.map(({ href, icon, viewBoxIcon }, index,) => {
                    return (
                        <S.MobileMenuItem key={index}>
                            <S.MobileMenuLink to={href}>
                                <Icon iconId={icon} width='30px' height='30px' viewBox={viewBoxIcon || '0 0 100 100'} aria-hidden='true' />
                            </S.MobileMenuLink>
                        </S.MobileMenuItem>)
                })}
            </S.MobileMenuList>
        </S.MobileMenu >
    );
};

