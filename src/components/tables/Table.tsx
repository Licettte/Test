import React from 'react';
import {TableCell, TableContent, TableHead, TableRow, TableWrapper} from './styles';
import {TableColumn} from './types';
import {Checkbox} from '../ui/Checkbox';
import {Flex} from '../../styles';
import {ModalCompany} from "./ModalCompany";
import {Button} from "../ui/Button";

interface TableProps<T> {
    columns: TableColumn<T>[];
    dataSource: T[];
    locale?: { emptyText: string };
    handleCheckboxChange: (id: string) => void;
    handleSelectAll: (checkedAll: boolean) => void;
    handleDeleteCompany: (id: string) => void;
    handleDeleteAllCompany: () => void;
}

export const Table = <T extends Record<string, any>>({
                                                         columns,
                                                         dataSource,
                                                         locale = {emptyText: 'Нет данных'},
                                                         handleCheckboxChange,
                                                         handleSelectAll,
                                                         handleDeleteCompany,
                                                         handleDeleteAllCompany,
                                                     }: TableProps<T>) => {
    const showNotData = (
        <TableRow>
            <TableCell colSpan={columns.length}>{locale.emptyText}</TableCell>
        </TableRow>
    );


    const showData = dataSource?.map((data) => (
        <TableRow key={data.id}>
            {columns.map((column) => (
                <TableCell key={`${data.id}-${column.key}`} backgroundColor={data.checked}>

                    {data[column.dataIndex as keyof T]}
                    {column.dataIndex === 'checked' && (
                        <Checkbox
                            checked={data.checked}
                            onChange={() => handleCheckboxChange(data.id)}
                        />
                    )}

                    {column.dataIndex === 'edit' && (
                        <Flex justify={"center"}> <ModalCompany isEdit companyId={data.id}/> </Flex>
                    )}

                    {column.dataIndex === 'delete' && (
                        <Flex justify={"center"}>
                            <Button onClick={() => handleDeleteCompany(data.id)} height={'20px'}
                                    width={'80px'}>удалить </Button>
                        </Flex>
                    )}
                </TableCell>
            ))}
        </TableRow>
    ));

    const allChecked = dataSource.length ? dataSource.every((item) => item.checked) : false;

    console.log(allChecked, "allChecked")
    const tableHeader = (
        <TableRow>
            {columns.map((column) => (
                <TableCell key={column.key} style={{width: column.width}}>
                    <Flex justify="center" gap={5}>
                        {column.title}
                        {column.dataIndex === 'checked' && (
                            <Checkbox
                                checked={allChecked}
                                onChange={(e) => handleSelectAll(e.target.checked)}
                            />
                        )}
                        {column.dataIndex === 'delete' && (
                            <Button disabled={!allChecked}
                                    onClick={handleDeleteAllCompany} height={'20px'}
                                    width={'150px'}>{allChecked ? 'Удалить всё' : 'Удалить'} </Button>
                        )}

                    </Flex>
                </TableCell>
            ))}
        </TableRow>
    );

    return (
        <TableWrapper>
            <TableContent>
                <TableHead>{columns.length > 0 && tableHeader}</TableHead>
                <tbody>{dataSource.length > 0 ? showData : showNotData}</tbody>
            </TableContent>
        </TableWrapper>
    );
};
