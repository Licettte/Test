export interface Company {
    id: string;
    title: string;
    address: string;
}

export interface CompanyTable extends Company {
    id: string;
    checked: boolean,
    edit:  boolean
    delete:  boolean
}
export interface Companies {
    [key: string]: CompanyTable;
}


