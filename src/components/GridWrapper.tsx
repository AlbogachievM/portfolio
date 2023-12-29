import styled from "styled-components";

type GridWrapperPropsType = {
    direction?: string,
    justify?: string,
    align?: string,
    wrap?: string
    gap?: string
    margin?: string
}


export const GridWrapper = styled.div<GridWrapperPropsType>`
    display: grid;
    grid-template-columns: 100px 1fr 60px;
    grid-template-areas: "menu content down";
`