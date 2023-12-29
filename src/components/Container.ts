import styled from "styled-components";
import { theme } from "../style/Theme";

type StyledContainerPropsType = {
    maxWidth?: string,
}

export const Container = styled.div<StyledContainerPropsType>`
    position: relative;
    margin: 0 auto;
    max-width: ${props => props.maxWidth || '1360px'};
    width: 100%;
    
`