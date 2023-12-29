import styled, { css } from "styled-components"
import { theme } from "../../style/Theme"
import { NavLink } from "react-router-dom"

const MenuBurger = styled.div`
`
const Menu = styled.menu<{isOpen: boolean}>`
    display: none;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #0000007a;
    border-right: 1px dotted   #fff;
    border-left: 1px dotted   #fff;
    backdrop-filter: blur(10px);
    z-index: 999999;
    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
    `}
`
const MenuList = styled.ul`
    li + li{
        margin-top: 50px;
    }
`
const MenuItem = styled.li`
    text-align: center;
    
`
const MenuLink = styled(NavLink)`
    font-size: 50px;
    color:${theme.colors.font};
    transition: ease-out 0.2s;
    &:hover{
        color: ${theme.colors.accent};
        letter-spacing: 10px;
    }
`
const CloseBtn = styled.span`
    cursor: pointer;
    margin-top: 100px;
    font-size: 25px;
    color:${theme.colors.font};
    text-decoration: underline;
    text-transform: initial;
    transition: ease-out 0.2s;
    &:hover{
        text-decoration-color: ${theme.colors.accent};
        
        letter-spacing: 10px;
    }
`
const Burger = styled.button<{ isOpen: boolean }>`
    cursor: pointer;
    max-width: 40px;
    width: 100%;
    margin-top: 20px;
    position: sticky;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    flex-direction: column;
    display: flex;
    gap: 5px;
    ${props => props.isOpen && css<{ isOpen: boolean }>`
          background-color: #ffffff0;  
        `}
    span{
        display: block;
        width: 100%;
        height: 4px;
        background-color: #d85c36;
    }
`

export const S = {
    MenuBurger,
    Menu,
    MenuList,
    MenuItem,
    MenuLink,
    CloseBtn,
    Burger,

}