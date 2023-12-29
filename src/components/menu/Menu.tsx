import { S } from './Menu_Styled';
import { useState } from 'react';


const menuItemsData = [
    { to: '/Main', text: 'Main' },
    { to: '/Skills', text: 'Skills' },
    { to: '/Projects', text: 'Projects' },
    { to: '/Contacts', text: 'Contacts' },
];


export const MenuBurger: React.FC = () => {

    const [menuIsOpen,setMenuIsOpen ] = useState(false);
    const onBurgerBtnClick =  ()=>{
        setMenuIsOpen(!menuIsOpen)
    }
    return (
        <S.MenuBurger>
            <S.Burger isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
                <span></span>
                <span></span>
            </S.Burger>

            <S.Menu  role='dialog' aria-modal={true} isOpen={menuIsOpen}  onClick={()=>{setMenuIsOpen(false)}}>
                <S.MenuList>
                    {menuItemsData.map((m, index) => {
                        return (
                            <S.MenuItem key={index}>
                                <S.MenuLink to={m.to}>{m.text}</S.MenuLink>
                            </S.MenuItem>
                        )
                    })}
                </S.MenuList>
                <S.CloseBtn onClick={()=>{setMenuIsOpen(false)}}>close</S.CloseBtn>
            </S.Menu>
        </S.MenuBurger>
    );
};
