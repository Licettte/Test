import styled from "styled-components";

type CommonType =
    | 'start'
    | 'center'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'space-between'
    | 'space-evenly'
    | 'space-around'
    | 'stretch'
    | 'safe center'
    | 'unsafe center'
    | 'inherit'
    | 'initial'
    | 'unset';

type JustifyType = CommonType | 'left' | 'right';

export const Flex = styled('div')<{
    align?: CommonType;
    justify?: JustifyType;
    dir?: 'column' | 'row';
    gap?: number;
    wrap?: string;
}>`
  display: flex;
  align-items: ${(props) => props.align || 'center'};
  justify-content: ${(props) => props.justify || 'unset'};
  flex-direction: ${(props) => props.dir || 'row'};
  gap: ${(props) => props.gap || 0}px;
  ${(props) => (props.wrap ? `flex-wrap: ${props.wrap}` : '')};
`;
