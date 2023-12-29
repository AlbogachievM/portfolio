import styled, { css } from "styled-components"
import { theme } from "../../style/Theme"
import { NavLink } from "react-router-dom"

const Sidebar = styled.aside`
    max-width: 80px;
    width: 100%;
    border-right: 1px dotted ${theme.colors.font};
    @media ${theme.media.mobile}{
        display: none;
    }
`
const SidebarList = styled.ul`
    max-width: 100px;
    width: 100%;
    position: sticky;
    top: 50%;
    right: 50%;
    transform: translate(100%, -50%);
    color: ${theme.colors.font};
    list-style: none;
    z-index: 999;
`
const SidebarLink = styled(NavLink)`
    color: ${theme.colors.font};
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 100%;
    svg{
        margin-left: 5px;
        opacity: 0;
    }
`
const SidebarItem = styled.li<{active?: boolean}>`
    cursor: pointer;   
    margin-bottom: 20px;
    text-align: center;
    width: 4px;
    height: 50px;
    background-color: ${theme.colors.liBg};
    font-size: 0;
    border: 1px dotted ${theme.colors.font};
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    transition: ease 0.3s;
    
    ${props => props.active && css<{active?: boolean}>`
        background-color: ${theme.colors.accent};
    `}
    &:hover{
        width: 150px;
        font-size: 14px;
        background-color: ${theme.colors.accent};
        svg{
            fill: ${theme.colors.font};
            opacity: 1;
        }
        ${SidebarLink}{  
            font-size: 14px;
        }
    }
`


export const S = {
    Sidebar,
    SidebarList,
    SidebarLink,
    SidebarItem,
}