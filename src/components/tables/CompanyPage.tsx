import React, {FC} from 'react';
import {Table} from './Table';
import {columns, ColumnCompanyType} from "./constants";
import {useActions} from "../../store/actions";
import {useAppSelector} from "../../store/useAppSelector";
import {Flex} from "../../styles";
import {ModalCompany} from "./ModalCompany";

export const CompanyPage: FC = () => {
    const companies = useAppSelector((state) => state.companyReducer.companies);
    const {toggleCompanyChecked, toggleAllCompanyChecked, deleteCompany , deleteSelectedCompany} = useActions()

    const handleCheckboxChange = (id: string) => {
        toggleCompanyChecked({id: id});
    };

    const handleSelectAll = (isCheckedAll: boolean) => {
        toggleAllCompanyChecked({checked: isCheckedAll});
    };


    const handleDeleteCompany = (id: string) => {
        deleteCompany({companyId: id});
    };

    const handleDeleteSelectedCompany = (ids: string[]) => {
        deleteSelectedCompany({companyIds:ids});
    };
    return (
        <Flex gap={35} dir= 'column' align={'flex-end'}>
            <Table<ColumnCompanyType>
                columns={columns}
                dataSource={Object.values(companies)}
                handleCheckboxChange={handleCheckboxChange}
                handleSelectAll={handleSelectAll}
                handleDeleteCompany={handleDeleteCompany}
                handleDeleteSelectedCompany={handleDeleteSelectedCompany}
            />
            <ModalCompany />
        </Flex>
    );
};
