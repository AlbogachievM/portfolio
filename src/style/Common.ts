import { theme } from "./Theme"

type FontPropsType ={
    weight?: number,
    color?: string,
    lineHeight?:number,
    Fmin?: number,
    Fmax?: number

}

export const font = ({weight, color, lineHeight, Fmin, Fmax}:FontPropsType)=>`
    font-weight: ${weight || 400};
    color: ${color || theme.colors.font};
    line-height: ${lineHeight || 1.2};
    font-size: calc((100vw - 360px)/(1360 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`
// font-size: calc(100vw - Vmin)/(Vmax - Vmin) * (Fmax - Fmin) + Fmin);