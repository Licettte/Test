export  type TableColumn<T> = {
    title: string;
    dataIndex: keyof T;
    key: string;
    width?: number;
};
