import React from 'react';
import styled from 'styled-components';

export const SectionTitle = styled.h2`
    position: relative;
    text-align: center;
    text-transform: uppercase;
    &::before{
        content: '';
        position: absolute;
        top: 50%;
        left: 22%;
        transform: translateY(-50%);
        background-color: green;
        width: 20%;
        height: 2px;

    }
    &::after{
        content: '';
        position: absolute;
        top: 50%;
        right: 22%;
        transform: translateY(-50%);
        background-color: green;
        width: 20%;
        height: 2px;
    }
`