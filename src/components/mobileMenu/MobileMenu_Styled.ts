import styled, { css } from "styled-components"
import { theme } from "../../style/Theme"
import { NavLink } from "react-router-dom"

const MobileMenu = styled.nav`
    display: none;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: ${theme.colors.accent};
    width: 100%;
    height: 80px;
    z-index: 99999;
    @media ${theme.media.mobile}{
        display: block;
    }
`
const MobileMenuList = styled.ul`
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const MobileMenuItem = styled.li`
    padding: 10px;
    border-radius: 20px;
    &:hover{
        background-color: ${theme.colors.font};
        -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
        -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
        box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
        
        svg{    
           fill: ${theme.colors.accent};
        }   
    }
 
    
`
const MobileMenuLink = styled(NavLink)`
    svg{    
        fill: ${theme.colors.font};
}
    `

export const S = {
    MobileMenu,
    MobileMenuList,
    MobileMenuItem,
    MobileMenuLink,
}