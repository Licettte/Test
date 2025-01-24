import React, { FC } from 'react';
import styled from "styled-components";

interface InputProps {
    maxLength: number;
    placeholder: string;
    value: string;
    setValue: (value: string) => void;
}

const InputWrapper = styled.input`
    border-radius: 15px;
    width: 250px;
    padding: 10px;
`;

export const Input: FC<InputProps> = ({ maxLength, placeholder, value, setValue }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
    };

    return (
        <InputWrapper
            type="text"
            maxLength={maxLength}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
        />
    );
};
