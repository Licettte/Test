import {TableColumn} from "./types";

export type ColumnCompanyType = {
    id: string;
    title: string;
    address: string;
    checked:boolean;
    edit: boolean;
    delete: boolean;
};

export const columns: TableColumn<ColumnCompanyType>[] = [
    {title: 'Наименование', dataIndex: 'title', key: 'title', width: 100},
    {title: 'Адрес', dataIndex: 'address', key: 'address', width: 200},
    {
        title: 'Выделить всё',
        dataIndex: 'checked',
        key: 'checked',
        width: 100,
    },
    {title: 'Изменить', dataIndex: 'edit', key: 'edit', width: 100},
    {title: '', dataIndex: 'delete', key: 'delete', width: 130},
];
