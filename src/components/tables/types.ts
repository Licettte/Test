export  type TableColumn<T> = {
    title: string;
    dataIndex: keyof T;
    key: string;
    width?: number;
};
// dataIndex: keyof T: Это означает,
// что dataIndex должен быть строкой, которая является одним
// из ключей типа Company.
