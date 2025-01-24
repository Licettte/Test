import styled from "styled-components";
import {colors} from "../../styles";

interface ButtonProps {
    color?: typeof colors[keyof typeof colors];
    height?: string;
    width?: string;
    isDisable?: boolean;
}

export const Button = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-width: 50px;
    width:${(props) => props.width || 'fit-content'}; 
    height: ${(props) => props.height || '56px'};
    border-radius: 48px;
    background: ${(props) => props.color || colors.primary_color};
    padding: 15px;

    &:hover {
        opacity: 0.8;
    }
`;
