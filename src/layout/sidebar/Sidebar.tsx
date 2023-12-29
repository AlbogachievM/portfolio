import { Icon } from '../../components/icon/Icon';
import { MenuBurger } from '../../components/menu/Menu';
import { S } from './Sidebar_Styles';
import { useState } from 'react';

const items = [
    { title: 'Main', href: '/Main', icon: 'main' },
    { title: 'My Skills', href: '/Skills', icon: 'skills' },
    { title: 'My projects', href: '/Projects', icon: 'projects', viewBoxIcon: '0 0 72 72' },
    { title: 'Contacts', href: '/Contacts', icon: 'contact', viewBoxIcon: '0 0 62 62' },
]
 
export const Sidebar: React.FC = () => {

    return (
        <S.Sidebar>
            <MenuBurger />
            <S.SidebarList>
                {items.map(({ title, href, icon, viewBoxIcon }, index) => <S.SidebarItem key={index}> <S.SidebarLink to={href}>
                    <Icon iconId={icon} width='30px' height='30px' viewBox={viewBoxIcon || '0 0 100 100'} aria-hidden='true' />
                    <span>{title}</span></S.SidebarLink>
                </S.SidebarItem>)}
            </S.SidebarList>
        </S.Sidebar>
    );
};