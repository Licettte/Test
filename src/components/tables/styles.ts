import styled from "styled-components";
import {colors} from "../../styles";

export const TableWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    overflow-y: hidden;
`;

export const TableContent = styled.table`
    width: 100%;
    border-collapse: collapse; 
    min-width: 600px;
    table-layout: fixed;`;
export const TableHead = styled.thead`
    width: 100%;
    border-collapse: collapse; 
    min-width: 600px;
    background:  ${colors.primary_color};
`;

export const TableCell = styled.td<{backgroundColor?: boolean}>`
    text-align: center;
    vertical-align: middle;
    padding: 12px;
    border: 2px solid ${colors.dark_l_color};
    min-height:200px;
    min-width: 100px;
    background-color: ${(props) => props.backgroundColor && colors.light_color}    
`;

export const TableRow = styled.tr`
    height: 50px; 
`;

