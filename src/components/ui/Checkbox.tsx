import React, {FC} from 'react';

interface CheckboxProps {
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox: FC<CheckboxProps> = ({checked, onChange}) => {
    return <input type="checkbox" checked={checked} onChange={onChange} style={{cursor: "pointer"}}/>
};

