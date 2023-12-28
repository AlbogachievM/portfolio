import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';



export const Slidebar = () => {
    return (
        <StyledSlidebar>
            <SlidebarList>
            <SlidebarItem>
                    <SlidebarLink href="#">
                        <Icon iconId={'telegram'} width='50px' height='50px' viewBox='0 0 50px 50px '/> Главная
                    </SlidebarLink>
                </SlidebarItem>
                <SlidebarItem>
                    <SlidebarLink href="#">
                        <Icon iconId={'telegram'} width='50px' height='50px' viewBox='0 0 50px 50px '/> My Skills
                    </SlidebarLink>
                </SlidebarItem>
                <SlidebarItem>
                    <SlidebarLink href="#">
                        <Icon iconId={'telegram'} width='50px' height='50px' viewBox='0 0 50px 50px '/> My project 
                    </SlidebarLink>
                </SlidebarItem>
                <SlidebarItem>
                    <SlidebarLink href="#">
                        <Icon iconId={'telegram'} width='50px' height='50px' viewBox='0 0 50px 50px '/> Contacts
                    </SlidebarLink>
                </SlidebarItem>
            </SlidebarList>
        </StyledSlidebar>
    );
};

const StyledSlidebar = styled.div`
    background-color: brown;
    position: relative;
    max-width: 5%;
    width: 100%;
    border-right: 2px dotted #333;
`

const SlidebarList = styled.ul`
background-color: aquamarine;
    max-width: 100px;
    width: 100%;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    list-style: none;
`

const SlidebarItem = styled.li`
    margin-bottom: 20px;
    border: 2px dotted #333;
    border-radius: 5px;
    font-size: 1.3rem;
`

const SlidebarLink = styled.a`
    
`