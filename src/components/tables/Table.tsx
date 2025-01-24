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
    handleDeleteSelectedCompany: (id: string[]) => void;

}

export const Table = <T extends Record<string, any>>({
                                                         columns,
                                                         dataSource,
                                                         locale = {emptyText: 'Нет данных'},
                                                         handleCheckboxChange,
                                                         handleSelectAll,
                                                         handleDeleteCompany,
                                                         handleDeleteSelectedCompany,
                                                     }: TableProps<T>) => {


    const allChecked = dataSource.length ? dataSource.every((item) => item.checked) : false;
    const selectedIds = dataSource.reduce<string[]>((ids, item) => {
        if (item.checked) {
            ids.push(item.id);
        }
        return ids;
    }, []) ?? [];

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

                    </Flex>
                </TableCell>
            ))}
        </TableRow>
    );

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


    const buttonDeleteSelected = (allChecked || selectedIds.length) ?
        <TableRow>
            <TableCell colSpan={columns.length}> <Button
                style={{width: '100%', height: '100%', borderRadius: "0px"}}
                onClick={() => handleDeleteSelectedCompany(selectedIds)}>
                Удалить выбранное
            </Button>
            </TableCell>
        </TableRow>
        : null


    return (
        <TableWrapper>
            <TableContent>
                <TableHead>{columns.length > 0 && tableHeader}</TableHead>
                <tbody>{dataSource.length > 0 ? showData : showNotData}</tbody>
                {buttonDeleteSelected}
            </TableContent>
        </TableWrapper>
    );
};
